"use client";

import { useMobile } from '@/hooks/useMobile'
import React from 'react'
import { 
  Sheet,
  SheetContent,
  SheetTrigger, 
} from './ui/Sheet';
import { Button, buttonVariants } from './ui/Button';
import Icons from './Icons';
import { ScrollArea } from './ui/ScrollArea';

import logo from "@/assets/logo.png";
import Link from 'next/link';
import Image from 'next/image';
import { links } from '@/lib/constants/sidebar-links';
import { cn, isActiveLink } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/Tooltip';

interface IAppSidebarLink extends ILink {
  isActive?: boolean;
}

const AppSidebarLink = ({
  title,
  route,
  Icon,
  isActive
}: IAppSidebarLink) => {
  const pathname = usePathname();
  let content = null;

  if (isActive) {
    content = (
      <Tooltip>
          <TooltipTrigger>
            <p
              className={cn(
                "flex items-center gap-x-2 text-white opacity-50 font-medium"
              )}
              aria-disabled={true}
            >
              <Icon className="size-6" />
              <span className="text-[17px]">{title}</span>
            </p>
          </TooltipTrigger>
          <TooltipContent side="right">
            <span>Coming Soon</span>
          </TooltipContent>
      </Tooltip>
    )
  }  else {
    content = (
      <Link
        href={route}
        className={cn(
          "flex items-center gap-x-2 text-white font-medium hover:text-primary-shade-600 transition-colors duration-200",
          isActiveLink(pathname, route) ? "text-primary-shade-900 font-bold" : ""
        )}
      >
        <Icon className="size-6" />
        <span className="text-[17px]">{title}</span>
      </Link>
    )
  }

  return (
    <li className={cn(
      "relative px-6",
      isActiveLink(pathname, route) ? "before:block before:content-[''] before:absolute before:left-0 before:w-1.5 before:h-full before:bg-primary before:rounded-r-sm" : ""
    )}>
      {content}
    </li>
  )
}

const AppSidebarContent = () => {
  return (
    <ScrollArea className="flex-1 -mx-6" type="always">
      <div className="space-y-10">
        {Object.entries(links).map(([name, slinks]) => (
          <div
            key={name}
            className="space-y-5"
          >
            <h5 className="font-semibold px-6 opacity-70 capitalize">{name}</h5>

            <TooltipProvider>
              <ul className="space-y-6">
                {slinks.map(link => (
                  <AppSidebarLink 
                    key={link.title}
                    {...link}
                  />
                ))}
              </ul>
            </TooltipProvider>
          </div>
        ))}

        {/* Playlist */}
        <div className="space-y-5">
          <header className="flex items-center justify-between px-6">
            <h5 className="font-semibold opacity-70 capitalize">Playlists</h5>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <p
                    className={cn(buttonVariants({ variant: "ghost", size: "excerpt" }))}
                    aria-disabled={true}
                  >
                    View all
                  </p>
                </TooltipTrigger>
                <TooltipContent>
                  <span>Coming soon</span>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </header>
          
          <ul>
            <AppSidebarLink 
              title="New playlist"
              Icon={Icons.plus}
              route="/playlist/new"
              isActive={true}
            />
          </ul>
        </div>
      </div>

    </ScrollArea>
  )
}

const AppSidebarHeader = () => {
  return (
    <header>
      <Link
        href="/"
      >
        <Image 
          src={logo}
          alt="App logo"
          className="w-[42%] object-cover"
        />
      </Link>
    </header>
  )
}

const AppSidebar = () => {
  return (
    <aside className="app-container app-sidebar row-span-full">
      {/* App Sidebar Header */}
      <AppSidebarHeader />

      {/* App Sidebar Content */}
      <AppSidebarContent />
    </aside>
  )
}

export default AppSidebar