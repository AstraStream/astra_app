import AccountContainer from '@/components/containers/AccountContainer'
import CreateAccountForm from '@/components/forms/CreateAccountForm'
import AccountHeader from '@/components/headers/AccountHeader'
import React from 'react'

const SignUp = () => {
  return (
    <AccountContainer wrapperClassName=" gap-y-6">
      <AccountHeader 
        title="Create your account to start discovering music that moves you"
        headline="Join the rhythm"
      />

      {/* Form */}
      <CreateAccountForm />
    </AccountContainer>
  )
}

export default SignUp