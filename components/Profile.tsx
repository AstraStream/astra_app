import Image from 'next/image'
import React from 'react'

import image from "@/assets/notification.png";
import Icons from './Icons';
import { Button } from './ui/Button';

const Profile = () => {
  return (
    <Button 
      variant="grey"
      size="profile"
    >
      <div className="flex items-center gap-2 flex-1 overflow-clip text-ellipsis">
        <Image 
          src={image}
          alt="image"
          width={35}
          height={35}
          className="rounded-full"
        />
        <p className="font-medium text-white w-2/3 truncate text-[15px]">Cypherslopps</p>
      </div>

      <Icons.arrowDown className="text-white size-7" />
    </Button>
  )
}

export default Profile