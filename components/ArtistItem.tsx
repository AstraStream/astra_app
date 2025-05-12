import Image from 'next/image'
import React from 'react'
import { getRandomImage } from "@/lib/constants/mock-track";

const ArtistItem = () => {
  return (
    <blockquote className="card-container group">
        <figure className="size-48 relative rounded-full overflow-clip select-none group">
            <Image 
                src={getRandomImage()}
                alt="image"
                fill
                className="object-cover object-center"
            />
        </figure>

        <div className="space-y-0.5">
            <h5 className="text-white text-lg font-semibold">Wizkid</h5>
            <p>Artist</p>
        </div>
    </blockquote>
  )
}

export default ArtistItem