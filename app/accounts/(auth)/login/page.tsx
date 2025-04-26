import React from 'react';
import Link from 'next/link';

import AccountContainer from '@/components/containers/AccountContainer'
import AccountHeader from '@/components/headers/AccountHeader'
import OAuthItems from '@/components/OAuthItems'
import LoginAccountForm from '@/components/forms/LoginAccountForm';
import AuthQuestioniare from '@/components/AuthQuestioniare';

const SignIn = () => {
  return (
    <AccountContainer wrapperClassName="gap-y-8">
      <AccountHeader 
        title="Welcome back to your musical universe!"
        headline="Join the rhythm"
      />

      <div className="w-full space-y-6">
        {/* Form */}
        <LoginAccountForm />

        {/* Oauth */}
        <OAuthItems />

        {/* Options */}
        <AuthQuestioniare 
          title="I don't have an account?"
          link={{
            title: "Create Account",
            route: "/accounts/create"
          }}
        /> 
      </div>
    </AccountContainer>
  )
}

export default SignIn