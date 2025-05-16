import React from 'react'
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from './ui/Select'
import { useChain } from '@/providers/ChainProvider'
import { IChain } from '@/types/chains';

const ChainSelector = () => {
  const { 
    chains, 
    activeChain,
    handleActiveChainOption
  } = useChain();

  const changeActiveChain = (value: string) => {
    const selectedChain = chains.filter(c => c.name.toLowerCase() === value.toLowerCase());
    handleActiveChainOption(selectedChain[0]);
  }

  return (
    <Select
      value={activeChain.name}
      onValueChange={changeActiveChain}
    >
      <SelectTrigger className="w-36 text-base !h-10">
        <SelectValue placeholder="Select chain" />
      </SelectTrigger>

      <SelectContent>
        {chains.map(({ name }) => (
          <SelectItem 
            key={name}
            value={name}
            className="capitalize"
          >
            {name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default ChainSelector