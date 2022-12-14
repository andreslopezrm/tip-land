import { json, LoaderArgs, TypedResponse } from "@remix-run/node";
import { cors } from "remix-utils";
import { getUserIdByApiKey } from "~/db/apikey.server";
import { createStat } from "~/db/stats.server";
import { getRamdomTip } from "~/db/tip.server";
import { getQueryStringParameter } from "~/utils/params.server";


export async function loader({ request }: LoaderArgs) {
    const apiKey = getQueryStringParameter(request, "api_key");
    
    if(!apiKey) {
        return cors(request, json({ status: "forbidden", error: "Forbiden Access" }, { status: 403 }));
    }
    
    const userId = await getUserIdByApiKey(apiKey);

    if(!userId) {
        return cors(request, json({ status: "forbidden", error: "Forbiden Access", apiKey }, { status: 403 }));
    }
    await createStat(userId);
    const categorySlug = getQueryStringParameter(request, "category_slug");
    const tip = await getRamdomTip({ userId, categorySlug });
    
    return cors(request, json({ status: "ok", tip: tip?.description ?? null }));
}