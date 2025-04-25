"use client";

import React from 'react'
import { Checkbox } from './ui/Checkbox'
import { cn } from '@/lib/utils';

type CheckerProps = {
    title: string;
    value: boolean;
    onChange: (val: boolean) => void;
    order?: boolean
}

const Checker = ({
    title,
    value,
    onChange,
    order=true
}: CheckerProps) => {
  return (
    <div className="w-full flex items-center justify-between gap-x-2 bg-input h-8 rounded-lg border border-input py-1.5 pr-1.5 pl-3">
        <span className={cn(
          "text-sm font-medium", 
          order ? "order-1" : "order-2",
          value ? "text-inherit" : "text-grey-300"
          )}>{title}</span>
        <Checkbox 
            checked={value}
            onCheckedChange={onChange}
            className={cn(
              "rounded-full bg-black border-[1.5] border-border size-[18px]", 
              order ? "order-2" : "order-1"
            )}
        />
    </div>
  )
}

export default Checker