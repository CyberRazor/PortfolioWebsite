import React from 'react'
import SeparatorMenu from './SeparatorMenu'

export default function Sidebar() {
    return (
        <div className="w-1/4 h-full flex flex-col p-2 bg-gradient-to-r from-black from-10% to-green  text-white">
            <img src='src\images\myFace_alt.jpg' class="mx-auto my-6 flex justify-self-center w-5/6 border-4 border-solid border-white rounded-full text-white"></img>
            <div className="m-4">
                <h5 className="text-4xl px-5 py-2 font-semibold">CONTACT</h5>
                <SeparatorMenu />
                <ul className='p-4 text-justify' >
                    <li className='my-2'>+447549 165 089</li>
                    <li className='my-2'>stomp224@gmail.com</li>
                    <li className='my-2'>Lancaster, Lancashire</li>
                </ul>

                <h5 className="text-4xl px-5 py-2 font-semibold">SKILLS</h5>
                <SeparatorMenu />
                <ul className='p-4 text-justify'>
                    <li className='my-1'>Studio & field recording</li>
                    <li className='my-1'>Audio editing & design</li>
                    <li className='my-1'>Synthesis and processing</li>
                    <li className='my-1'>Dialogue processing</li>
                    <li className='my-1'>Game engine implementation</li>
                    <li className='my-1'>Testing and debugging</li>
                    <li className='my-1'>Visual scripting, C# and Lua</li>
                    <li className='my-1'>HTML, CSS, Javascript & React</li>
                </ul>

                <h5 className="text-4xl px-5 py-2 font-semibold">SOFTWARE</h5>
                <SeparatorMenu />
                <ul className='p-4 text-justify'>
                    <li className='my-1'>Audio Middleware:<br></br> WWise, Fmod, XACT</li>
                    <li className='my-1'>Game Engines: Unreal, Unity</li>
                    <li className='my-1'>DAW: Reaper, Ableton Live, Logic, iZotope RX, Soundforge</li>
                </ul>

                <h5 className="text-4xl px-5 py-2 font-semibold">ADDITIONAL INFO</h5>
                <SeparatorMenu />
                <ul className='p-4 text-justify text-sm'>
                    <li className='my-2' >2024: Completed CODE: Lancashire tech bootcamp</li>
                    <li className='my-2' >2024: Volunteer Sound Tech at the Lancaster Grand Theatre</li>
                    <li className='my-2' >2012: Edited localised dialogue for Borderlands 2 at Liquid Violet</li>
                    <li className='my-2' >2008: Worked on multiple iOS and Xbox Live Indie Game titles</li>
                    <li className='my-2' >2007: Completed work experience as a QA tester at Lionhead studios on Fable 2</li>
                </ul>
            </div>
        </div>
    )
}
