import { InternalAxiosRequestConfig } from "axios";

export const withAuth =
    (...data: any) => 
    async (config: InternalAxiosRequestConfig) => {
        const token = (config.headers.Authorization as string)?.split(" ")[1];

        // Verify access token if present
        const verified = token ? token : false;

        // Returns 403 if token is invalid
        if (!verified) {
            return [403, { message: "Unauthorized" }];
        }

        return typeof data[0] === "function" ? data[0](config) : data;
    }