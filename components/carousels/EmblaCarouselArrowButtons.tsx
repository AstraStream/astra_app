import React, {
    ComponentPropsWithRef,
    useCallback,
    useEffect,
    useState
  } from 'react'
  import { EmblaCarouselType } from 'embla-carousel'
import Icons from '../Icons'
import { cn } from '@/lib/utils'
  
  type UsePrevNextButtonsType = {
    prevBtnDisabled: boolean
    nextBtnDisabled: boolean
    onPrevButtonClick: () => void
    onNextButtonClick: () => void
  }
  
  export const usePrevNextButtons = (
    emblaApi: EmblaCarouselType | undefined
  ): UsePrevNextButtonsType => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  
    const onPrevButtonClick = useCallback(() => {
      if (!emblaApi) return
      emblaApi.scrollPrev()
    }, [emblaApi])
  
    const onNextButtonClick = useCallback(() => {
      if (!emblaApi) return
      emblaApi.scrollNext()
    }, [emblaApi])
  
    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
      setPrevBtnDisabled(!emblaApi.canScrollPrev())
      setNextBtnDisabled(!emblaApi.canScrollNext())
    }, [])
  
    useEffect(() => {
      if (!emblaApi) return
  
      onSelect(emblaApi)
      emblaApi.on('reInit', onSelect).on('select', onSelect)
    }, [emblaApi, onSelect])
  
    return {
      prevBtnDisabled,
      nextBtnDisabled,
      onPrevButtonClick,
      onNextButtonClick
    }
  }
  
  type PropType = ComponentPropsWithRef<'button'>
  
  export const PrevButton: React.FC<PropType> = (props) => {
    const { children, className, ...restProps } = props
  
    return (
      <button
        className={cn(
          "absolute -translate-y-1/2 -translate-x-1/2 top-1/2 left-7 disabled:opacity-0 hover:cursor-pointer bg-black/70 rounded-full p-2",
          className
        )}
        type="button"
        {...restProps}
      >
        <Icons.chevronLeft className="size-5 text-white" />
        {children}
      </button>
    )
  }
  
  export const NextButton: React.FC<PropType> = (props) => {
    const { children, className, ...restProps } = props
  
    return (
      <button
        className={cn(
          "absolute -translate-y-1/2 -translate-x-1/2 top-1/2 right-[12.6%] disabled:opacity-0 hover:cursor-pointer bg-black/70 rounded-full p-2",
          className
        )}
        type="button"
        {...restProps}
      >
        <Icons.chevronRight className="size-5 text-white" />
        {children}
      </button>
    )
  }
  