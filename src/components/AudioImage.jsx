import React from 'react';

const HoverImageWithSound = ({ src, alt, volume = 1.0, soundFiles,  className}) => {

  // Function to play a random sound on hover
  const playRandomSound = () => {
    // Choose a random sound from the soundFiles array
    const randomSoundFile = soundFiles[Math.floor(Math.random() * soundFiles.length)];
    
    // Create an Audio instance using the prop for the sound file
    const sound = new Audio(randomSoundFile);

    // Set the volume
    sound.volume = volume;

    // Play the sound
    sound.play();
  };

  // Return the image element
  return (
    <div>
      <img
        className='w-5/6 h-72 border-2 rounded-2xl shadow-xl transform transition duration-500 hover:scale-110 hover:z-10 object-cover object-center'
        alt={alt} // Use the alt prop here
        src={src} // Use the src prop here
        onMouseEnter={playRandomSound} // Play sound on hover
      />
    </div>
  );
};

export default HoverImageWithSound;
