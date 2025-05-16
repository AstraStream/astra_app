"use client";

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { usePlayer } from '@/providers/PlayerProvider';
import Icons from './Icons';
import { formatTime } from '@/lib/utils';
import PlayButton from './PlayButton';
import { Slider } from './ui/Slider';
import { Button } from './ui/Button';
import MuteMediaButton from './MuteMediaButton';

const MusicPlayerInfo = () => {
  const { currentTrack, point } = usePlayer();

  return (
    <div className="flex items-center gap-x-3.5 w-[24%]">
      <figure className="h-full w-24 relative">
        <Image 
          src={currentTrack?.image as string}
          alt={currentTrack?.artist as string}
          fill
          className="object-cover aspect-square rounded-sm border border-input/80"
        />
      </figure>

      <div className="-space-y-0.5">
        {/* Song Title */}
        <h5 className="truncate text-[18.5px] text-primary-shade-800 font-semibold">{currentTrack?.title}</h5>
        
        {/* Artist */}
        <p className="text-sm opacity-80">
          {currentTrack?.artist} 
          {point}
        </p>
      </div>
    </div>
  )
}

const MusicPlayerControls = () => {
  const { 
    currentTrack, 
    playlist,
    seek,
    duration,
    currentTime,
    playNext,
    playPrevious,
  } = usePlayer();
  const [isDragging, setIsDragging] = useState(false);
  const [seekValue, setSeekValue] = useState(0);

  useEffect(() => {
    if (!isDragging && duration > 0) {
      setSeekValue((currentTime / duration) * 100);
    }
  }, [currentTime, duration, isDragging]);

  const handleSeekChange = (value: number[]) => {
    setSeekValue(value[0]);
  };

  const handleSeekCommit = (value: number[]) => {
    const newTime = (value[0] / 100) * duration;
    seek(newTime);
    setIsDragging(false);
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-1.5">
      <div className="flex items-center gap-3">
        <Button 
          onClick={playPrevious}
          variant="white-opq-t"
          size="none"
        >
          <Icons.skipBack className="size-6" />
        </Button>

        <PlayButton 
          track={currentTrack as ITrack}
          playlist={playlist}
          className="bg-white size-9 hover:scale-[1.02] hover:[&>svg]:!scale-100 [&>svg]:!size-5 [&>svg]:text-black"
        />

        <Button 
          onClick={playNext}
          variant="white-opq-t"
          size="none"
        >
          <Icons.skipForward className="size-6" />
        </Button>
      </div>

      <div className="flex items-center gap-2 select-none">
        <span className="text-sm">{formatTime(currentTime)}</span>
        <Slider 
          min={0}
          max={100}
          value={[seekValue]}
          onValueChange={handleSeekChange}
          onValueCommit={handleSeekCommit}
          onPointerDown={() => setIsDragging(true)}
          className="w-[30rem]"
        />
        <span className="text-sm">{formatTime(duration)}</span>
      </div>
    </div>
  )
}

const MusicPlayerSettings = () => {
  const { 
    volume, 
    updateVolume
  } = usePlayer();

  return (
    <div className="w-[24%] flex items-center justify-end gap-x-2.5">
      <span>
        <Icons.heartOutline className="size-5" />
      </span>

      <div className="flex items-center gap-x-1.5">
        {/* Mute Media Button */}
        <MuteMediaButton />

        {/* Volume slider */}
        <Slider 
          min={0}
          max={100}
          value={[volume * 100]}
          onValueChange={value => updateVolume((value[0] / 100))}
          className="w-32"
        />
      </div>
    </div>
  )
}

const MusicPlayer = () => {
  const { currentTrack } = usePlayer();

  if (!currentTrack) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-background h-[5.5rem] px-4 py-2 flex items-stretch justify-between gap-x-5">
      <MusicPlayerInfo />
      <MusicPlayerControls />
      <MusicPlayerSettings />
    </div>
  )
}

export default MusicPlayer