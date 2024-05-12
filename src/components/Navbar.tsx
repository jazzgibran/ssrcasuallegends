"use client"
import React, { useState } from 'react';
import icon from '../assets/logo512.png';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [burgerOpen, setburgerOpen] = useState(false);

  const toggleBurger = () => {
    setburgerOpen(!burgerOpen);
  };

  return (
    <nav
      className="p-4 z-20 sticky bg-textured2 bg-cover shadow-xl border-b-2 border-Putty top-0 w-full"
      id='navbar'
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        <Link href="/" className=" flex items-center gap-x-3 text-2xl font-bold">
          <Image alt='icon' src={icon} className='w-12'></Image> Casual Legends
        </Link>
        <div className="md:hidden">
          <button onClick={toggleBurger} className="  focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <ul className={`hidden md:flex relative `}>
          <NavItem to="/about" text="About" />
          <NavItem to="/pricing" text="Pricing" />
          <NavItem to="/news" text="News" />
          <DropdownMenu />
        </ul>
      </div>
      {burgerOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{opacity: 0}}
            className="fixed top-0 right-0 bottom-0 bg-GreenMist w-64 py-6 px-4"
          >
            <button onClick={toggleBurger} className="  focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            {/* add onclick here */}
            <ul className="mt-6">
              <NavItem to="/about" text="About" onClick={toggleBurger} />
              <NavItem to="/pricing" text="Pricing" onClick={toggleBurger} />
              <NavItem to="/news" text="News" onClick={toggleBurger} />
              <NavItem to="/gameplay" text="Gameplay" onClick={toggleBurger} />
              <NavItem to="/character" text="Character Creation" onClick={toggleBurger} />
            </ul>

          </motion.div>
        </div>
      )}
    </nav>
  );
};

interface NavItemProps {
  to: string;
  text: string;
  onClick?: () => void;
}

const NavItem = ({ to, text, onClick }: NavItemProps) => {
  return (
    <Link href={to}>
    <li
    onClick={onClick}
    className=" hover:text-slate-800 hover:bg-Putty hover:bg-opacity-50 hover:shadow-lg rounded-lg p-2 px-5 transition-all duration-300 cursor-pointer"
    >
      {text}
    </li></Link>
  );
};

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative" onMouseEnter={toggleMenu} onMouseLeave={closeMenu}>
      <li
        className=" hover:text-slate-800 hover:bg-Putty hover:bg-opacity-50 rounded-lg p-2 px-5 transition-all duration-300 cursor-pointer"
      >
        Guides
      </li>
      {isOpen && (
        <ul className="absolute right-0 w-[400px] bg-textured2  rounded-md shadow-lg  border-gray-400 border" onMouseEnter={toggleMenu} >
          <DropdownItem to="/gameplay" text="Gameplay" description="Overview of how the game works." />
          <DropdownItem to="/character" text="Character Creation" description="Guides on creating a character." />
        </ul>
      )}
    </div>
  );
};

interface DropdownItemProps {
  to: string;
  text: string;
  description: string;
}

const DropdownItem = ({ to, text, description }: DropdownItemProps) => {
  return (
    <li
      className="hover:bg-Putty hover:bg-opacity-50 px-4 py-2 cursor-pointer"
    >
      <Link href={to} className='flex flex-col items-start py-2'>
        <p className='px-2 font-semibold'>{text}</p>
        <p className='text-gray-800 px-2 text-left'>{description}</p>
      </Link>

    </li>
  );
};

export default Navbar;