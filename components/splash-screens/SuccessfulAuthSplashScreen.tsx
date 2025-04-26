"use client"

import React from 'react'
import Image from 'next/image';
import Confetti from 'react-confetti'
import { AnimatePresence, motion } from "motion/react";

import useWindowDimension from '@/hooks/useWindowDimension';
import logo from "@/public/logo.png";
import trophyImage from "@/public/gold-thropy.png";
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/Button';

type SuccessfulAuthSplashScreenProps = {
  isVisible: boolean;
}

const SuccessfulAuthSplashScreen = ({ 
  isVisible 
}: SuccessfulAuthSplashScreenProps) => {
  const { width, height } = useWindowDimension();

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.main 
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 1000, opacity: 0 }}
          transition={{ duration: .7, type: "spring" }}
          key="auth-splash"
          className="fixed top-0 left-0 p-20 bg-background w-full h-full z-40 flex flex-col items-center justify-center gap-y-6"
        >
          <Confetti 
            width={width}
            height={height}
            style={{ zIndex: -10 }}
            recycle={false}
            numberOfPieces={700}
          />
          
          <header className='flex flex-col items-center gap-y-6'>
            <figure className="select-none">
              <Image 
                src={logo.src}
                alt="Favicon"
                width={122.46}
                height={30}
              />
            </figure>

            <figure>
              <Image
                src={trophyImage.src}
                alt="trophy"
                width={287}
                height={287}
              />
            </figure>
          </header>

          <div className="flex flex-col items-center text-center">
            <h6 className="font-semibold text-xl">You are all set</h6>
            <p className="w-[70%] text-grey-900 text-lg mt-1 mb-4">Your password has successfully been updated. You are now logged in</p>
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "default", size: "default" }),
                "w-full h-12"
              )}
            >
              Start Listening
            </Link>
          </div>
        </motion.main>
      ) : null}
    </AnimatePresence>
  )
}

export default SuccessfulAuthSplashScreen