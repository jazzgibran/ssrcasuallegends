import React from 'react';
import partyBackgroundImg from '../../assets/partybg.png';
import Image from 'next/image';


import { Metadata } from 'next';
 
export const metadata: Metadata = {
    title: 'About',
  };

const About = () => {
    return (
        <div className=" py-12">
            <div className='w-full opacity-40 absolute'>
                <Image alt='background' src={partyBackgroundImg} className='min-h-screen object-cover w-full'></Image>
            </div>
            {/* upper section */}
            <div className="z-10 relative items-center flex flex-col justify-center w-full  ">
                <div className="mb-8">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold -700 mb-2">About Casual Legends</h1>
                </div>
                {/* parchment */}
                <div className="grid  grid-cols-1 md:grid-cols-2 gap-8 text-justify">
                    {/* game concept */}
                    <div className="relative mx-auto flex flex-col justify-center items-center w-[340px] md:w-[400px] lg:w-[450px] h-[450px] md:h-[550px] p-10">
                        <Image id='background' className='absolute w-full h-full' alt="parchment" src='/assets/longparchment.png' width={1000} height={1000}>
                        </Image>
                        <div className="px-6 z-10"> <h2 className="text-xl md:text-2xl font-semibold -700 mb-4">Game Concept</h2>
                            <p className="text-sm md:text-lg -700">
                                Discover Casual Legends, a tabletop RPG where magic meets AI. Players traverse enchanted realms, guided by an AI Dungeon Master that shapes the narrative and challenges dynamically. Suitable for both seasoned and new RPG players, Casual Legends promises a unique and thrilling adventure every time. Gather your party, prepare your spells, and embark on an unforgettable journey.</p>
                        </div>
                    </div>

                    {/* ai dungeon master */}
                    <div className="relative mx-auto flex flex-col justify-center items-center w-[340px] md:w-[400px] lg:w-[450px] lg:h-[650px]  h-[650px] md:h-[700px] p-10">
                        <Image id='background' className='absolute w-full h-full' alt="icon" src='/assets/longparchment.png' width={1000} height={1000}>
                        </Image>
                        <div className="px-6 z-10"> <h2 className="text-xl md:text-2xl font-semibold -700 mb-4">AI Dungeon Master</h2>
                            <p className="text-base md:text-lg -700">
                                At the heart of Casual Legends is the AI Dungeon Master, a sophisticated technology that brings adventures to life with realism. Using advanced natural language processing, it responds to your commands with precision. This AI adapts to player actions, dynamically shaping the game world, whether you&apos;re negotiating with NPCs or battling monsters, to create a narrative that evolves in real-time. Its creativity and improvisational skills ensure each adventure is unique and exciting, making it the perfect guide for your fantasy journey.</p>
                        </div>
                    </div>

                </div>
            </div>
            {/* team */}
            <div className="mt-8 text-MountainMeadow  flex items-center flex-col text-center">
                <div
                    className="relative flex justify-center w-[330px] h-[150px] items-center "
                >
                    <Image id='background' className=' absolute w-full h-full' alt="namebanner" src='/assets/namebanner.png' width={1000} height={1000}>
                    </Image>
                    <div id='content' className="-mt-5 z-10">
                        <h3 className="text-base sm:text-lg font-semibold ">Ilya</h3>
                        <p className="">Product Sorcerer</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Members name="Hung" role="Bard Engineer" />
                    <Members name="Nate" role="Code Wizard" />
                    <Members name="Elliot" role="Data Elf " />
                    <Members name="Nisha" role="Frontend Ranger " />
                    <Members name="Jazz" role="Quality Warlock" />
                    {/* Add more team members as needed */}
                </div>
            </div>
        </div>
    );
}

interface MembersProps {
    name: string;
    role: string;
}

const Members = ({ name, role }: MembersProps) => {
    return (
        <div
            className="relative flex justify-center w-[330px] h-[150px] items-center "
        >
            <Image id='background' className=' absolute w-full h-full' alt="namebanner" src='/assets/namebanner.png' width={1000} height={1000}>
            </Image>
            <div id='content' className="-mt-5 z-10">
                <h3 className="text-base sm:text-lg font-semibold ">{name}</h3>
                <p className="">{role}</p>
            </div>
        </div>
    );
};

export default About;