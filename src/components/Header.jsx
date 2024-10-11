import React from 'react'
import HeaderLink from './HeaderLink'
import { NavLink } from 'react-router-dom'

import hoverSoundFile from '../sounds/Ui_digihover_01.mp3';
import clickSoundFile from '../sounds/UI_ClickBeep.mp3';

export default function Header() {
        // Function to play the sound
    const playSound = (soundUrl, volume = 1.0) => {
          const audio = new Audio(soundUrl);
          audio.volume = volume;
          audio.play();}
    return (

        /*<header className=" p-6 m-0 flex justify-between bg-gradient-to-r from-green from-0% to-black  underline " >
            <HeaderLink>Home</HeaderLink>
            <HeaderLink>About</HeaderLink>
            <HeaderLink>Showreel</HeaderLink>
            <HeaderLink>Credits</HeaderLink>
            <HeaderLink>Contact</HeaderLink>
        </header>*/
        <nav className="p-2 m-0 justify-between bg-gradient-to-r from-green from-0% to-black text-white underline ">
            <div className=" flex space-x-36 justify-center">
                <span className='border-2 border-white border-opacity-55 bg-gray bg-opacity-50 rounded-sm px-6 py-4  hover:bg-green transform transition duration-300' onMouseEnter={() => playSound(hoverSoundFile, 0.05)} onClick={() => playSound(clickSoundFile, 0.3)}>
                    <NavLink to="/" >Home</NavLink>
                </span>
                <span className='border-2 border-white border-opacity-55 bg-gray bg-opacity-50 rounded-sm px-6 py-4  hover:bg-green transform transition duration-300' onMouseEnter={() => playSound(hoverSoundFile, 0.05)} onClick={() => playSound(clickSoundFile, 0.3)}>
                    <NavLink to="/About">Developer</NavLink>
                </span>
                <span className='border-2 border-white border-opacity-55 bg-gray bg-opacity-50 rounded-sm px-4 py-4  hover:bg-green transform transition duration-300' onMouseEnter={() => playSound(hoverSoundFile, 0.05)} onClick={() => playSound(clickSoundFile, 0.3)}>
                    <NavLink to="/Showreel">Audio Design</NavLink>
                </span>
                <span className='border-2 border-white border-opacity-55 bg-gray bg-opacity-50 rounded-sm px-6 py-4  hover:bg-green transform transition duration-300' onMouseEnter={() => playSound(hoverSoundFile, 0.05)} onClick={() => playSound(clickSoundFile, 0.3)}>
                    <NavLink to="/Credits">Credits</NavLink>
                </span>
                <span className='border-2 border-white border-opacity-55 bg-gray bg-opacity-50 rounded-sm px-6 py-4  hover:bg-green transform transition duration-300' onMouseEnter={() => playSound(hoverSoundFile, 0.05)} onClick={() => playSound(clickSoundFile, 0.3)}>
                    <NavLink to="/Contact">Enquire</NavLink>
                </span>
            </div >
        </nav >
    )
}
