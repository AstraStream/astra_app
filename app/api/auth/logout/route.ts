import axios from "@/lib/axios";
import type {
    NextApiRequest,
    NextApiResponse
} from "next";
import { serialize } from "v8";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        res.setHeader("Allow", ["POST"]);
        return res.status(405).end("Method Not Allowed");
    }
    
    // Set HTTP-Only cookie with token
    // res.setHeader('Set-Cookie', serialize("token", data.accessToken, {
    //     httpOnly
    // }))
    
    res.status(200).json({
        message: "Logged out"
    });
}