import React from 'react';
import Link from 'next/link';

import AccountContainer from '@/components/containers/AccountContainer'
import CreateAccountForm from '@/components/forms/CreateAccountForm'
import AccountHeader from '@/components/headers/AccountHeader'
import OAuthItems from '@/components/OAuthItems'
import AuthQuestioniare from '@/components/AuthQuestioniare';

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
        <AuthQuestioniare 
          title="Already have an account?"
          link={{
            title: "Log in",
            route: "/accounts/login"
          }}
        />
      </div>
    </AccountContainer>
  )
}

export default SignUp