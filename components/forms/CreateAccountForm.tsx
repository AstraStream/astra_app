"use client";

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Checkbox } from '../ui/Checkbox'
import { Input } from '../ui/Input'
import { Button } from '../ui/Button'
import { PasswordChecker } from '../PasswordChecker'
import useRegisterForm from '@/hooks/useRegisterForm';
import AuthMailNotifierModal from '../modals/AuthMailNotifierModal';

const CreateAccountForm = () => {
  const { 
    formik,
    displayDialog,
    setDisplayDialog,
    isLoading,
    isValid,
    errors
  } = useRegisterForm();

  return (
    <>
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

        <div className="space-y-2">
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

          <PasswordChecker password={formik.values.password} />
        </div>

        {/* Terms and Condition */}
        <div className="items-top flex space-x-2">
          <Checkbox id="terms" />

          <div className="grid leading-none select-none">
            <label
              htmlFor="terms"
              className="text-lg leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              By clicking on the checkbox, you agree to Astra's
            </label>
            <Link
              href="/terms" 
              className="text-primary text-lg"
            >
              Terms and Conditions of Use
            </Link>
          </div>
        </div>

        <Button
          type="submit"
          disabled={isValid}
          isLoading={isLoading}
        >
          Continue
        </Button>
      </form>

      {/* Mail Notifier Modal */}
      <AuthMailNotifierModal 
        isOpen={displayDialog}
        toggleState={setDisplayDialog}
      />
    </>
  )
}

export default CreateAccountForm