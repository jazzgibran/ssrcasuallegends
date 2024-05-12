import React from 'react';
import partyBackgroundImg from '../assets/partybg.png';
import Image from 'next/image';

const About = () => {
    return (
        <div
            className="min-h-screen lg:mb-16">
            <div className='w-full opacity-40 absolute '>
                <Image src={partyBackgroundImg} className='hidden lg:block w-full'></Image>
            </div>
            <div className="z-10 relative container mx-auto py-12 px-4 ">
                <div
                    className="text-center mb-8"
                >
                    <h1 className="text-4xl font-semibold text-teal-700 mb-2">CASUAL LEGENDS</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-justify">
                    <div className="border-teal-400 border bg-GreenMist bg-opacity-70 rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-semibold text-teal-700 mb-4">Game Concept</h2>
                        <p className="text-lg text-teal-700">
                            Welcome to Casual Legends, where the worlds of immersive role-playing adventure game and cutting-edge AI technology collide to create a unique and immersive tabletop gaming experience. In Casual Legends, players dive into epic adventures set in fantastical realms filled with magic, monsters, and mystery. But what sets Casual Legends apart is its innovative use of artificial intelligence to power the Dungeon Master.
                            Gone are the days of waiting for a human DM to meticulously plan out every detail of your adventure. With Casual Legends, an advanced AI Dungeon Master dynamically generates the story, NPCs, and encounters in real-time, responding to your actions and decisions with unprecedented flexibility and creativity. This means no two adventures are ever the same, and the only limit is your imagination.
                            Whether you're a seasoned tabletop RPG veteran or brand new to the world of role-playing games, Casual Legends offers a thrilling and accessible gaming experience that puts you and your friends at the center of the action. So gather your party, prepare your spells, and get ready to embark on a journey unlike any other.</p>
                    </div>

                    <div className="border-teal-400 border bg-GreenMist bg-opacity-70 rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-semibold text-teal-700 mb-4">AI Dungeon Master</h2>
                        <p className="text-lg text-teal-700">
                            At the heart of Casual Legends lies its revolutionary AI Dungeon Master, a groundbreaking piece of technology that brings your adventures to life with unparalleled depth and realism. Powered by state-of-the-art natural language processing algorithms, the AI Dungeon Master is capable of understanding and responding to your every command, query, and interaction with astonishing accuracy and sophistication.
                            But the true magic of the AI Dungeon Master lies in its ability to adapt and evolve based on the actions of the players. Whether you're exploring ancient ruins, engaging in diplomacy with powerful NPCs, or facing off against fearsome monsters, the AI Dungeon Master dynamically generates the world around you, crafting a rich and immersive narrative that unfolds in real-time.
                            But perhaps most impressive of all is the AI Dungeon Master's capacity for creativity and improvisation. No matter how unexpected or unconventional your actions may be, the AI Dungeon Master is always ready with a response, seamlessly weaving your choices into the fabric of the story and ensuring that every adventure feels unique and unpredictable.
                            So whether you're seeking thrills, excitement, or simply a chance to escape into a world of fantasy and adventure, look no further than Casual Legends and its AI Dungeon Master. The next chapter of your epic journey awaits!</p>
                    </div>
                </div>

                <div

                    className="mt-8 text-center">
                    <h2 className="text-2xl font-semibold text-teal-700 mb-4">Team Members</h2>
                    <div
                        className="border-teal-400 border  bg-GreenMist bg-opacity-70 rounded-lg shadow-lg p-6 mb-4" >
                        <h3 className="text-lg font-semibold text-teal-700">Ilya</h3>
                        <p className="text-teal-700">Product Sorcerer</p>
                    </div >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Members name="Hung" role="Bard Engineer" />
                        <Members name="Nate" role="Code Wizard" />
                        <Members name="Elliot" role="Data Elf " />
                        <Members name="Nisha" role="Frontend Ranger " />
                        <Members name="Jazz" role="Quality Warlock" />
                        {/* Add more team members as needed */}
                    </div>
                </div>
            </div>
        </div>
    );
}

const Members = ({ name, role }) => {
    return (
        <div
            className="border-teal-400 border bg-GreenMist bg-opacity-70 rounded-lg shadow-lg p-6" >
            <h3 className="text-lg font-semibold text-teal-700">{name}</h3>
            <p className="text-teal-700">{role}</p>
        </div >
    );
};

export default About;
