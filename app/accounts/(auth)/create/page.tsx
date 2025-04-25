import React from 'react';
import Link from 'next/link';

import AccountContainer from '@/components/containers/AccountContainer'
import CreateAccountForm from '@/components/forms/CreateAccountForm'
import AccountHeader from '@/components/headers/AccountHeader'
import OAuthItems from '@/components/OAuthItems'

const SignUp = () => {
  return (
    <AccountContainer wrapperClassName="gap-y-8">
      <AccountHeader 
        title="Create your account to start discovering music that moves you"
        headline="Join the rhythm"
      />

      <div className="space-y-6">
        {/* Form */}
        <CreateAccountForm />

        {/* Oauth */}
        <OAuthItems />

        {/* Options */} 
        <p className="text-lg text-center flex justify-center gap-x-1 font-medium">
          Already have an account?
          <Link
            href="/accounts/login"
            className="text-primary"
          >
            Log in
          </Link>
        </p>
      </div>
    </AccountContainer>
  )
}

export default SignUp