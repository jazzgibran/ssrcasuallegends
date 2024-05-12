'use client'
import Image from 'next/image'
 
const imageLoader = () => {
  return `https://placehold.co/500x350`
}
 
export default function Screenshot() {
  return (
    <Image
      loader={imageLoader}
      src="screenshot.png"
      alt="Screenshot of the game"
      width={500}
      height={500}
    />
  )
}