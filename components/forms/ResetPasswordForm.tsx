"use client";

import React from 'react'
import { Input } from '../ui/Input'
import { Button } from '../ui/Button'
import useResetPasswordForm from '@/hooks/useResetForm';

const ResetPasswordForm = () => {
  const { 
    formik,
    isLoading,
    isValid,
    error
  } = useResetPasswordForm();

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="grid gap-y-4"
    >
      <Input 
        type="email"
        name="email"
        placeholder="enter email"
        label="Email Address"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={error.message}
        aria-invalid={error.isInvalid}
      />

      <Button
        type="submit"
        disabled={isValid}
        isLoading={isLoading}
      >
        Send Reset Link
      </Button>
    </form>
  )
}

export default ResetPasswordForm