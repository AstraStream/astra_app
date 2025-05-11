"use client";

import React, { useState } from 'react'
import Image from 'next/image';
import {
    DropdownMenuContent,
    DropdownMenuSeparator,
} from "@/components/ui/DropdownMenu"

import NotificationEmptySlates from '../empty-slates/NotificationEmptySlates'
import { Button } from '../ui/Button';
import Icons from '../Icons';
import image1 from "@/assets/img-3.jpg";


const NotificationDropdownCollection = () => {
  return (
    <div className="h-80 text-white overflow-y-scroll no-scrollbar space-y-2">
      {Array.from({ length: 10 }).map((_, idx) => (
        <div 
          key={idx} 
          className="w-full p-1.5 rounded-md flex gap-x-2 transition-colors duration-300 hover:cursor-pointer hover:bg-grey-100"
        >
          <Image 
            src={image1}
            alt="notification-img"
            className="size-16 rounded-lg border border-input"
          />

          {/* Content */}
          <div className="">
            <h5 className="font-bold">That Ain't Enough</h5>
            <p className="text-sm text-foreground">Kyle Beats Collective</p>
            <div className="flex items-center text-sm gap-x-1.5">
              <span>Single</span>
              <span>.</span>
              <span>2 weeks ago</span>
              <span>.</span>
              <span>29 min 12 sec</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const NotificationDropdown = () => {
  const [doesNotificationExist] = useState(false);

  return (
    <DropdownMenuContent
        align="end"
        className="w-[22rem] bg-background border-input px-3.5 pt-3.5 pb-1.5 mt-2.5"
      >
        <header className="flex items-center justify-between text-white">
          <h4 className="text-lg font-bold">Notifications</h4>
          <Button
            variant="muted"
            size="none"
            className="text-sm py-1.5 px-2 text-white/90 border border-input"
          >
            <span>Mark all as Read</span>
            <Icons.doubleCheck />
          </Button>
        </header>

        <DropdownMenuSeparator className="my-3" />

        {doesNotificationExist ? (
          <>
            {/* Nofication Items Container */}
            <NotificationDropdownCollection />
          </>
        ) : (
          <>
            {/* Notification Empty Slate */}
            <NotificationEmptySlates />
          </>
        )}
    </DropdownMenuContent>
  )
}

export default NotificationDropdown