import React, { ReactNode, useState } from 'react'

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "./ui/Dialog";
import { buttonVariants } from './ui/Button';
import Icons from './Icons';
import { cn } from '@/lib/utils';
import { RemixiconComponentType } from '@remixicon/react';
import { LucideIcon } from 'lucide-react';

type DialogBoxProps = {
    title: string;
    Icon: RemixiconComponentType | LucideIcon;
    disabled?: boolean;
    children: ReactNode
}

const DialogBox = ({
    title,
    Icon,
    disabled=false,
    children
}: DialogBoxProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Dialog
            open={isOpen}
            onOpenChange={setIsOpen}
        >
            <DialogTrigger
                disabled={disabled}
                className="disabled:opacity-45 disabled:cursor-not-allowed select-none"
            >
                {!disabled ? (
                    <span 
                        className={cn(
                            "w-full border border-input hover:bg-primary-shade-300 hover:text-black flex-col",
                            buttonVariants({ variant: "ghost", size: "ghost" })
                        )}
                    >
                        <Icon className="size-7" />
                        {title}
                    </span>
                ) : (
                    <span 
                        aria-disabled={disabled}
                        className={cn(
                            "w-full h-full border border-input flex items-center justify-center flex-col rounded-md",
                        )}
                    >
                        <Icon className="size-7" />
                        {title}
                    </span>
                )}
            </DialogTrigger>

            <DialogContent className="w-[452px] rounded-lg h-[30rem] pt-10 pb-9 px-9 flex flex-col items-center gap-y-3 [&>button:last-child]:hidden">
                {/* Dialog Close Button */}
                <DialogClose asChild>
                    <span className={cn(
                        "absolute top-7 right-4",
                        buttonVariants({ variant: "muted", size: "close" })
                    )}>
                        <Icons.close className="size-6 text-foreground" />
                    </span>
                </DialogClose>

                <DialogTitle>
                    {title}
                </DialogTitle>
                
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default DialogBox