"use client";

import React from 'react'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import { cn } from '@/lib/utils';

const DragFreeEmblaCarousel = ({ 
  children,
  containerClassName
}: Readonly<{
  children: React.ReactNode,
  containerClassName?: string
}>) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="overflow-clip -mx-5">
      <div className="embla__viewport w-[120%] relative pl-1 pr-60" ref={emblaRef}>
        <div className={cn(
          "embla__container gap-1",
          containerClassName
        )}>
          {children}
        </div>

        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </section>
  )
}

export default DragFreeEmblaCarousel
