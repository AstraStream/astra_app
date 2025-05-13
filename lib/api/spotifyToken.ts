import { cookies } from "next/headers";

const ACCESS_TOKEN_KEY = 'spotify_access_token';
const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_SECRET_KEY;

const bufferedCredentials = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
const expiresAt = Date.now() + 3600 * 1000;

// Get Spotify Access Token
export const getAccessToken = async (): Promise<string> => {
    const cookieStore = await cookies(); 
    const accessToken = cookieStore.get(ACCESS_TOKEN_KEY)?.value;
    
    const currentTime = Date.now();

    // Return Access Token if it exists and is valid else fetch a new Access Token
    if (accessToken && expiresAt && currentTime < expiresAt) {
        return accessToken;
    } else {
        return await fetchNewAccessToken();
    }
}

// Fetch New Access Token
const fetchNewAccessToken = async () => {
    const cookieStore = await cookies(); 

    if (!clientId || !clientSecret) {
        throw new Error("Missing Spotify Client ID or Client Secret");
    }

    const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          Authorization: `Basic ${bufferedCredentials}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "client_credentials",
        }),
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch access token: ${response.statusText}`);
    }

    const data = await response.json();

    cookieStore.set(ACCESS_TOKEN_KEY, data.access_token, {
        httpOnly: true,
        maxAge: data.expires_in
    });

    return data.access_token;
}
