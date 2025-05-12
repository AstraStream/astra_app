import React, { useState } from 'react'

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogTrigger,
} from "../ui/Dialog";
import { Button } from '../ui/Button';
import Icons from '../Icons';

const WalletStakeModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Dialog
            open={isOpen}
            onOpenChange={setIsOpen}
        >
            <DialogTrigger disabled={true}>
                <Button 
                    variant="ghost" 
                    size="ghost" 
                    className="w-full border border-input hover:bg-primary-shade-300 hover:text-black flex-col"
                    disabled={true}
                >
                    <Icons.stake className="size-7" />
                    Stake
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

            </DialogContent>
        </Dialog>
    )
}

export default WalletStakeModal