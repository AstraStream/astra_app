"use client";

import React from 'react'
import { passwordValidationChecks } from '@/lib/schemas';
import Checker from './Checker';

// Password Checker
type PasswordCheckerProps = {
  password: string
}

export const PasswordChecker = ({ 
  password 
}: PasswordCheckerProps) => {
  
  if (!password) return null;

  return (
   <div className="grid grid-cols-3 gap-x-2">
    {passwordValidationChecks.map(({ label, test }) => (
      <Checker 
        key={label}
        value={label}
        checked={test(password)}
      />
    ))}
   </div> 
  )
}
