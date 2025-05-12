import React from 'react'
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from './ui/Select'

const ChainSelector = () => {

  return (
    <Select>
      <SelectTrigger className="w-max h-4">
        <div className="size-4 rounded-full bg-red-300"></div>
        <SelectValue placeholder="Select chain" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="nigeria">Nigeria 🇳🇬</SelectItem>
        <SelectItem value="uk">UK 🇬🇧</SelectItem>
        <SelectItem value="japan">Japan 🇯🇵</SelectItem>
      </SelectContent>
    </Select>
  )
}

export default ChainSelector