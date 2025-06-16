import React from 'react'

import Icons from '../Icons';
import DialogBox from '../DialogBox';

const WalletWithdrawModal = () => {
    return (
        <DialogBox 
            title="Withdraw"
            Icon={Icons.send}
        >
            <div>Withdraw</div>
        </DialogBox>
    )
}

export default WalletWithdrawModal