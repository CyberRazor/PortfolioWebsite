import React from 'react'
import SeparatorBody from '../components/SeparatorBody'
import VidPlayer from '../components/VidPlayer'

export default function Showreel() {
  return (
    <div className='grid w-50dvw justify-center m-10 '>
                <h1 className='text-gray font-bold text-7xl mt-12 mb-6'>AUDIO <span className='text-black font-medium'>DESIGN</span></h1>
                <SeparatorBody className='grid justify-center mx-auto h-0.5 w-1/2 bg-gradient-to-r from-black to-green'/>
                <div className='grid gap-0 bg-gradient-to-r from-black/15 to-green/15'>
                  <div className='grid grid-cols-2 justify-center w-25dvw'>
                    <p className='text-black text-lg text-center mx-20 mt-12 mb-2  resize:none'>Highlights reel of my most recent work with Rocksteady Studios & Netherrealm Studios.</p>
                    <p className='text-black text-lg text-center mx-20 mt-12 mb-2  text-nowrap resize:none'>Selected highlights from my career between 2013-2016.</p>
                  </div>
                  <div className='grid grid-cols-2  justify-center w-25dvw'>
                      
                      <VidPlayer videoId='UG6W4DtH-gI'/>
                      <VidPlayer videoId='J3osq5AxCGg' />
                    </div>

                </div>
                <SeparatorBody className='grid justify-center mx-auto  h-0.5 w-1/2 bg-gradient-to-r from-black to-green'/>
                <h1 className='text-gray font-bold text-7xl mt-20 mb-6'>SOUND <span className='text-black font-medium'>REDESIGNS</span></h1>
                <SeparatorBody className='grid justify-center mx-auto h-0.5 w-1/2 bg-gradient-to-r from-black to-green'/>
                  <div className='grid grid-cols-2 w-50dvw p-4 justify-center bg-gradient-to-r from-black/15 to-green/15'>
                  <p className=' grid col-span-2 text-gray text-lg text-center mx-20 mt-12 mb-4 p-2 resize:none'>Here are some short audio redesigns I made during the pandemic. All the source audio was recorded at home during the lockdown.</p>
                  <div className='grid justify-center w-25dvw'>                      
                      <VidPlayer videoId='03kVeAwGG5w' />
                    </div>
                  <div className='grid justify-center w-25dvw'>
                   <VidPlayer videoId='lrfa3jv_C1g' />
                  </div>
                  <div className='grid justify-center w-25dvw'>                      
                      <VidPlayer videoId='3gIjqJFgqLU' />
                    </div>
                  <div className='grid justify-center w-25dvw'>
                   <VidPlayer videoId='OVc-WtEwOoI' />
                  </div>
                </div>
                <SeparatorBody className='grid justify-center mx-auto h-0.5 w-1/2 bg-gradient-to-r from-black to-green'/>


    </div>
  )
}
