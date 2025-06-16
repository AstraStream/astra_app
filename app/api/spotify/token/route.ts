import { getAccessToken } from "@/lib/apis/spotifyToken";

export async function GET() {
    try {
        const accessToken = await getAccessToken();
        
        return new Response(JSON.stringify({
            access_token: accessToken
        }))
    } catch (error) {
        return new Response(JSON.stringify({ error: "Failed to fetch access token" }), { 
            status: 500,
            headers: { "Content-Type": "application/json" } 
        });
    }
}