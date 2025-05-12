"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react'

import useWallet from '@/hooks/useWallet';
import { useChain } from '@/providers/ChainProvider';
import Icons from './Icons';
import WalletDepositModal from './modals/WalletDepositModal';
import WalletWithdrawModal from './modals/WalletWithdrawModal';
import WalletSwapModal from './modals/WalletSwapModal';
import WalletStakeModal from './modals/WalletStakeModal';
import ChainSelector from './ChainSelector';

const WalletBoard = () => {
    const { activeChain, chains } = useChain();
    const { chainWalletBalance, chainWalletaddress } = useWallet(activeChain?.name);
    const [isBalanceVisible, setIsBalanceVisible] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);

        try {
            const storedBalanceVisibility = localStorage.getItem("astra_bv");

            if (storedBalanceVisibility) {
                setIsBalanceVisible(JSON.parse(storedBalanceVisibility));
            }
        } catch (err) {
            console.warn("Failed to parse active chain from localStorage");
        }
    }, []);

    const toggleBalanceVisibility = () => {
        setIsBalanceVisible(!isBalanceVisible);

        if (isClient) {
            localStorage.setItem("astra_bv", JSON.stringify(!isBalanceVisible));
        }
    }

    return (
        <div className="wallet-board-container p-10 flex flex-col justify-between">
            <div className="flex items-center justify-between">
                <div className="space-y-2">
                    <header className="flex items-center gap-x-1">
                        <h6 className="select-none font-medium text-white/50 text-lg">Total Balance</h6>
                        <span 
                            onClick={toggleBalanceVisibility}
                            className="hover:cursor-pointer text-white/50"
                        >
                            {isBalanceVisible ? (
                                <Icons.eyeOpen className="size-4" />
                            ) : (
                                <Icons.eyeClosed2 className="size-4" />
                            )}
                        </span>
                    </header>
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
                            <span>
                                {isBalanceVisible ? (
                                    <>
                                        <span className="text-white">
                                            {chainWalletBalance.split(".")[0]}
                                        </span>
                                        <span className="text-white">.</span>
                                        <span>
                                            {chainWalletBalance.split(".")[1]}
                                        </span>
                                    </>
                                ) : "*****"}
                            </span> {" "}
                            <span className="uppercase">{activeChain.symbol}</span>
                        </h1>
                    </div>
                    <p className="rounded-lg text-xl font-bold text-white">${chainWalletBalance}</p>
                </div>

                {/* Chain Selector */}
                <ChainSelector />
            </div>

            <div className="grid grid-cols-4 gap-3">
                {/* Send Modal */}
                <WalletWithdrawModal />

                {/* Receive Modal */}
                <WalletDepositModal />

                {/* Swap Modal */}
                <WalletSwapModal />

                {/* Stake Modal */}
                <WalletStakeModal />
            </div>
        </div>
    )
}

export default WalletBoard