import { getAccessToken } from "@/lib/api/spotifyToken";
import redis from "@/lib/redis";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");
    const type = searchParams.get("type") || "track";

    
    if (!query) {
        return new Response(JSON.stringify(
            { error: "Missing query" }),
            { status: 400 }
        );
    }
    
    const cacheKey = `spotify:${type}:${query}`;
    const cached = await redis.get(cacheKey);
    
    // Return cached query result if it exists
    if (cached) return new Response(cached);
    
    const accessToken = await getAccessToken();
    const res = await fetch(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=${type}`, 
        {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        
        const data = await res.json();
        await redis.setex(cacheKey, 3000, JSON.stringify(data));
        return Response.json(data);
}