import React from 'react'
import Logo from "@/public/logo.png";
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
    <div className="flex items-center justify-center">
      <div className={cn(
        "w-lg flex flex-col items-center gap-y-8",
        containerClassName
      )}>
        <figure className="select-none">
          <Image 
            src={Logo.src}
            alt="Favicon"
            width={122.46}
            height={30}
          />
        </figure>

        {/* Form section */}
        <div className={cn("flex flex-col", wrapperClassName)}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default AccountContainer