import React from 'react'
import Icons from './Icons'

const WalletButton = () => {
  return (
    <div className='flex items-center gap-2'>
        <Icons.wallet className="size-6 text-white/90" />
        <span className="font-bold">0 Points</span>
    </div>
  )
}

export default WalletButton