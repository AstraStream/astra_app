import React from 'react'
import logo from "@/assets/logo.png";
import Image from 'next/image';
import { cn } from '@/lib/utils';

const AccountContainer = ({
  children,
  containerClassName,
  wrapperClassName
}: Readonly<{
  children: React.ReactNode;
  containerClassName?: string;
  wrapperClassName?: string
}>) => {
  return (
    <div className="pt-10 pb-6 flex items-center justify-center">
      <div className={cn(
        "w-lg flex flex-col items-center gap-y-8",
        containerClassName
      )}>
        <figure className="select-none">
          <Image 
            src={logo.src}
            alt="Favicon"
            width={122.46}
            height={30}
          />
        </figure>

        {/* Form section */}
        <div className={cn("w-full flex flex-col", wrapperClassName)}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default AccountContainer