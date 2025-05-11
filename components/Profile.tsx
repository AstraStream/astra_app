import React from 'react'
import Image from 'next/image'
import { buttonVariants } from './ui/Button'

import Icons from './Icons';
import image from "@/assets/notification.png";
import { Button } from './ui/Button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu"
import NotificationDropdown from './dropdowns/NotificationDropdown';
import { cn } from '@/lib/utils';
import ProfileDropdown from './dropdowns/ProfileDropdown';

const Profile = () => {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={cn(buttonVariants({ variant: "grey", size: "profile" }))}
      >
        <div className="flex items-center gap-2 flex-1 overflow-clip text-ellipsis">
          <Image 
            src={image}
            alt="image"
            width={35}
            height={35}
            className="rounded-full"
          />
          <p className="font-medium text-white w-2/3 truncate text-[15px]">Cypherslopps</p>
        </div>

        <Icons.arrowDown className="text-white size-7" />
        <span className="sr-only">Profile</span>
      </DropdownMenuTrigger>

      {/* Notification Dropdown */}
      <ProfileDropdown />
    </DropdownMenu>
  )
}

export default Profile
