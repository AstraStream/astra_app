import React from 'react'
import Image from 'next/image';

import { Button } from './ui/Button'

import googleIcon from "@/public/icons/auth/google.svg";
import appleIcon from "@/public/icons/auth/apple.svg";
import facebookIcon from "@/public/icons/auth/facebook.svg";


const OAuthItems = () => {
  return (
    <div className="space-y-3 text-lg">
        <p className="text-center text-grey font-medium">Continue with</p>
        <div className="grid grid-cols-3 gap-x-2.5">
            <Button 
                variant="muted"
                className="h-14 rounded-[30px] p-4 gap-x-2.5 text-base font-medium"
            >
                <Image
                    src={googleIcon}
                    alt="google"
                    className="size-6"
                />
                <span>Google</span>
            </Button>

            <Button 
                variant="muted"
                className="h-14 rounded-[30px] p-4 gap-x-2.5 text-base font-medium"
            >
                <Image
                    src={facebookIcon}
                    alt="facebook"
                    className="size-6"
                />
                <span>Facebook</span>
            </Button>

            <Button 
                variant="muted"
                className="h-14 rounded-[30px] p-4 gap-x-2.5 text-base font-medium"
            >
                <Image
                    src={appleIcon}
                    alt="apple"
                    className="size-6"
                />
                <span>Apple</span>
            </Button>
        </div>
    </div>
  )
}

export default OAuthItems