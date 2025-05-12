"use client";

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { usePlayer } from '@/providers/PlayerProvider';
import Icons from './Icons';
import { formatTime } from '@/lib/utils';
import PlayButton from './PlayButton';

const MusicPlayerInfo = () => {
  const { currentTrack } = usePlayer();

  return (
    <div className="flex items-center gap-x-3.5">
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
        <h5 className="text-[18.5px] text-primary-shade-800 font-semibold">{currentTrack?.title}</h5>
        
        {/* Artist */}
        <p className="text-sm opacity-80">{currentTrack?.artist}</p>
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


  return (
    <div className="">
      <div className="flex items-center gap-2">
        <span onClick={playPrevious}>
          <Icons.skipBack />
        </span>

        <PlayButton 
          variant="MusicPlayer"
          track={currentTrack as ITrack}
          playlist={playlist}
        />

        <span onClick={playNext}>
          <Icons.skipForward />
        </span>
      </div>

      <div className="flex items-center">
        <span>{formatTime(currentTime)}</span>
        <input 
          type="range"
          min={0}
          max={100}
          step={0.1}
          value={currentTime}
          onChange={(e) => seek(parseFloat(e.target.value))}
          className="w-full mt-2"
        />
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  )
}

const MusicPlayerSettings = () => {
  const { volume, updateVolume } = usePlayer();

  return (
    <div>
      <div>
        <Icons.volume />
        <input 
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => updateVolume(parseFloat(e.target.value))}
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
    <div className="fixed bottom-0.5 left-0 w-full z-50 bg-background h-20 px-4 py-2 flex items-stretch justify-between gap-x-5">
      <MusicPlayerInfo />
      <MusicPlayerControls />
      <MusicPlayerSettings />
    </div>
  )
}

export default MusicPlayer