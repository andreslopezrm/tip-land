import { getAuth } from "@clerk/remix/ssr.server";
import { json, LoaderArgs, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import DashHeader from "~/components/dash-header";
import { getAllCategoriesByUser } from "~/db/category.server";

export async function loader({ request }: LoaderArgs) {
    const { userId } = await getAuth(request);
    
    if(!userId) {
        return redirect("/sign-up");
    }

    const categories = await getAllCategoriesByUser({ userId });
    return json({ categories });
}

export default function DashboardCategoryRoute() {

    const { categories } = useLoaderData<typeof loader>();
    console.log(categories);

    return (
        <div>
            <DashHeader title="Categories" />
        </div>
    );
}