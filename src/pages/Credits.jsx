import React, {useState} from 'react'
import SeparatorBody from '../components/SeparatorBody'
import CreditCovers from '../components/CreditCovers'
import PopupWindow from '../components/PopupWindow'

export default function Credits() {
  const [openPopupIndex, setOpenPopupIndex] = useState(null); // Track which popup is open
  
  const projects = [
    { fileName: 'SR_SS.jpg', alt: 'Suicide Squad: Kill The Justice League', developer: 'Rocksteady Studios (2023)', jobTitle: 'Senior Sound Designer',description: 'On this project I provided additional sound design, editing and systems debugging. My primary tasks were to create the sound for character animations and outfit foley. ', videoId: '3QHZxzTPsco' },
    { fileName: 'SR_LSWSS.jpg', alt: 'Lego Star Wars: The Skywalker Saga', developer: 'TT Games (2020)', jobTitle: 'Senior Sound Designer', description: 'I designed the audio systems for the Lightsaber battles, the Darth Maul set-piece battle, and various ambiences for the hub worlds.', videoId:'n49TsZAwFEs' },
    { fileName: 'SR_LegoMovie2.jpg', alt: 'The Lego Movie 2: The Videogame', developer: 'TT Games (2019)', jobTitle: 'Senior Sound Designer', description: 'I created all the UI sound effects under a tight deadline in a new tool set. I also worked on the Chameleon boss battle set piece.', videoId:'sFgSPig6Tcc' },
    { fileName: 'SR_LegoIncredibles.jpg', alt: 'Lego Incredibles', developer: 'TT Games (2018)', jobTitle: 'Sound Designer', description: 'I led  a complete refactor of the UI audio systems, and also designed sounds for multiple set-pieces.', videoId: 'IRZq0c09Kwc' },
    { fileName: 'SR_LN.jpg', alt: 'The Lego Ninjao Movie: The Videogame', developer: 'TT Games (2017)', jobTitle: 'Sound Designer', description: 'I was tasked to working on the UI sounds,which were receiving a new level of focus. I also worked on multiple level environments and cutscenes.', videoId:'PfUwnd2TC2k' },
    { fileName: 'SR_LSWTFA.jpg', alt: 'Lego Star Wars: The Force Awakens', developer: 'TT Games (2016)', jobTitle: 'Sound Designer', description: 'On top of my existing duties on a wide variety of level environments, I led the design of aerial combat, dialogue editing and cutscene audio.', videoId:'5FZficSh-s8' },
    { fileName: 'SR_LA.jpg', alt: 'Lego Avengers', developer: 'TT Games', jobTitle: 'Sound Designer (2015)', description: 'On this project, I joined at the very end to contribute to the cutscene work and QA testing.', videoId:'FJrGmo_BEXY' },
    { fileName: 'SR_LegoJW.jpg', alt: 'Lego Jurassic World', developer: 'TT Games', jobTitle: 'Sound Designer (2015)', description: 'In my first role at TT Games, I was responsible for the audio of a large selection of level environments and set pieces such as dinosaur battles.', videoId:'PaVbiSBdNDo' },
    { fileName: 'SR_NnT.jpg', alt: 'Oddworld: New n Tasty', developer: 'Just Add Water Developments LTD (2014)', jobTitle: 'Audio Designer', description: 'As the sole Audio Designer at Just Add Water, I was responsible for all the audio in our remake of a PS1 title for PlayStation 4. I designed the in-game and cinematic sound effects, and worked with an external composer for all the music tracks.', videoId: 'k6z42a8yfTg' },
    { fileName: 'SR_MoshiMonsters.jpg', alt: 'Moshi Monsters', developer: 'Mind Candy (2012)', jobTitle: 'Junior Audio Designer', description: 'As Junior Audio Designer, my role was to create fresh sounds, music and voices for weekly content releases. Work was implemented via Flash files and Lua scripting.', videoId:'Nfw3UeguhH4' },
    { fileName: 'SR_MOHD.jpg', alt: 'Oddworld: Munchs Oddysee HD', developer: 'Just Add Water Developments LTD (2011)', jobTitle: 'Freelance Sound Engineer', description: 'In this freelance contract, my task was to recreate the original MIDI music system from DirectMusicProducer in FMOD and convert it into WAV files for use on modern platforms. I also created some additional sound effects', videoId: 'ivcW22wx7U0' },
    { fileName: 'SR_SWHD.jpg', alt: 'Oddworld: Strangers Wrath HD', developer: 'Just Add Water Developments LTD (2010)', jobTitle: 'Freelance Sound Engineer', description: 'I was hired by Just Add Water as a freelance audio designer to assist with the port of Oddworld: Strangers Wrath from Xbox to PC, Xbox360, PS3 and PS Vita. This involved rebuilding over 6000 cues with 30,000 wave files (inclusive of localised dialogue) from theoriginal XACT project in FMOD Designer.', videoId:'jl3AbW3yW0I' }];

  const openPopup = (index) => {
    setOpenPopupIndex(index); // Open the popup for the specific project
  };

  const closePopup = () => {
    setOpenPopupIndex(null); // Close the popup
  };

  return (
    <div className="w-50dvw justify-center" >
    <h1 className="text-gray font-bold text-7xl mt-12 mb-6">CREDITS</h1>
    <SeparatorBody className="flex justify-center mx-auto h-0.5 w-1/2 bg-gradient-to-r from-black to-green" />
    <p className="text-gray text-lg justify-center mx-20 my-12 p-2">
      I have worked on a wide variety different projects and IPs in my career. Click on each project for more information about my roles in them.
    </p>
    <SeparatorBody className='grid justify-center mx-auto h-0.5 w-1/2 bg-gradient-to-r from-black to-green'/>
    <div id="CreditBox" className="grid grid-cols-4 w-3/4 justify-center flex-wrap m-auto bg-gradient-to-l from-black/15 from-10% to-green/15 rounded-2xl shadow-xl">
      {projects.map((project, index) => (
        <CreditCovers
          key={index}
          fileName={project.fileName}
          alt={project.alt}
          onClick={() => openPopup(index)} // Open the specific popup on click
        />
      ))}
    </div>
    <SeparatorBody className='grid justify-center mx-auto h-0.5 w-1/2 bg-gradient-to-r from-black to-green'/>

    {/* Render the popups */}
    {openPopupIndex !== null && (
      <PopupWindow
        isOpen={openPopupIndex !== null}
        onClose={closePopup}
        title={projects[openPopupIndex].alt} // Use the alt as the title
        developer={<p>{projects[openPopupIndex].developer}</p>} // Show the Developer
        jobTitle={<p>{projects[openPopupIndex].jobTitle}</p>} // Show the Developer
        content={<p>{projects[openPopupIndex].description}</p>} // Show the unique description
        width="max-w-xl"
        videoId={projects[openPopupIndex].videoId} // Pass the videoId to PopupComponent
      />
    )}
  </div>
);
}
