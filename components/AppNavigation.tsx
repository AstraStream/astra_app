import React from 'react'
import SearchBar from './SearchBar'
import Profile from './Profile'
import NotificationButton from './NotificationButton'
import WalletButton from './WalletButton'

const AppNavigation = () => {
  return (
    <header className="col-start-2 col-end-3 sticky top-0 flex items-center justify-between h-12 pr-1.5">
      <SearchBar />

      <div className="flex items-center gap-3 h-full shrink-0">
        {/* User Profile */}
        <Profile />

        {/* User Wallet */}
        <WalletButton />

        {/* Notification Button */}
        <NotificationButton />
      </div>
    </header>
  )
}

export default AppNavigation