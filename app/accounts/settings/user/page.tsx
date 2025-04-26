import React from 'react'

import AccountContainer from '@/components/containers/AccountContainer'
import UserInfoSettingsForm from '@/components/forms/UserInfoSettingsForm'

const UserInfoSettings = () => {
  return (
    <AccountContainer wrapperClassName="gap-y-8">
      <header className="space-y-1.5 flex flex-col items-center text-center">
        <h1 className='text-3xl font-bold tracking-tight'>Tell us about yourself</h1>
      </header>

      {/* User Info Form */}
      <UserInfoSettingsForm />
    </AccountContainer>
  )
}

export default UserInfoSettings