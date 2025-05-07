"use client";

import React from 'react'
import { Checkbox } from './ui/Checkbox'
import { cn } from '@/lib/utils';
import { passwordValidationChecks } from '@/lib/schemas';

type CheckerProps = {
  value: string;
  checked: boolean;
  onChange?: (val: any) => void
  order?: boolean
}

export const Checker = ({
  value,
  checked,
  onChange,
  order=true
}: CheckerProps) => {
  return (
    <label 
      className="w-full flex items-center justify-between gap-x-2 bg-grey-100 h-8 rounded-lg border border-grey-100 py-1.5 pr-1.5 pl-3 select-none"
      id="checker"
    >
      <span className={cn(
        "text-sm font-medium transition-colors duration-200", 
        order ? "order-1" : "order-2",
        value ? "text-inherit" : "text-grey-300"
        )}
      >
        {value}
      </span>
      <Checkbox 
        id="checker"
        checked={checked}
        onCheckedChange={onChange}
        style={{ pointerEvents: "none" }}
        className={cn(
          "rounded-full bg-black pointer-events-none border-[1.5] border-border size-[18px]", 
          order ? "order-2" : "order-1"
        )}
      />
    </label>
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
        value={label}
        checked={test(password)}
      />
    ))}
   </div> 
  )
}
