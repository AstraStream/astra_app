"use client";

import { usePlayer } from '@/providers/PlayerProvider';
import React, { useEffect, useState } from 'react'
import Icons from './Icons';
import { Button } from './ui/Button';

const MuteMediaButton = () => {
    const { 
        volume, 
        isMuted,
        updateVolume,
    } = usePlayer();
    const [iconState, setIconState] = useState<"muted" | "half" | "high">("high");

    useEffect(() => {
        if (volume === 0 || isMuted) {
            setIconState("muted");
        } else if (volume <= 0.5) {
            setIconState("half")
        } else {
            setIconState("high");
        }
    }, [volume, isMuted]);

   const renderIcon = () => {
        switch (iconState) {
            case 'muted':
            return <Icons.mutedVolume className="size-5" />;
            case 'half':
            return <Icons.volumeHalf className="size-5" />;
            case 'high':
            default:
            return <Icons.volume className="size-5" />;
        }
   }

   const handleToggleMute = () => {
        updateVolume(isMuted || volume === 0 ? 0.5 : 0);
    };
    
    return (
        <Button 
            variant="transparent"
            size="none"
            className=""
            onClick={handleToggleMute}
        >
            {renderIcon()}
        </Button>
    )
}

export default MuteMediaButton;