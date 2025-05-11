import React from 'react'
import Link from 'next/link'

import Icons from './Icons'
import { buttonVariants } from './ui/Button'
import { cn } from '@/lib/utils'

const WalletButton = () => {
  return (
    <Link 
      href="/wallet"
      aria-description="Wallet"
      className={cn(
        "gap-2",
        buttonVariants({ 
          variant: "ghost",
          size: "ghost"
        }))}
    >
      <Icons.wallet className="size-6 text-white/90" />
      <span className="sr-only">Wallet</span>
    </Link>
  )
}

export default WalletButton