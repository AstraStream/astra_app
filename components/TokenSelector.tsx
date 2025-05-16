"use client";

import {
    useState,
} from "react";
import { fetchTokens } from "@/lib/services/tokens.service";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/Dialog";


interface ITokenSelector {
    selectedToken: Token | null;
    onSelect: (token: Token) => void;
    excludeToken?: string;
}

const TokenSelector = ({
    selectedToken,
    onSelect,
    excludeToken
}: ITokenSelector) => {
    const { data: tokens = [], isLoading, error } = useQuery<Token[], Error>({
        queryKey: ["tokens"],
        queryFn: async () => await fetchTokens()
    });
    
    const filteredTokens = excludeToken
        ? tokens.filter((token) => token.address !== excludeToken)
        : tokens;

    console.log(filteredTokens);

    return (
        <div>
            {true && <div className="grid gap-y-2">
                {Array.from({ length: 6 }).map((_, idx) => (
                    <Skeleton width={100} height={20} />
                ))}    
            </div>}
            {error && <p>Error: {error.message}</p>}
            {filteredTokens.length > 0 ? (
                <select
                value={selectedToken?.address || ""}
                onChange={(e) => {
                    const selected = filteredTokens.find((token) => token.address === e.target.value);
                    if (selected) onSelect(selected);
                }}
                >
                <option value="" disabled>
                    Select a token
                </option>
                {filteredTokens.map((token) => (
                    <option key={token.address} value={token.address}>
                    {token.symbol} - {token.name}
                    </option>
                ))}
                </select>
            ) : (
                !isLoading && <p>No tokens available</p>
            )}
        </div>
    )
}

export default TokenSelector;