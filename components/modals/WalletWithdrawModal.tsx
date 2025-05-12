import React, { useState } from 'react'

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "../ui/Dialog";
import { Button } from '../ui/Button';
import Icons from '../Icons';

const WalletWithdrawModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Dialog
            open={isOpen}
            onOpenChange={setIsOpen}
        >
            <DialogTrigger>
                <Button 
                    variant="ghost" 
                    size="ghost" 
                    className="w-full border border-input hover:bg-primary-shade-300 hover:text-black flex-col"
                >
                    <Icons.send className="size-7" />
                    Withdraw
                </Button>
            </DialogTrigger>

            <DialogContent className="w-[452px] rounded-lg h-[30rem] pt-10 pb-9 px-9 flex flex-col items-center gap-y-3 [&>button:last-child]:hidden">
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

                <DialogTitle>
                    Withdraw
                </DialogTitle>
            </DialogContent>
        </Dialog>
    )
}

export default WalletWithdrawModal