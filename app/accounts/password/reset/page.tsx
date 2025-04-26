import AuthQuestioniare from '@/components/AuthQuestioniare'
import AccountContainer from '@/components/containers/AccountContainer'
import ResetPasswordForm from '@/components/forms/ResetPasswordForm'
import React from 'react'

const ResetPassword = () => {
  return (
    <AccountContainer wrapperClassName="gap-y-8">
      <header className="space-y-1.5 flex flex-col items-center text-center">
        <h1 className='text-3xl font-bold tracking-tight'>Reset Your Password</h1>
        <p className="text-base font-medium w-10/12">Forgot your musical key? No worries! Enter your email address and we'll send you a link to create a new password that hits all the right notes.</p>
      </header>

      {/* Reset Password Form */}
      <ResetPasswordForm />

      <AuthQuestioniare
        title="Remember it now?"
        link={{
            title: "Back to Sign In",
            route: "/accounts/login"
        }}
      />
    </AccountContainer>
  )
}

export default ResetPassword