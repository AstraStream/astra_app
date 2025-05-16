import { AnimatePresence, motion } from "motion/react"

type SlideUpFadeProps = { 
    value: number,
    className?: string;
    style?: object 
}

const SlideUpFade = ({ 
    value, 
    className, 
    style, 
    ...props 
}: SlideUpFadeProps) => {
  return (
    <AnimatePresence mode="wait">
        <motion.span 
            {...props}
            key={value}
            initial={{ y: 2, opacity: 0, willChange: "transform, opacity" }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 2, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ 
                display: "inline-block",
                ...style
            }}
            className={className}
        >
            {value}
        </motion.span>
    </AnimatePresence>
  )
}

export default SlideUpFade