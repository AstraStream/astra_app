"use client";

import { useChain } from "@/providers/ChainProvider";
import { IChain } from "@/types/chains";

const walletBalance = {
    XION: {
        balance: 0,
        address: "XION0ea520681bAC3BfceAD9024326021c659A2743"
    },
    Solana: {
        balance: 0,
        address: "GyF7wSBoPti4NRxnZGa4EDpAdruzWcZRJGEbbsDw58Em"
    }
}

// const tokens = 

const useWallet = (chain: IChain["name"] | undefined) => {
    const { chains } = useChain();
    let wallet;

    if (chain) {
        wallet = walletBalance[chain];
    }

    return {
        chainWalletBalance: wallet?.balance.toFixed(2).toLocaleString() ?? "0.00",
        chainWalletaddress: wallet?.address ?? "",
        tokens: chains
    }
}

export default useWallet