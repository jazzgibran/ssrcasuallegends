import React from 'react';
import Screenshot from './sceenshot';
import Image from 'next/image';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
    title: 'Gameplay Guide',
  };
const GameplayPage = () => {
    return (
        <div
            className=' min-h-screen b flex flex-col'>
            <div className="mx-auto">
                <div className="flex flex-col lg:flex-row flex-wrap gap-8 mb-7 ">
                    <div className="relative mx-auto flex flex-col justify-center items-center p-10 
                    w-[340px] h-[500px]
                    md:w-[600px] md:h-[400px]
                    2xl:w-[750px] 2xl:h-[520px]
                     ">
                        <Image id='background' className='absolute w-full h-full md:hidden' alt="parchment" src='/assets/longparchment.png' width={1000} height={1000}>
                        </Image>
                        <Image id='background' className='absolute w-full h-full hidden md:block' alt="parchment" src='/assets/horizontalparchment.png' width={1000} height={1000}>
                        </Image>
                        <div className="px-5 lg:px-2 z-10">
                            <h1 className="text-lg md:text-2xl font-bold mb-2">Instructions for New Players</h1>
                            <div className="text-sm md:text-md 2xl:text-lg text-justify">
                                <h6 className="font-bold ">Create Your Character </h6>
                                <p>Choose your race, class, and abilities to customize your hero.</p>
                                <h6 className="font-bold mt-2">Join or Host a Game </h6>
                                <p>Join a friend&apos;s game or start your own adventure.</p>
                                <h6 className="font-bold mt-2">Navigate the Interface </h6>
                                <p>Familiarize yourself with the chat window, character sheet, and menus.</p>
                                <h6 className="font-bold mt-2">Embark on Quests </h6>
                                <p>Accept quests, make choices, and engage in battles with monsters.</p>
                                <h6 className="font-bold mt-2">Collaborate with Your Party: </h6>
                                <p>Coordinate with fellow players to overcome challenges and achieve objectives.</p>
                            </div>
                        </div>
                    </div>
                     <div className="relative mx-auto p-10 flex flex-col justify-center items-center 
                     w-[340px] h-[450px]
                     md:w-[600px] md:h-[400px]
                     2xl:w-[700px] 2xl:h-[450px] 2xl:px-16
                     ">
                        <Image id='background' className='absolute w-full h-full md:hidden' alt="parchment" src='/assets/longparchment.png' width={1000} height={1000}>
                        </Image>
                        <Image id='background' className='absolute w-full h-full hidden md:block' alt="parchment" src='/assets/horizontalparchment.png' width={1000} height={1000}>
                        </Image>
                        <div className="px-5 z-10">
                        <h2 className="text-lg md:text-2xl font-bold mb-2">Tips for Getting Started</h2>
                        <div className="text-sm md:text-md 2xl:text-lg text-justify">
                                <h6 className="font-bold">Immerse Yourself</h6>
                                <p>Engage deeply with the AI-crafted narrative and your character&apos;s story.</p>
                                <h6 className="font-bold mt-2">Experiment with Strategies</h6>
                                <p>Explore different tactics and builds to optimize your gameplay.</p>
                                <h6 className="font-bold mt-2">Communicate with Your DM</h6>
                                <p>Ask questions and discuss concerns with your Dungeon Master for a better experience.</p>
                                <h6 className="font-bold mt-2">Have Fun!</h6>
                                <p>Enjoy the adventure with friends, from exploring to negotiating.</p>
                            </div>
                        </div>
                    </div>
        
                </div>

                <div
                    className="mb-8"
                >
                    <h2 className="text-center text-3xl font-bold mb-4">Explore the Game World</h2>
                    <div className="flex justify-center items-center flex-col lg:flex-row gap-4 w-full">
                        <Screenshot />
                        <Screenshot />
                        <Screenshot />
                       
                    </div>
                </div>


            </div>
        </div>
    );
};

export default GameplayPage;
