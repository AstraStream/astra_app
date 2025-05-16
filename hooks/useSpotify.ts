import { useQuery } from "@tanstack/react-query";

const fetchSpotifyAPI = async (endpoint: string) => {
    const res = await fetch(`/api/spotify/${endpoint}`);
    if (!res.ok) throw new Error("Spotify API failed");
    return res.json();
}

export const useSearchSpotify = (
    query: string,
    type = "track,artist"
) => {
    return useQuery({
        queryKey: ["spotify", "search", query],
        queryFn: async () => await fetchSpotifyAPI(`search?query=${encodeURIComponent(query)}&type=${type}`),
        enabled: !!query,
        staleTime: 1000 * 60 * 5
    })
}