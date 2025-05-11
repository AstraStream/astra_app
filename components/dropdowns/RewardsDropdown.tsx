"use client";

import React from 'react'
import {
    DropdownMenuContent,
    DropdownMenuSeparator,
} from "@/components/ui/DropdownMenu"

import { Button, buttonVariants } from '../ui/Button';
import Icons from '../Icons';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Checker from '../Checker';
import useRewards from '@/hooks/useRewards';
import { useChain } from '@/providers/ChainProvider';

const RewardsDropdownContent = () => {
    const { 
        chains,
        activeChain,
        handleActiveChainOption
    } = useChain();

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
    const { points } = useRewards();

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