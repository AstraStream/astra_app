import AssetsBoard from '@/components/AssetsBoard'
import TransactionsBoard from '@/components/TransactionsBoard'
import WalletBoard from '@/components/WalletBoard'
import React from 'react'

const Wallet = () => {
  return (
    <main className="space-y-3.5 lg:space-y-5">
      <section className="grid grid-cols-2 gap-3.5 lg:gap-5">
        <WalletBoard />
        <AssetsBoard />
      </section>

      <TransactionsBoard />
    </main>
  )
}

export default Wallet