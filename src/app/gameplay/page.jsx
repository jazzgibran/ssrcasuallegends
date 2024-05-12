import React from 'react';
import Screenshot from './sceenshot';

const GameplayPage = () => {
    return (
        <div
            className='text-teal-700 min-h-screen b flex flex-col'>
            <div className="container mx-auto px-4 mt-3 py-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8 mb-7 ">
                    <div className="flex flex-col justify-center items-center lg:w-2/3 border-teal-400 border bg-GreenMist bg-opacity-70 rounded-lg shadow-lg p-6">
                        <h2 className="text-3xl font-bold mb-4">Instructions for New Players</h2>
                        <ul className="text-lg text-justify">
                            <li><span className="font-bold">Create Your Character: </span>Choose your race, class, and abilities to customize your hero.</li>
                            <li><span className="font-bold">Join or Host a Game: </span>Join a friend&apos;s game or start your own adventure.</li>
                            <li><span className="font-bold">Navigate the Interface: </span>Familiarize yourself with the chat window, character sheet, and menus.</li>
                            <li><span className="font-bold">Embark on Quests: </span>Accept quests, make choices, and engage in battles with monsters.</li>
                            <li><span className="font-bold">Collaborate with Your Party: </span>Coordinate with fellow players to overcome challenges and achieve objectives.</li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center items-center lg:w-2/3 border-teal-400 border bg-GreenMist bg-opacity-70 rounded-lg shadow-lg p-6">
                        <h2 className="text-3xl font-bold mb-4">Tips for Getting Started</h2>
                        <ul className="text-lg text-justify">
                            <li><span className="font-bold">Immerse Yourself:</span> Dive into the rich narrative crafted by the AI Dungeon Master. Embrace your character&apos;s personality and backstory to enhance your role-playing experience.</li>
                            <li><span className="font-bold">Experiment with Strategies:</span> Try various tactics and character builds to find what works best for you and your party. Be creative!</li>
                            <li><span className="font-bold">Communicate with Your DM:</span> Don&apos;t hesitate to ask your Dungeon Master questions or share concerns to ensure a smooth gameplay experience.</li>
                            <li><span className="font-bold">Have Fun!</span> Enjoy memorable experiences with your friends in Casual Legends. Cherish every moment, from exploring ruins to negotiating with NPCs.</li>
                        </ul>
                    </div>
                </div>

                <div
                    className="mb-8"
                >
                    <h2 className="text-center text-3xl font-bold mb-4">Explore the Game World</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
                        <Screenshot />
                        <Screenshot />
                        <Screenshot />
                        {/* Example of a screenshot */}
                        {/* <Image
                        width={500} height={350}     
                            src='https://placehold.co/500x350'
                            className="w-full h-[350px] object-cover cursor-pointer rounded-lg"
                        />
                        <Image
                        width={500} height={350}     
                            src='https://placehold.co/500x350'
                            className="w-full h-[350px] object-cover cursor-pointer rounded-lg"
                        />
                        <Image
                        width={500} height={350}     
                            src='https://placehold.co/500x350'
                            className="w-full h-[350px] object-cover cursor-pointer rounded-lg"
                        /> */}
                    </div>
                </div>


            </div>
        </div>
    );
};

export default GameplayPage;
