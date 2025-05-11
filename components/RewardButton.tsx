import React from 'react'
import { buttonVariants } from './ui/Button'
import Icons from './Icons'
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu"
import RewardsDropdown from './dropdowns/RewardsDropdown'
import { cn } from '@/lib/utils'

const RewardButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="relative">
      <span
          className={cn(buttonVariants({ variant: "ghost", size: "ghost" }))}
          aria-description="Notifications"
        >
          <Icons.cash className="size-6 text-white/90" />
          <span className="sr-only">Rewards</span>
        </span>
      </DropdownMenuTrigger>

      {/* Rewards Dropdown */}
      <RewardsDropdown />
    </DropdownMenu>
  )
}

export default RewardButton