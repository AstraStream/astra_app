import React from 'react'
import TokenSelector from '../TokenSelector';

const SwapForm = () => {
    const handleSelect = (token: Token) => {
        console.log("Selected token:", token);
    };

    return (
        <div>
            <TokenSelector
                selectedToken={null}
                onSelect={handleSelect}
                excludeToken="some-token-address"
            />
        </div>
    )
}

export default SwapForm