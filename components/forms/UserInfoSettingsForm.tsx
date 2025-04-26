"use client";

import React from 'react'
import { Input } from '../ui/Input'
import { Button } from '../ui/Button'
import useUserInfoSettingsForm from '@/hooks/useUserInfoSettingsForm';
import { Checker } from '../PasswordChecker';
import { genderOptions } from '@/lib/constants';


const UserInfoSettingsForm = () => {
  const { 
    formik,
    isLoading,
    isValid,
    handleCheckboxChange,
    errors
  } = useUserInfoSettingsForm();

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="grid gap-y-4"
    >
      <Input 
        type="text"
        name="name"
        placeholder="enter name & last name"
        label="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={errors.name.message as string}
        aria-invalid={errors.name.isInvalid}
      />

      {/* Gender Checklist */}
      <div 
        role="group"
        className="w-11/12 flex flex-col gap-y-1.5"
      >
        <span className="text-sm font-medium text-muted">Gender</span>

        {/* Checklist */}
        <div className="grid grid-cols-3 gap-2">
          {genderOptions.map(option => (
            <Checker 
              key={option}
              value={option}
              checked={formik.values.gender === option}
              order={false}
              onChange={() => handleCheckboxChange(option)}
            />
          ))}
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
  )
}

export default UserInfoSettingsForm