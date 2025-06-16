"use client";

import React from 'react'
import {
    DropdownMenuContent,
} from "@/components/ui/DropdownMenu"

import Icons from '../Icons';
import Link from 'next/link';
import { useLogout } from '@/lib/apis/auth';

const ProfileDropdown = () => {
    const { mutate: logout, isPending } = useLogout();

    return (
        <DropdownMenuContent
            align="end"
            className="w-[22rem] bg-background border-input mt-2.5"
        >
            {/* Profile Links */}
            <ul className="text-white space-y-1">
                <li>
                    <Link
                        href="/profile/settings"
                        className="flex items-center gap-3 px-3.5 py-3 hover:bg-grey-100/70 transition-colors duration-300"
                    >
                        <Icons.settings className="size-7" />
                        <span className="text-white/90">Settings</span>
                    </Link>
                </li>

                <li>
                    <span
                        onClick={() => logout()}
                        className="flex items-center gap-3 px-3.5 py-3 hover:bg-grey-100/70 transition-colors duration-300 cursor-pointer"
                    >
                        {isPending ? (
                            <Icons.logout className="size-7" />
                        ) : (
                            <Icons.logout className="size-7" />
                        )}
                        <span className="text-white/90">Logout</span>
                    </span>
                </li>
            </ul>
        </DropdownMenuContent>
    )
}

export default ProfileDropdown