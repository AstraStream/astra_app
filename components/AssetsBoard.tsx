"use client";

import React from 'react';

import { ScrollArea } from './ui/ScrollArea';
import { useChain } from '@/providers/ChainProvider';
import Image from 'next/image';

const AssetsBoard = () => {
    const { chains } = useChain();

    return (
        <div className="wallet-board-container p-7 grid grid-rows-[max-content_1fr] gap-y-5 divide-y-1 divide-grey-300/80">
            <header className="flex items-center gap-x-2 pb-5">
                <h1 className="wallet-board-title">Assets</h1>
                <span className="rounded-full p-2 border border-input size-8 flex-center text-white font-semibold">2</span>
            </header>

            {/* Assets */}
            <ScrollArea className="h-full">
                <div className="space-y-1.5">
                    <header className="grid grid-cols-2">
                        <p className="text-[15px]">Asset</p>
                        <p className="text-end">Amount</p>
                    </header>

                    <div className="space-y-2">
                        {chains.map(chain => (
                            <div 
                                key={chain.name}
                                className="grid grid-cols-2 bg-grey-300/40 rounded-lg p-2.5"
                            >
                                <figure className="flex items-center gap-x-1">
                                    <Image 
                                        src={chain.imageSource}
                                        alt={chain.name}
                                        width={30}
                                        height={30}
                                    />
                                    <figcaption className="text-white -space-y-1">
                                        <p className="font-semibold">{chain.name}</p>
                                        <span className="text-foreground text-sm">20</span>
                                    </figcaption>
                                </figure>

                                <div className="flex flex-col items-end">
                                    <p className="text-white font-bold">23.12 {chain.symbol}</p>
                                    <span className="text-sm">$21,312</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </ScrollArea>
        </div>
    )
}

export default AssetsBoard