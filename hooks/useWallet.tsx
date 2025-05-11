"use client";

import { IChain } from "@/types/chains";

const walletBalance = {
    XION: {
        balance: "0.00"
    },
    Solana: {
        balance: "0.00"
    }
}

const useWallet = (chain: IChain["name"] | undefined) => {
    let chainBalance;

    if (chain) {
        chainBalance = walletBalance[chain];
    }

    return {
        chainBalance
    }
}

export default useWallet