"use client";

import React from 'react'
import Link from 'next/link'
import { Input } from '../ui/Input'
import { Button, buttonVariants } from '../ui/Button'
import useLoginForm from '@/hooks/useLoginForm';
import { cn } from '@/lib/utils';

const LoginAccountForm = () => {
  const { 
    formik,
    isLoading,
    isValid,
    errors
  } = useLoginForm();

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
        error={errors.email.message}
        aria-invalid={errors.email.isInvalid}
      />

      <Input 
        type="password"
        name="password"
        placeholder="enter password"
        label="Password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={errors.password.message}
        aria-invalid={errors.password.isInvalid}
      />

      {/* Forgot password link */}
      <Link
        href="/accounts/password/reset"
        className={cn(
          buttonVariants({ variant: "link", size: "link" }),
          "w-full justify-end -mt-2"
        )}
      >
        Forgot Password?
      </Link>

      <Button
        type="submit"
        disabled={isValid}
      >
        Continue
      </Button>
    </form>
  )
}

export default LoginAccountForm