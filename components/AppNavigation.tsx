import React from 'react'
import Link from 'next/link'

import SearchBar from './SearchBar'
import Profile from './Profile'
import NotificationButton from './NotificationButton'
import WalletButton from './WalletButton'
import { cn } from '@/lib/utils'
import logo from "@/assets/logo.png";
import Image from 'next/image'
import RewardButton from './RewardButton'

type NavigationTypes = "dapp" | "play";

type AppNavigationProps = {
  variant?: NavigationTypes
}

const AppNavigation = ({
  variant="play"
}: AppNavigationProps) => {
  let variantClassName = "";

  if (variant === "dapp") {
    variantClassName = "py-2 h-16"
  } else if (variant === "play") {
    variantClassName = "col-span-full lg:col-start-2 lg:col-end-3 pr-1.5 h-12";
  }

  return (
    <header className={cn(
      "sticky top-0 flex items-center justify-between",
      variantClassName
    )}>
      {variant === "play" && (
        <SearchBar />
      )}
      
      {variant === "dapp" && (
        <Link
          href="/"
          className=""
        >
          <Image 
            src={logo}
            alt="App Logo"
            className="w-1/2"
          />
        </Link>
      )}

      <div className="flex items-center gap-3 h-full shrink-0">
        {/* User Profile */}
        <Profile />

        {/* User Wallet */}
        <WalletButton />

        {/* Reward Button */}
        <RewardButton />

        {/* Notification Button */}
        <NotificationButton />
      </div>
    </header>
  )
}

export default AppNavigation