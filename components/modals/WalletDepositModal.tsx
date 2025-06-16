import React from 'react'

import Icons from '../Icons';
import DialogBox from '../DialogBox';

const WalletDepositModal = () => {
    return (
        <DialogBox
            title="Deposit"
            Icon={Icons.receive}
        >
            <div>Deposit Form</div>
        </DialogBox>
    )
}

export default WalletDepositModal