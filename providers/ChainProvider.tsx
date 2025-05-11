"use client";

import { createContext, ReactNode, useContext, useState } from 'react'

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

const ChainContext = createContext<IChainContext>({
    chains: [],
    activeChain: {
        name: "Solana",
        imageSource: ""
    },
    handleActiveChainOption: () => {}
});

const allChains: IChain[] = [
    {
        imageSource: solanaImage,
        name: "Solana"
    },
    {
        imageSource: xionImage,
        name: "XION"
    }
];

const ChainProvider = ({
    children
}: IChainProvider) => {
    const currentActiveChainStorage = JSON.parse(localStorage.getItem("astra_achain") as string) ?? allChains[0];
    const [activeChain, setActiveChain] = useState<IChainContext["activeChain"]>(currentActiveChainStorage);
    
    // Select active chain
    const handleActiveChainOption = (chain: IChain) => {
        setActiveChain(chain);
        localStorage.setItem("astra-achain", JSON.stringify(chain));
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
        throw new Error("useChain must be used within AuthProvider");
    }

    return chainContext;
}

export {
    ChainProvider,
    useChain
}