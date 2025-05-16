"use client";

import * as React from "react"

import { cn } from "@/lib/utils"
import Icons from "../Icons";

interface InputProps extends React.ComponentProps<"input"> {
  label?: string;
  error?: string;
}

function Input({ className, type, label, error, ...props }: InputProps) {
  const [passwordTypeState, setPasswordTypeState] = React.useState(false);
  const PasswordIcon = passwordTypeState ? Icons.eyeOpen : Icons.eyeClosed;
  const [inputType, setInputType] = React.useState(type);

  // Change Password Type from Password - Type on Toggle
  const togglePasswordTypeState = () => {
    if (type === "password") {
      const activeType = inputType === "password" ? "text" : "password";
      setInputType(activeType);

      setPasswordTypeState(!passwordTypeState);
    }
  }

  return (
    <div
      role="group"
      className="form-group"
    >
      {label && (
        <span className="form-label">{label}</span>
      )}

      <div className="relative">
        <input
          type={inputType}
          data-slot="input"
          className={cn(
            "file:text-foreground placeholder:text-muted-foreground selection:text-primary-foreground border-input flex h-14  w-full min-w-0 rounded-[6px] border bg-grey-100 p-4 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-base",
            "focus-visible:ring-primary/20 focus-visible:border-primary focus-visible:ring-1",
            "aria-invalid:ring-destructive/20 aria-invalid:border-destructive aria-invalid:shadow-lg aria-invalid:shadow-destructive-shadow",
            className
          )}
          {...props}
        />

        {/* Password Type Toggle */}
        {type === "password" && (
          <div 
            className="absolute top-1/2 right-3 -translate-y-1/2 hover:cursor-pointer select-none"
            onClick={togglePasswordTypeState}
          >
            <PasswordIcon className="size-5 text-muted/65" />
          </div>
        )}
      </div>

      {/* Error */}
      {error && (
        <span className="form-error">{error}</span>
      )}
    </div>
  )
}

export { Input }
