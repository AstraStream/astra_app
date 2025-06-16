"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

interface IRewardContext {
    points: number;
    setPoints: (point: any) => void;
}

interface IRewardProvider {
    children: ReactNode
}

const RewardContext = createContext<IRewardContext | undefined>(undefined);

const RewardProvider = ({
    children
}: IRewardProvider) => {
    // const getPoint
    const [points, setPoints] = useState(0);

    useEffect(() => {
        try {
            const point = localStorage.getItem("astra-pt") ?? 0;

            if (point) {
                setPoints(JSON.parse(point));
            }
        } catch (err) {
            console.warn("Failed to parse points from localStorage");
        }
    }, []);

    return (
        <RewardContext.Provider value={{
            points,
            setPoints
        }}>
            {children}
        </RewardContext.Provider>
    )
}

const useReward = () => {
    const rewardContext = useContext(RewardContext);

    if (!rewardContext) {
        throw new Error("useChain must be used within RewardProvider");
    }

    return rewardContext;
}

export {
    RewardProvider,
    useReward
}