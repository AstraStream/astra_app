"use client";

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { usePlayer } from '@/providers/PlayerContext';
import Icons from './Icons';

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
    isPlaying, 
    volume,
    previous,
    next
  } = usePlayer();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [progress, setProgress] = useState(0);

  // Sync audio element
  useEffect(() => {
    if (!audioRef.current || !currentTrack) return;
    audioRef.current.src = currentTrack.url;
    audioRef.current.volume = volume;
    audioRef.current.volume = volume;
    
    if (isPlaying) audioRef.current.play()
    else audioRef.current.pause();
  }, [currentTrack, isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => setProgress((audio.currentTime / audio.duration) * 100 || 0);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", next);

    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", next);
    }
  }, [next])


  return (
    <div className="">
      <audio ref={audioRef} hidden />
      <div className="flex items-center gap-2">
        <span onClick={previous}>
          <Icons.skipBack />
        </span>

        <span onClick={next}>
          <Icons.skipForward />
        </span>
      </div>

      <div className="flex items-center">
        <span>{audioRef.current?.currentTime}</span>
        <input 
          type="range"
          min={0}
          max={100}
          step={0.1}
          value={progress}
          onChange={(e) => {
            if (audioRef.current) audioRef.current.currentTime = (parseFloat(e.target.value) / 100) * audioRef.current.duration;
          }}
          className="w-full mt-2"
        />
        <span>{audioRef.current?.duration}</span>
      </div>
    </div>
  )
}

const MusicPlayerSettings = () => {
  const { volume, setVolume } = usePlayer();

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
          onChange={(e) => setVolume(parseFloat(e.target.value))}
        />
      </div>
    </div>
  )
}

const MusicPlayer = () => {
  return (
    <div className="fixed bottom-0.5 left-0 w-full z-50 bg-background h-20 px-4 py-2 flex items-stretch justify-between gap-x-5">
      <MusicPlayerInfo />
      <MusicPlayerControls />
      <MusicPlayerSettings />
    </div>
  )
}

export default MusicPlayer