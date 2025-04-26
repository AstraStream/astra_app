import AccountContainer from '@/components/containers/AccountContainer'
import UpdatePasswordForm from '@/components/forms/UpdatePasswordForm'
import React from 'react'

const UpdatePassword = () => {
  return (
    <AccountContainer wrapperClassName="gap-y-8">
      <header className="space-y-1.5 flex flex-col items-center text-center">
        <h1 className='text-3xl font-bold tracking-tight'>Create New Password</h1>
        <p className="text-base font-medium w-10/12">Enter a password that's as memorable as your favorite lyrics but harder for others to guess.</p>
      </header>

      {/* Reset Password Form */}
      <UpdatePasswordForm />
    </AccountContainer>
  )
}

export default UpdatePassword