"use client";

import React, { useState } from 'react'
import { toast } from 'sonner';

import {
    DropdownMenuContent,
    DropdownMenuSeparator,
} from "@/components/ui/DropdownMenu"

import { Button, buttonVariants } from '../ui/Button';
import Icons from '../Icons';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Checker from '../Checker';
import { useChain } from '@/providers/ChainProvider';
import { useReward } from '@/providers/RewardProvider';
// import useAstraProgram from '@/hooks/useAstraProgram';
// import { Connection, Keypair, PublicKey } from '@solana/web3.js';
// import { bs58 } from '@coral-xyz/anchor/dist/cjs/utils/bytes';

const RewardsDropdownContent = () => {
    const { 
        chains,
        activeChain,
        handleActiveChainOption
    } = useChain();
    const { setPoints } = useReward()
    const [isClaiming, setIsClaiming] = useState(false);


    // const pKey = process.env.NEXT_PUBLIC_WALLET as string;
    // const parseKey = Keypair.fromSecretKey(new Uint8Array(bs58.decode(pKey)))

    // const connection = new Connection("https://api.devnet.solana.com")
    // const mint = new PublicKey("")

    // const wallet = parseKey.publicKey;
    // const { 
    //     claimReward
    // } = useAstraProgram({ connection, wallet })
    // const claimRewardHandler = async () => {
    //     if (points != 0) toast.error("you dont have enough points to claim");

    //     const tx = await claimReward(
    //         "Cyphersloops",
    //         "Streamer",
    //         points,
    //         parseKey.publicKey,
    //         mint
    //     )
    //     console.log(tx)
    // }

    const claimReward = () => {
        toast.loading("Claiming reward");
        setIsClaiming(true);

        setTimeout(() => {
            setIsClaiming(false);
            setPoints(0);
            toast.success(`Reward sent to user ${activeChain.symbol} wallet`);
        }, 3000);
    }

    return (
        <div className="h-80 flex flex-col justify-between text-foreground pt-4">
            <div className="space-y-5">
                <h4 className="text-white text-lg font-semibold text-center">Select Chain</h4>

                {/* Chains */}
                <div className="space-y-3">
                    {chains.map((chain) => (
                        <Checker 
                            key={chain.name}
                            value={chain.name}
                            imageSource={chain.imageSource}
                            checked={activeChain?.name === chain.name}
                            order={false}
                            onChange={() => handleActiveChainOption(chain)}
                            className="h-14 px-4 cursor-pointer"
                            textClassName="text-base"
                        />
                    ))}

                    <Button
                        onClick={claimReward}
                        disabled={isClaiming}
                        size="lg"
                        className="w-full"
                    >
                        Claim
                    </Button>
                </div>
            </div>

            <footer className="inline-flex justify-end">
                <Link
                    href="/rewards"
                    className={cn(
                        "",
                        buttonVariants({
                            variant: "transparent",
                            size: "link"
                        })
                    )}
                >
                    Check all rewards
                    <Icons.eyeOpen />
                </Link>
            </footer>
        </div>
    )
}

const RewardsDropdown = () => {
    const { points } = useReward();

    return (
        <DropdownMenuContent
            align="end"
            className="w-[22rem] bg-background border-input p-3.5 mt-2.5"
        >
            <header className="flex items-center justify-between text-white">
            <h4 className="text-lg font-bold">Rewards</h4>
            <span className="text-sm font-semibold bg-primary px-2 py-0.5">{points} PT</span>
            </header>

            <DropdownMenuSeparator className="my-3" />

            {/* Rewards Dropdown Content */}
            <RewardsDropdownContent />
        </DropdownMenuContent>
    )
}

export default RewardsDropdown