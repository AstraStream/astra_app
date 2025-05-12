import { usePlayer } from '@/providers/PlayerProvider'
import React from 'react'
import { Button } from './ui/Button';
import Icons from './Icons';

type PlayButtonProps = {
    variant: "MusicItem" | "MusicPlayer";
    track: ITrack;
    playlist: ITrack[]
}

const PlayButton = ({
    variant,
    track,
    playlist
}: PlayButtonProps) => {
    const { 
        isPlaying,
        currentTrack,
        togglePlay,
        playTrack,
    } = usePlayer();
    const isActiveTrack = currentTrack?.id === track.id;
    let variantButtonStyle = "";
    let variantIconStyle = "";

    if (variant === "MusicItem") {
        variantButtonStyle = "absolute bottom-[5%] right-2 size-12 rounded-full translate-y-2 opacity-1 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100";
        variantIconStyle = "size-7 text-black";
    } else if (variant === "MusicPlayer") {
        variantButtonStyle = "";
    }

    const handlePlay = () => {
        if (isActiveTrack) {
            togglePlay();
        } else {
            playTrack(track, playlist);
        }
    }

    return (
        <Button
            className={variantButtonStyle}
            onClick={handlePlay}
        >
            {isPlaying ? (
                <Icons.pause className={variantIconStyle} />
            ) : (
                <Icons.play className={variantIconStyle} />
            )}
        </Button>
    )
}

export default PlayButton