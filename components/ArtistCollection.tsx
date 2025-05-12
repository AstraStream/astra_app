import React from 'react'
import ArtistItem from './ArtistItem'

const ArtistCollection = () => {
  return (
    <section className="grid grid-cols-5 gap-5">
      {Array.from({ length: 20 }).map((_, idx) => (
        <ArtistItem key={idx} />
      ))}
    </section>
  )
}

export default ArtistCollection