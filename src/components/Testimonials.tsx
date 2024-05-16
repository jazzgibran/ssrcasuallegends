import Image from 'next/image'
import React from 'react'

interface TestimonialsProps {
    msg: string;
    img: string;
    name: string;
    role: string;
}

function Testimonials({ msg, img, name, role }: TestimonialsProps) {
    return (
        
        <div className="relative opacity-80 mx-auto flex flex-col justify-center items-center w-[340px] md:w-[400px] h-[450px] md:h-[550px] p-10">
        <Image id='background' className='absolute drop-shadow-2xl w-full h-full' alt="parchment" src='/assets/board.png' width={1000} height={1000}>
        </Image>
        <div className="pt-20 px-6 z-10 md:text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-white"> 
        <blockquote className="text-center  ">
                <div>
                    {msg}
                </div>
            </blockquote>
            <figcaption className="mt-10">
                <Image
                    className="mx-auto h-10 w-10 rounded-full"
                    src={img}
                    alt="img"
                    width={150}
                    height={150}
                />
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold ">{name}</div>
                    <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                        <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="">{role}</div>
                </div>
            </figcaption>
        </div>
    </div>
    )
}

export default Testimonials
