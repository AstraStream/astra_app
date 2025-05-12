import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import Icons from "../Icons"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:!bg-border disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive outline-none hover:cursor-pointer active:scale-[.99]",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-grey-100/30 dark:border-grey-100 dark:hover:bg-grey-100/50",
        muted: "bg-grey-100 text-white hover:bg-grey-300/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        grey: "bg-grey-100 text-white",
        ghost:
          "text-foreground/70 hover:bg-grey-300/30 hover:text-white",
        link: "text-primary underline-offset-4 hover:underline",
        transparent: "bg-transparent text-foreground",
        "white-opq-t": "text-foreground hover:text-white"
      },
      size: {
        default: "w-full h-14 px-4 py-2 has-[>svg]:px-3 rounded-[30px] text-lg",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        link: "text-base transiton-all duration-200 hover:underline",
        profile: "text-base w-40 h-full rounded-full p-2 select-none",
        close: "size-12 rounded-full border-1",
        icon: "size-9",
        excerpt: "w-max px-2.5 py-1 rounded-full font-semibold transiton-colors duration-300",
        ghost: "p-2",
        none: ""
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  isLoading = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean,
    isLoading?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {isLoading && (
        <Icons.loader className="size-5 animate-spin" />
      )}
      {children}
    </Comp>
  )
}

export { Button, buttonVariants }
