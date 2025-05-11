"use client";

import React from 'react'
import {
    DropdownMenuContent,
    DropdownMenuSeparator,
} from "@/components/ui/DropdownMenu"

import { Button } from '../ui/Button';
import Icons from '../Icons';
import Link from 'next/link';

const links: IProfileLink[] = [
    {
        title: "Settings",
        link: "/profile/settings",
        Icon: Icons.settings
    },
    {
        title: "Logout",
        Icon: Icons.logout
    }
];

const ProfileLink = ({
    title,
    link,
    Icon
}: IProfileLink) => {
    return (
        <li>
            <Link
                href={link ?? ""}
                className="flex items-center gap-3 px-3.5 py-3 hover:bg-grey-100/70 transition-colors duration-300"
            >
                <Icon className="size-7" />
                <span className="text-white/90">{title}</span>
            </Link>
        </li>
    )
}

const ProfileDropdown = () => {
  return (
    <DropdownMenuContent
        align="end"
        className="w-[22rem] bg-background border-input mt-2.5"
      >
        {/* Profile Links */}
        <ul className="text-white space-y-1">
            {links.map(link => (
                <ProfileLink 
                    key={link.title}
                    {...link}
                />
            ))}
        </ul>
    </DropdownMenuContent>
  )
}

export default ProfileDropdown