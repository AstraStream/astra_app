import React, { useState } from 'react'

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogTrigger,
} from "../ui/Dialog";
import { Button } from '../ui/Button';
import Icons from '../Icons';
import DialogBox from '../DialogBox';

const WalletStakeModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <DialogBox
            title="Stake"
            Icon={Icons.stake}
            disabled={true}
        >
            <div>Stake</div>
        </DialogBox>
    )
}

export default WalletStakeModal