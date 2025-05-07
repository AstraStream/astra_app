"use client";

import { ReactNode } from "react";
import { AuthProvider } from "./AuthProvider";
import { Toaster } from "@/components/ui/Sonner";

interface IProviders {
    children: ReactNode
}

const Providers = ({
    children
}: Readonly<IProviders>) => {
    return (
        <>
            <AuthProvider>
                {children}
            </AuthProvider>
            <Toaster />
        </>
    )
}

export default Providers