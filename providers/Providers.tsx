"use client";

import { ReactNode } from "react";
import { AuthProvider } from "./AuthProvider";
import { Toaster } from "@/components/ui/Sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface IProviders {
    children: ReactNode
}

const queryClient = new QueryClient();

const Providers = ({
    children
}: Readonly<IProviders>) => {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                {children}
            </AuthProvider>
            <Toaster />
        </QueryClientProvider>
    )
}

export default Providers