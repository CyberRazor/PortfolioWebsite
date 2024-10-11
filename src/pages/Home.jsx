import React from 'react'
import SeparatorBody from '../components/SeparatorBody'
import AudioImage from '../components/AudioImage'

export default function Home() {

  return (
    <div id="Home" className='w-50dvw justify-center '>
        <h1 className='text-gray font-bold text-7xl mt-12 mb-6'>MICHAEL <span className='text-black font-medium'>TAYLOR</span></h1>
        {/*<SeparatorBody className="flex justify-center mx-auto h-2 w-1/2 bg-gradient-to-r from-black to-green"/>*/}
        <h3 className='text-gray text-5xl my-6 font-medium'>AUDIO DESIGNER AND DEVELOPER</h3>
       {/* <h2 className='text-gray text-2xl my-6'>FOR VIDEO GAMES</h2>*/}


        <SeparatorBody className="flex justify-center mx-auto h-1 w-3/4 bg-gradient-to-r from-black to-green"/>
        <p className='text-gray text-lg justify-center mx-20 my-12 p-2'>Welcome to the portfolio of Michael Taylor, veteran Audio Designer for video games & interactive media, and aspiring junior developer.</p>
        
        <p className='text-gray text-lg justify-center mx-20 mb-12 p-2'>If you wish to contact me regarding a quote for contract work, please do so via the <span className="underline">Enquiry Form</span>.</p>
        <SeparatorBody className='grid justify-center mx-auto h-0.5 w-1/2 bg-gradient-to-r from-black to-green'/>
        <div className='grid grid-cols-4 gap-2 p-6 mx-36  mb-12 items-start border-2 text-white rounded-2xl shadow-xl bg-gradient-to-r from-black/15 to-green/15 '>

            <AudioImage         
              alt='synthesiser image' // Use the alt prop here
              src='./src/images/ER_01.jpg' // Use the src prop here
              volume={0.2}   
              soundFiles={[
                './src/sounds/UI_synthhover_01.mp3',
                './src/sounds/UI_synthhover_02.mp3' ,
                './src/sounds/UI_synthhover_03.mp3',
                './src/sounds/UI_synthhover_04.mp3'
                    ]} 
              
            />
            <AudioImage         
              alt='mixing desk image' // Use the alt prop here
              src='./src/images/GrandDesk.jpg' // Use the src prop here
              volume={0.2}   
              soundFiles={[
                './src/sounds/UI_drumhover_01.mp3',
                './src/sounds/UI_drumhover_02.mp3',
                './src/sounds/UI_drumhover_03.mp3',
                './src/sounds/UI_drumhover_04.mp3'
              ]}
              
            />
            <AudioImage         
              alt='synthesiser image' // Use the alt prop here
              src='./src/images/ER_05.jpg' // Use the src prop here
              volume={0.2}   
              soundFiles={[
                './src/sounds/UI_padhover_01.mp3',
                './src/sounds/UI_padhover_02.mp3',
                './src/sounds/UI_padhover_03.mp3',
                './src/sounds/UI_padhover_04.mp3'
              ]}
              
            />
            <AudioImage         
              alt='audio software image' // Use the alt prop here
              src='./src/images/ReaperDAW.jpg' // Use the src prop here
              volume={0.2}   
              soundFiles={[
                './src/sounds/ui_basshover_01.mp3',
                './src/sounds/ui_basshover_02.mp3',
                './src/sounds/ui_basshover_03.mp3',
                './src/sounds/ui_basshover_04.mp3'
              ]}
              
            /> 
       </div>


    </div>
  )
} 


