"use client";

import React from 'react'
import { Input } from '../ui/Input'
import { Button } from '../ui/Button'
import useUpdatePasswordForm from '@/hooks/useUpdatePassword';
import { PasswordChecker } from '../PasswordChecker';

const UpdatePasswordForm = () => {
  const { 
    formik,
    isLoading,
    isValid,
    errors
  } = useUpdatePasswordForm();

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="grid gap-y-4"
    >
      <div className="space-y-2">
        <Input 
          type="password"
          name="newPassword"
          placeholder="enter password"
          label="New Password"
          value={formik.values.newPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={errors.newPassword.message}
          aria-invalid={errors.newPassword.isInvalid}
        />

        <PasswordChecker password={formik.values.newPassword} />
      </div>

      <Input 
        type="password"
        name="confirmNewPassword"
        placeholder="enter password"
        label="Confirm New Password"
        value={formik.values.confirmNewPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={errors.confirmNewPassword.message}
        aria-invalid={errors.confirmNewPassword.isInvalid}
      />

      <Button
        type="submit"
        disabled={isValid}
        isLoading={isLoading}
      >
        Update Password
      </Button>
    </form>
  )
}

export default UpdatePasswordForm