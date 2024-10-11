import React from 'react'
import SeparatorBody from '../components/SeparatorBody'
import AudioImage from '../components/AudioImage'

export default function About() {
  return (
    <div className='w-50dvw justify-center'>
      <h1 className='text-gray font-bold text-7xl mt-12 mb-6'>DEVELOPER</h1>
      <h3 className='text-gray text-5xl my-6 font-medium'>CODER IN TRAINING</h3>
      <SeparatorBody className='flex justify-center mx-auto h-0.5 w-1/2 bg-gradient-to-r from-black to-green'/>
      <p className='text-gray text-lg text-left mx-20 mt-4 p-2'>After a 12 year career in the video games industry as an audio professional, I am seeking a new challenge by pivoting to front-end development and undertaking the <a href='https://codelancashire.tech/' className='underline text-green font-semibold hover:font-bold visited:text-gray'>CODE: Lancashire</a> 16-week bootcamp as part of cohort 7. I relish the challenge of learning new skills, and I am excited to apply and develop them further in a professional environment.</p> 
      <p className='text-gray text-lg text-left mx-20 my-1 p-2'>Through my games industry experience, I have many valuable transferable skills such as communication, prioitisation, time management, and creative problem solving. There are also many concepts that are highly familiar to me, such as project management & agile methodologies, version control, testing and debugging on target hardware platforms.</p>

      <p className='text-gray text-lg text-left mx-20 mb-2 p-2'> Languages I am currently learning are: HTML, CSS, Tailwind, React, JavaScript, & Python. I have been using my new coding skills to create websites, text-based games, to-do lists, perform data analysis, and short video games using C# in the Unity game engine.</p>
      <SeparatorBody className='grid justify-center mx-auto h-0.5 w-1/2 bg-gradient-to-r from-black to-green'/>
      <div className='grid grid-cols-4 gap-4 p-8 mx-36 items-start border-2 text-white rounded-md shadow-xl bg-gradient-to-r from-black/15 to-green/15 '>

      <AudioImage         
              alt='Colourful game image' // Use the alt prop here
              src='./src/images/Outharrier.jpg' // Use the src prop here
              volume={0.2}   
              soundFiles={['./src/sounds/Ui_digihover_01.mp3']} 
              
            />
      <AudioImage         
              alt='text based game' // Use the alt prop here
              src='./src/images/TextAdventure.jpg' // Use the src prop here
              volume={0.2}   
              soundFiles={['./src/sounds/Ui_digihover_01.mp3']} 
              
            />

      <AudioImage         
              alt='simple web application' // Use the alt prop here
              src='./src/images/Todo.jpg' // Use the src prop here
              volume={0.2}   
              soundFiles={['./src/sounds/Ui_digihover_01.mp3']} 

              
            />

<AudioImage         
              alt='C# coding script' // Use the alt prop here
              src='./src/images/UnityCode.jpg' // Use the src prop here
              volume={0.2}   
              soundFiles={['./src/sounds/Ui_digihover_01.mp3']} 

              
            />
       </div>
       <SeparatorBody className='grid justify-center mx-auto h-0.5 w-1/2 bg-gradient-to-r from-black to-green'/>
    </div>
    
    

    
  )
}
