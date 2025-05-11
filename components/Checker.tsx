import { cn } from "@/lib/utils";
import { Checkbox } from "./ui/Checkbox";
import Image, { StaticImageData } from "next/image";

type CheckerProps = {
    value: string;
    checked: boolean;
    imageSource?: StaticImageData | string;
    className?: string;
    textClassName?: string;
    onChange?: (val: any) => void
    order?: boolean
  }
  
const Checker = ({
  value,
  className,
  imageSource,
  checked,
  textClassName,
  onChange,
  order=true
}: CheckerProps) => {
    return (
      <label 
        className={cn(
          "w-full flex items-center justify-between gap-x-2 bg-grey-100 h-8 rounded-lg border border-grey-100 py-1.5 pr-1.5 pl-3 select-none",
          className
        )}
        id="checker"
      >
        <span className={cn(
          "text-sm font-medium transition-colors duration-200 flex items-center", 
          order ? "order-1" : "order-2",
          value ? "text-inherit" : "text-grey-300",
          textClassName
          )}
        >
          {imageSource && (
            <Image 
              src={imageSource}
              alt="source"
              width={35}
              height={35}
            />
          )}
          {value}
        </span>
        <Checkbox 
          id="checker"
          checked={checked}
          onCheckedChange={onChange}
          style={{ pointerEvents: "none" }}
          className={cn(
            "rounded-full bg-black pointer-events-none border-[1.5] border-border size-[18px]", 
            order ? "order-2" : "order-1"
          )}
        />
      </label>
    )
}

export default Checker;