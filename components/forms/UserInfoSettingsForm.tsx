"use client";

import React from 'react'
import { Input } from '../ui/Input'
import { Button } from '../ui/Button'
import useUserInfoSettingsForm, { genderOptions } from '@/hooks/useUserInfoSettingsForm';
import Checker from '../Checker';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select"
import SuccessfulAuthSplashScreen from '../splash-screens/SuccessfulAuthSplashScreen';


const UserInfoSettingsForm = () => {
  const { 
    formik,
    isLoading,
    isValid,
    handleCountrySelect,
    handleGenderChange,
    // handleRoleSelect,
    errors,
    isSuccessful
  } = useUserInfoSettingsForm();

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="grid gap-y-4"
      >
        <Input 
          type="text"
          name="username"
          placeholder="enter username"
          label="Username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={errors.username.message as string}
          aria-invalid={errors.username.isInvalid}
        />

        {/* Country */}
        <div 
          role="group"
          className="form-group"
        >
          <label className="form-label">Country</label>

          <Select
            value={formik.values.country}
            onValueChange={handleCountrySelect}
          >
            <SelectTrigger 
              className="w-full" 
              aria-invalid={errors.country.isInvalid}
            >
              <SelectValue placeholder="select country" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="nigeria">Nigeria 🇳🇬</SelectItem>
              <SelectItem value="uk">UK 🇬🇧</SelectItem>
              <SelectItem value="japan">Japan 🇯🇵</SelectItem>
            </SelectContent>
          </Select>

          {errors.country.message && (
            <span className="text-sm font-inter text-destructive-light">{errors.country.message}</span>
          )}
        </div>

        {/* Role */}
        {/* <div 
          role="group"
          className="form-group"
        >
          <label className="form-label">Role</label>

          <Select
            value={formik.values.role}
            onValueChange={handleRoleSelect}
          >
            <SelectTrigger 
              className="w-full capitalize" 
              aria-invalid={errors.role.isInvalid}
            >
              <SelectValue placeholder="select role" />
            </SelectTrigger>

            <SelectContent>
              {roles.map(role => (
                <SelectItem 
                  key={role}
                  value={role}
                  className="capitalize"
                >
                  {role}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {errors.role.message && (
            <span className="text-sm font-inter text-destructive-light">{errors.role.message}</span>
          )}
        </div> */}

        {/* Gender Checklist */}
        <div 
          role="group"
          className="w-11/12 form-group"
        >
          <span className="form-label">Gender</span>

          {/* Checklist */}
          <div className="grid grid-cols-3 gap-2">
            {genderOptions.map(option => (
              <Checker 
                key={option}
                value={option}
                checked={formik.values.gender === option.toLowerCase()}
                order={false}
                onChange={() => handleGenderChange(option)}
              />
            ))}
          </div>

          {errors.gender.message && (
            <span className="text-sm font-inter text-destructive-light">{errors.gender.message}</span>
          )}
        </div>

        <Button
          type="submit"
          disabled={isValid}
          isLoading={isLoading}
        >
          Continue
        </Button>
      </form>

      {/* Successful Auth Splash screen */}
      <SuccessfulAuthSplashScreen isVisible={isSuccessful} />
    </>
  )
}

export default UserInfoSettingsForm