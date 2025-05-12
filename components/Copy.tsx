import React from 'react'
import Icons from './Icons';

type CopyProps = {
    value: string;
    text: string;
}

const Copy = ({ 
    value,
    text
}: CopyProps) => {
    const copy = () => {
        console.log(value)
    }

    return (
        <div className="flex items-center gap-x-1">
            <span>
                {text}
            </span>
            <span 
                onClick={copy}
                className="cursor-pointer"
            >
                <Icons.copy className="size-4" />
            </span>
        </div>
    )
}

export default Copy