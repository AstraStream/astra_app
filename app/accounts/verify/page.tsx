import React from 'react' 

import AccountContainer from '@/components/containers/AccountContainer'
import VerifyForm from '@/components/forms/VerifyForm'

const VerifyUser = () => {
  return (
    <AccountContainer wrapperClassName="gap-y-8">
      <header className="space-y-1.5 flex flex-col items-center text-center">
        <h1 className='text-3xl font-bold tracking-tight'>Verify Account</h1>
        <p className="text-base font-medium w-10/12">Enter the OTP Code sent to your mail</p>
      </header>

      {/* Verify Form */}
      <VerifyForm />
    </AccountContainer>
  )
}

export default VerifyUser