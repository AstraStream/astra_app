import React from 'react'

import Icons from '../Icons';
import SwapForm from '../forms/SwapForm';
import DialogBox from '../DialogBox';

const WalletSwapModal = () => {
    return (
        <DialogBox
            title="Swap"
            Icon={Icons.swap}
        >
            <SwapForm />
        </DialogBox>
    )
}

export default WalletSwapModal