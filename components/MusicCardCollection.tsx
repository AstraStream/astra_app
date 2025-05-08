"use client"

import React from 'react'
import { Button } from './ui/Button';
import { MusicCardCollectionItem, ExpandedMusicCardCollectionItem } from './MusicCardCollectionItem';
import DragFreeEmblaCarousel from './carousels/DragFreeEmblaCarousel';

type MusicCardCollectionProps = {
    title: string;
    expandFirst?: boolean
}

// {expandFirst ? (
//     <ExpandedMusicCardCollectionItem key={`expanded-${idx}`} />
// ) : (
//     <MusicCardCollectionItem key={idx} />
// )}

const MusicCardCollection = ({
    title
}: MusicCardCollectionProps) => {
  return (
    <section className="py-7 space-y-1">
        <header className="flex items-center justify-between sticky top-0 z-10 backdrop-blur-lg bg-background/20">
            <h1 className="text-2xl font-bold text-white/90">{title}</h1>
            <Button
                variant="ghost"
                size="excerpt"
                className=""
            >
                Show all
            </Button>
        </header>
        
        {/* Audio List */}
        <DragFreeEmblaCarousel>
            {Array.from({ length: 10 }).map((_, idx) => (
                <MusicCardCollectionItem key={idx} />
            ))}
        </DragFreeEmblaCarousel>
    </section>
  )
}

export default MusicCardCollection