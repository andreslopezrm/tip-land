import { Entity, Repository, Schema } from "redis-om";
import { getRamdomItemFromArray } from "~/utils/ramdom";
import { Category, getCategoryByUserAndSlug } from "./category.server";
import { redisClient, redisConnect } from "./redis.server";

export interface Tip {
    description: string;
    categoryId: string;
    userId: string;
    createAt: Date;
    category?: Category
}

export class Tip extends Entity {}

export type TipCreate = Pick<Tip, "userId" | "description" | "categoryId">

export type TipUpdate = Pick<Tip, "entityId" | "description" | "categoryId">

export type TipFilterCategory = Pick<Tip, "userId" |  "categoryId">

export type TipSearch = {
    userId: string;
    offset?: number;
    perPage?: number;
}

const tipSchema = new Schema(Tip, {
    description: { type: "string" },
    categoryId: { type: "string", indexed: true },
    userId: { type: "string", indexed: true },
    createAt: { type: "date", sortable: true }
});

async function getTipRepository(): Promise<Repository<Tip>> {
    await redisConnect();
    const repository = redisClient.fetchRepository(tipSchema);
  
    await repository.createIndex();
    return repository;
}

export async function getAllTipsByUser(userId: string): Promise<Tip[]> {
    const repository = await getTipRepository();

    return repository.search()
            .where("userId")
            .equals(userId)
            .all();
}

export async function getAllTipsByUserAndCategory({ userId, categoryId }: TipFilterCategory): Promise<Tip[]> {
    const repository = await getTipRepository();

    return repository.search()
            .where("userId")
            .equals(userId)
            .where("categoryId")
            .equals(categoryId)
            .all();
}

export async function getAllTipsByUserPaging({ userId, offset = 0, perPage = 1}: TipSearch): Promise<Tip[]> {
    const repository = await getTipRepository();

    return repository.search()
            .where("userId")
            .equals(userId)
            .sortDescending("createAt")
            .return
            .page(offset, perPage);
}

export async function countAllTipsByUser(userId: string): Promise<number> {
    const repository = await getTipRepository();

    return repository.search()
        .where("userId")
        .equals(userId)
        .return
        .count();
}

export function getTipsWithCategory({ tips, categories }: { tips: Tip[], categories: Category[] }) {
    return tips.map(({ entityId, categoryId, description }) => ({
        entityId,
        description,
        categoryId,
        category: categories.find(category => categoryId === category.entityId)
    }));
}

export async function getTipById(entityId: string): Promise<Tip> {
    const repository = await getTipRepository();
    return repository.fetch(entityId);
}

export async function createTip({ userId, description, categoryId } : TipCreate) : Promise<Tip> {
    const repository = await getTipRepository();
    return repository.createAndSave({ userId, description, categoryId, createAt: new Date() });
}

export async function updateTip({ entityId, description, categoryId }: TipUpdate): Promise<Tip> {
    const repository = await getTipRepository();
    const tip = await getTipById(entityId);
    
    if(!tip) {
        throw new Error("Tip not found");
    }

    tip.description = description;
    tip.categoryId = categoryId;

    await repository.save(tip);
    return tip;
}

export async function deleteTip(entityId: string): Promise<void> {
    const repository = await getTipRepository();
    await repository.remove(entityId);
}

export async function getRamdomTip({ userId, categorySlug }: { userId: string, categorySlug: string | null }): Promise<Tip | null> {
    if(categorySlug) {
        const category = await getCategoryByUserAndSlug({ userId, slug: categorySlug });
        
        if(category) {
            const tips = await getAllTipsByUserAndCategory({ userId, categoryId: category.entityId });
            const tip = getRamdomItemFromArray(tips);
        }
    }

    const tips = await getAllTipsByUser(userId);
    return getRamdomItemFromArray(tips);
}

export async function getTotalTipsByUser(userId: string): Promise<number> {
    const repository = await getTipRepository();
    return repository.search()
                    .where("userId")
                    .equals(userId)
                    .count();
}