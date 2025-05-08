import Image from 'next/image'
import React from 'react'
import notif from "@/assets/banner.png";

const RecentAlbumBanner = () => {
  return (
    <section className="h-[40vh] bg-white/90 rounded-3xl relative overflow-clip">
        ContentAudioCollection
        <Image 
            src={notif}
            alt="notif"
            className="object-cover"
            fill
        />
    </section>
  )
}

export default RecentAlbumBanner