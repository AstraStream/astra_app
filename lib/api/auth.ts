import { AuthValues } from "@/hooks/useRegisterForm";
import {
    useMutation,
    useQuery,
    useQueryClient
} from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from 'sonner';

import { VerifyCredential } from "@/hooks/useVerifyForm";
import axios from "../axios";
import { CompleteUserRegistrationValues } from "@/hooks/useUserInfoSettingsForm";

// Register Mutation
export function useRegister() {
    const router = useRouter();

    return useMutation({
        mutationFn: async (credentials: AuthValues) => {
            const response = await axios.post("/auth/register", credentials);

            if (response.status !== 200) throw new Error("Registration failed");

            return {
                email: credentials.email, 
                ...response.data
            };
        },
        onSuccess: (data) => {
            router.push(`/accounts/verify?email=${data.email}`);
        }, 
        onError: (error) => {
            console.error("Registration error", error);
        }
    })
}

// Verify Email Mutation
export function useVerifyUserEmail() {
    const router = useRouter();

    return useMutation({
        mutationFn: async (credentials: VerifyCredential) => {
            const response = await axios.post("/auth/verify-email", credentials);

            if (response.status !== 200) throw new Error("Email Verification failed");

            return { email: credentials.email };
        },
        onSuccess: (data) => {
            router.push(`/accounts/settings/user?email=${data.email}`);
        }, 
        onError: (error) => {
            console.error("Email verification error", error);
        }
    })
}

// Resend Verification Code Mutation
export function useResendVerifyCode() {
    return useMutation({
        mutationFn: async (email: VerifyCredential["email"]) => {
            const response = await axios.post("/auth/send-confirmation-email", { email });

            if (response.status !== 200) throw new Error("Failed to send confirmation code");

            return response.data;
        },
        onSuccess: () => {
            toast.success(`Verification code sent to your mail`);
        }, 
        onError: (error) => {
            console.error("Send confirmation code error", error);
        }
    })
}

// Resend Verification Code Mutation
export function useCompleteUserRegistration() {
    const router = useRouter();

    return useMutation({
        mutationFn: async (credentials: CompleteUserRegistrationValues & Record<"email", string>) => {
            const response = await axios.post("/auth/complete-registration", credentials);

            if (response.status !== 200) throw new Error("Failed to send confirmation code");

            return response.data;
        },
        onSuccess: (data) => {
            localStorage.setItem("tk", JSON.stringify(data));

            // Redirect to app
            router.push("/");
        }, 
        onError: (error) => {
            console.error("Send confirmation code error", error);
        }
    })
}

// Login Mutation
export function useLogin() {
    const router = useRouter();

    return useMutation({
        mutationFn: async (credentials: AuthValues) => {
            const response = await axios.post("/auth/login", credentials);

            if (response.status !== 200) throw new Error("Registration failed");

            return response.data;
        },
        onSuccess: () => {
            // Redirect to app
            router.push("/");
        }, 
        onError: (error) => {
            console.error("Registration error", error);
        }
    })
}