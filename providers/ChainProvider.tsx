"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

import solanaImage from "@/assets/chains/solana.png";
import xionImage from "@/assets/chains/xion.png";
import { IChain } from '@/types/chains';

interface IChainContext {
    chains: IChain[] | [];
    activeChain: IChain;
    handleActiveChainOption: (chain: IChain) => void
}

interface IChainProvider {
    children: ReactNode
}

const ChainContext = createContext<IChainContext | undefined>(undefined);

const allChains: IChain[] = [
    {
        imageSource: solanaImage,
        name: "Solana",
        symbol: "SOL"
    },
    {
        imageSource: xionImage,
        name: "XION",
        symbol: "XION"
    }
];

const ChainProvider = ({
    children
}: IChainProvider) => {
    const [activeChain, setActiveChain] = useState<IChainContext["activeChain"]>(allChains[0]);
    const [isClient, setIsClient] = useState(false);
    
    useEffect(() => {
        setIsClient(true);

        try {
            const storedChain = localStorage.getItem("astra_achain");

            if (storedChain) {
                setActiveChain(JSON.parse(storedChain));
            }
        } catch (err) {
            console.warn("Failed to parse active chain from localStorage");
        }
    }, [])

    // Select active chain
    const handleActiveChainOption = (chain: IChain) => {
        setActiveChain(chain);

        if (isClient) {
            localStorage.setItem("astra_achain", JSON.stringify(chain));
        }
    }

    return (
        <ChainContext.Provider value={{
            chains: allChains,
            activeChain,
            handleActiveChainOption
        }}>
            {children}
        </ChainContext.Provider>
    )
}

const useChain = () => {
    const chainContext = useContext(ChainContext);

    if (!chainContext) {
        throw new Error("useChain must be used within ChainProvider");
    }

    return chainContext;
}

export {
    ChainProvider,
    useChain
}