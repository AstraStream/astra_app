"use client";

import { useSearchParams } from 'next/navigation';

const useSearchQuery = (query: string) => {
    const searchParams = useSearchParams();
    const myQuery = searchParams.get(query);

    return myQuery
}

export default useSearchQuery