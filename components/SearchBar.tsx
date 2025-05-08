import React from 'react'
import Icons from './Icons'

const SearchBar = () => {
  return (
    <form className="bg-grey-100 w-96 h-full rounded-xl flex items-center px-3 gap-3">
      <Icons.search className="size- 6" />
      <input 
        type="search"
        name="search"
        placeholder="Search for music, artist or album"
        className="flex-1 h-full placeholder:text-white/40 outline-none placeholder:text-[15px]"
      />
    </form>
  )
}

export default SearchBar