"use client";

import React from 'react'
import { Checkbox } from './ui/Checkbox'
import { cn } from '@/lib/utils';
import { passwordValidationChecks } from '@/lib/schemas';

type CheckerProps = {
  title: string;
  value: boolean;
  order?: boolean
}

export const Checker = ({
  title,
  value,
  order=true
}: CheckerProps) => {
  return (
    <div className="w-full flex items-center justify-between gap-x-2 bg-input h-8 rounded-lg border border-input py-1.5 pr-1.5 pl-3 select-none">
      <span className={cn(
        "text-sm font-medium transition-colors duration-200", 
        order ? "order-1" : "order-2",
        value ? "text-inherit" : "text-grey-300"
        )}>{title}</span>
      <Checkbox 
        checked={value}
        className={cn(
          "rounded-full bg-black border-[1.5] border-border size-[18px]", 
          order ? "order-2" : "order-1"
        )}
      />
    </div>
  )
}

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
        title={label}
        value={test(password)}
      />
    ))}
   </div> 
  )
}
