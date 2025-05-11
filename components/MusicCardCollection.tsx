"use client"

import React from 'react'
import { buttonVariants } from './ui/Button';
import { MusicCardCollectionItem, ExpandedMusicCardCollectionItem } from './MusicCardCollectionItem';
import DragFreeEmblaCarousel from './carousels/DragFreeEmblaCarousel';
import Link from 'next/link';
import { cn } from '@/lib/utils';

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
            <Link
                href="/"
                className={cn(buttonVariants({ variant: "ghost", size: "excerpt" }))}
            >
                Show all
            </Link>
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