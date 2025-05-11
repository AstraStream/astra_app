"use client";

import useWallet from '@/hooks/useWallet';
import { useChain } from '@/providers/ChainProvider';
import Image from 'next/image';
import React from 'react'

const WalletBoard = () => {
    const { activeChain, chains } = useChain();
    const { chainBalance } = useWallet(activeChain?.name);
    console.log(activeChain, chains)

    return (
        <section>
            <div className="space-y-1">
                <h6 className="font-bold text-primary text-lg">Balance</h6>
                <div className="-ml-3.5 flex items-center gap-x-3">
                    <figure>
                        <Image 
                            src={activeChain.imageSource}
                            alt={activeChain.name}
                            width={65}
                            height={65}
                        />
                    </figure>

                    <h1 className="text-5xl font-bold">
                        <span><span className="text-white">{chainBalance?.balance}</span></span> {" "}
                        <span className="uppercase">{activeChain.name}</span>
                    </h1>
                </div>
                <p className="text-xl font-bold text-white">${chainBalance?.balance}</p>
            </div>
        </section>
    )
}

export default WalletBoard