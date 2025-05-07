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

const AppSidebarHeader = () => {
  return (
    <header>
      Header
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

        <SheetContent className="flex flex-col h-full">
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
    <aside className="app-container w-full rounded-3xl p-5 sticky top-0 h-full flex flex-col">
      {/* App Sidebar Header */}
      <AppSidebarHeader />

      {/* App Sidebar Content */}
      <AppSidebarContent />
    </aside>
  )
}

export default AppSidebar