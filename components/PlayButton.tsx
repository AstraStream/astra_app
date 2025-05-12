import { usePlayer } from '@/providers/PlayerProvider'
import React from 'react'
import { Button } from './ui/Button';
import Icons from './Icons';
import { cn } from '@/lib/utils';

type PlayButtonProps = {
    track: ITrack;
    playlist: ITrack[];
    className?: string;
    variant?: "transparent" | "default";
}

const PlayButton = ({
    className,
    track,
    playlist,
    variant="transparent"
}: PlayButtonProps) => {
    const { 
        isPlaying,
        currentTrack,
        togglePlay,
        playTrack,
    } = usePlayer();
    const isActiveTrack = currentTrack?.id === track.id;

    const handlePlay = () => {
        if (isActiveTrack) {
            togglePlay();
        } else {
            playTrack(track, playlist);
        }
    }

    return (
        <Button
            variant={variant}
            size="none"
            className={(cn(
                "rounded-full transition-all",
                className
            ))}
            onClick={handlePlay}
        >
            {(isPlaying && isActiveTrack) ? (
                <Icons.pause />
            ) : (
                <Icons.play />
            )}
        </Button>
    )
}

export default PlayButton