import axios from "@/lib/axios";
import type {
    NextApiRequest,
    NextApiResponse
} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        res.setHeader("Allow", ["POST"]);
        return res.status(405).end("Method Not Allowed");
    }

    const { email, password } = req.body;

    try {
        const response = await axios.post("/login", {
            email,
            password
        });

        if (response.status !== 200) {
            const error = response.data;
            return res.status(response.status).json({
                messagee: error.message || "Login failed"
            });
        }

        const { data } = response;
        
        if (!data.accessToken) {
            return res.status(500).json({
                message: "No access token returned"
            });
        }

        // Set HTTP-Only cookie with token
        // res.setHeader('Set-Cookie', serialize("token", data.accessToken, {
        //     httpOnly
        // })) 
    } catch (err) {
        console.error("Login API error:", err);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}