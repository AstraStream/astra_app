import React from 'react'
import { Button } from './ui/Button'
import Icons from './Icons'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const NotificationButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="relative">
        <Button
          size="none"
          variant="ghost"
        >
          <Icons.notification className="size-6 text-white/90" />
        </Button>

        {/* Notification Notifier */}
        <span className="size-2.5 bg-rose-500/95 border border-white absolute top right-0.5 rounded-full" />
      </DropdownMenuTrigger>

      {/* Content */}
      <DropdownMenuContent
        align="end"
        className="w-80 bg-background border-input"
      >

      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default NotificationButton