import * as React from "react"

import { cn } from "@/lib/utils"

interface InputProps extends React.ComponentProps<"input"> {
  label?: string;
}

function Input({ className, type, label, ...props }: InputProps) {
  return (
    <div
      role="group"
      className="flex flex-col gap-y-1.5"
    >
      {label && (
        <span className="text-sm font-medium text-muted">{label}</span>
      )}

      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:text-primary-foreground border-input flex h-14  w-full min-w-0 rounded-[6px] border bg-input p-4 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-primary focus-visible:ring-1",
          "aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
          className
        )}
        {...props}
      />
    </div>
  )
}

export { Input }
