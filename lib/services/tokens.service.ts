import axios from "axios";

export const fetchTokens = async (): Promise<Token[]> => {
    try {
        const response = await axios.get("https://lite-api.jup.ag/tokens/v1/new?limit=100&offset=0");
        const tokenList: Token[] = response.data;
        return tokenList
    } catch (err) {
        throw new Error(`Failed to fetch tokens: ${err instanceof Error ? err.message : String(err)}`);
    }
}