import React from 'react'
import { buttonVariants } from './ui/Button'
import Icons from './Icons'
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu"
import NotificationDropdown from './dropdowns/NotificationDropdown';
import { cn } from '@/lib/utils';

const NotificationButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="relative">
        <span
          className={cn(buttonVariants({ variant: "ghost", size: "ghost" }))}
          aria-description="Notifications"
        >
          <Icons.notification className="size-6 text-white/90" />
          <span className="sr-only">Notifications</span>
        </span>

        {/* Notification Notifier */}
        <span className="size-2.5 bg-rose-500/95 border border-white absolute top-[33%] -translate-y-1/2 -translate-x-1/2 right-[12%] rounded-full" />
      </DropdownMenuTrigger>

      {/* Notification Dropdown */}
      <NotificationDropdown />
    </DropdownMenu>
  )
}

export default NotificationButton