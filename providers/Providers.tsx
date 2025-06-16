"use client";

import { ReactNode } from "react";
import { Toaster } from "@/components/ui/Sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PlayerProvider } from "./PlayerProvider";
import "react-loading-skeleton/dist/skeleton.css";
import { RewardProvider } from "./RewardProvider";

interface IProviders {
    children: ReactNode
}

const queryClient = new QueryClient();

const Providers = ({
    children
}: Readonly<IProviders>) => {
    return (
        <QueryClientProvider client={queryClient}>
            <RewardProvider>
                <PlayerProvider>
                    {children}
                </PlayerProvider>
            </RewardProvider>
            <Toaster />
        </QueryClientProvider>
    )
}

export default Providers