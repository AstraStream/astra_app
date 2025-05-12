import { FC } from 'react';
import { QRCodeSVG } from 'qrcode.react';

import { cn } from '@/lib/utils';

interface ITGQRCode {
    value: string;
    className?: string;
}

const TGQRCode: FC<ITGQRCode> = ({ value, className }) => {
  return (
    <div className={cn("w-[73%] h-[76%] sm:w-[48%] sm:h-[50%] md:w-[32%] md:h-[40%] bg-white p-1 rounded-[16px] flex items-center justify-center", className)}>
      <QRCodeSVG
        value={value} 
        className="w-full h-[90%]"
        style={{
            borderRadius: "26px !important"
        }}
      />
    </div>
  )
}

export default TGQRCode