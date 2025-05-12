"use client";

import { ReactNode } from "react";
import { AuthProvider } from "./AuthProvider";
import { Toaster } from "@/components/ui/Sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PlayerProvider } from "./PlayerProvider";
import "react-loading-skeleton/dist/skeleton.css";

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
                <PlayerProvider>
                    {children}
                </PlayerProvider>
            </AuthProvider>
            <Toaster />
        </QueryClientProvider>
    )
}

export default Providers