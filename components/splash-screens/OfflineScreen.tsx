"use client";

import React from 'react';
import Icons from '../Icons';
import config from '@/lib/config';
import useNetworkStatus from '@/hooks/useNetworkStatus';

const OfflineSplash = () => {
    return (
        <div className="w-full h-full flex-center flex-col">
            <Icons.eyeClosed2  className="size-40" />
            <h1 className="text-5xl mt-6 mb-5 text-white font-extrabold">You're offline</h1>
            <p className="text-lg">Make sure you're online. <span className="font-bold text-white underline decoration-dashed decoration-foreground">{config.backendApi}</span> works best with an internet connection.</p>
        </div>
    )
}

const OfflineScreen = ({
    children
}: Readonly<{
    children: React.ReactNode
}>) => {
    const isOnline = useNetworkStatus();

    if (!isOnline) {
        return (
            <OfflineSplash />
        )
    }

    return <>{children}</>
}

export default OfflineScreen