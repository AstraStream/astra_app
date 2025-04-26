import React from 'react'
import Image from 'next/image';

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/Dialog"
import notificationImage from "@/public/notification.png";
import { Button } from '../ui/Button';
import Icons from '../Icons';

type AuthMailNotifierModalProps = {
    isOpen: boolean;
    toggleState: (state: boolean) => void
}

const AuthMailNotifierModal = ({
    isOpen,
    toggleState
}: AuthMailNotifierModalProps) => {
  return (
    <Dialog
        open={isOpen}
        onOpenChange={toggleState}
    >
      <DialogContent className="w-[452px] rounded-[60px] pt-10 pb-9 px-9 flex flex-col items-center gap-y-3 [&>button:last-child]:hidden">
        {/* Dialog Close Button */}
        <DialogClose asChild>
            <Button 
                type="button"
                variant="muted"
                size="close"
                className="absolute top-7 right-4"
            >
                <Icons.close className="size-6 text-foreground" />
            </Button>
        </DialogClose>

        <figure className="w-[232.77px] h-[190px] bg-radial from-background/35 to-background relative">
            <Image 
                src={notificationImage.src}
                alt="notification"
                fill
            />
        </figure>
        
        {/* Content */}
        <div className='space-y-6'>
            <div className="text-center space-y-1">
                <h1 className="uppercase text-2xl font-semibold text-foreground">INBOX ALERT! ✨</h1>
                <p className="text-base font-medium text-grey-900">We've slipped a verification link into your email faster than a surprise album drop! Click it before it starts playing hide-and-seek in your spam folder!</p>
            </div>

            <DialogFooter className="w-full grid grid-cols-2 gap-x-2.5">
                <Button
                    variant="muted"
                    size="sm"
                    className="h-11 rounded-full"
                >Resend Mail</Button>
                <Button 
                    className="h-11 rounded-full"
                    size="sm"
                >
                    Open Mail App
                </Button>
            </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default AuthMailNotifierModal