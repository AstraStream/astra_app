"use client";

import { useMobile } from '@/hooks/useMobile'
import React from 'react'
import { 
  Sheet,
  SheetContent,
  SheetTrigger, 
} from './ui/Sheet';
import { Button } from './ui/Button';
import Icons from './Icons';
import { ScrollArea } from './ui/ScrollArea';

import logo from "@/assets/logo.png";
import Link from 'next/link';
import Image from 'next/image';

const AppSidebarHeader = () => {
  return (
    <header>
      <Link
        href="/"
        className="w-full flex justify-center"
      >
        <Image 
          src={logo}
          alt="App logo"
          className="w-[45%] object-cover"
        />
      </Link>
    </header>
  )
}

const AppSidebarContent = () => {
  return (
    <ScrollArea className="flex-1" type="always">
      Content
    </ScrollArea>
  )
}

const AppSidebar = () => {
  const isMobile = useMobile(900);

  if (isMobile) {
    return (
      <Sheet>
        <SheetTrigger className="absolute">
          <Button>
            <Icons.menu />
          </Button>
        </SheetTrigger>

        <SheetContent 
          side="left"
          className="app-container app-sidebar"
        >
          {/* App Sidebar Header */}
          <div>
            <AppSidebarHeader />
            <SheetTrigger>
              <Button>
                <Icons.close />
              </Button>
            </SheetTrigger>
          </div>

          {/* App Sidebar Content */}
          <AppSidebarContent />
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <aside className="app-container app-sidebar">
      {/* App Sidebar Header */}
      <AppSidebarHeader />

      {/* App Sidebar Content */}
      <AppSidebarContent />
    </aside>
  )
}

export default AppSidebar