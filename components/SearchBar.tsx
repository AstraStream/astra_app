"use client";

import React, { useState } from 'react'
import { useDebounce } from "use-debounce";
import Icons from './Icons'
import { useSearchSpotify } from '@/hooks/useSpotify';

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounce(query, 400);
  const { data, isLoading, isError } = useSearchSpotify(debouncedQuery);

  console.log(data, isLoading, isError);

  return (
    <div className="bg-grey-100 w-96 h-full rounded-xl flex items-center px-3 gap-3">
      <Icons.search className="size- 6" />
      <input 
        type="search"
        name="search"
        value={query}
        onChange={({ target }) => setQuery(target.value)} 
        placeholder="Search for music, artist or album"
        className="flex-1 h-full placeholder:text-white/40 outline-none placeholder:text-[15px]"
      />
    </div>
  )
}

export default SearchBar