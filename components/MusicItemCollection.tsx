"use client"

import React from 'react'
import { buttonVariants } from './ui/Button';
import { MusicItem, ExpandedMusicItem } from './MusicItem';
import DragFreeEmblaCarousel from './carousels/DragFreeEmblaCarousel';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { tracks } from '@/lib/constants/mock-track';

type MusicItemCollectionProps = {
    title: string;
    expandFirst?: boolean
}

// {expandFirst ? (
//     <ExpandedMusicItem key={`expanded-${idx}`} />
// ) : (
//     <MusicItem key={idx} />
// )}

const MusicItemCollection = ({
    title
}: MusicItemCollectionProps) => {
  return (
    <section className="py-7 space-y-1">
        <header className="flex items-center justify-between sticky top-0 z-10 backdrop-blur-lg bg-background/20">
            <h1 className="text-2xl font-bold text-white/90">{title}</h1>
            <Link
                href="/"
                className={cn(buttonVariants({ variant: "ghost", size: "excerpt" }))}
            >
                Show all
            </Link>
        </header>
        
        {/* Audio List */}
        <DragFreeEmblaCarousel>
            {tracks.map((track, index) => (
                <MusicItem
                    key={track.title+track.artist}
                    track={track}
                    playlist={tracks}
                />
            ))}
        </DragFreeEmblaCarousel>
    </section>
  )
}

export default MusicItemCollection