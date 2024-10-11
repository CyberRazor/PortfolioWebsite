
import React from 'react';

const CreditCovers = ({ fileName, alt, onClick, videoId, hoverSoundFile, clickSoundFile, volume = 1.0 }) => {
  // Function to play the hover sound
  const playHoverSound = () => {
    const sound = new Audio('./src/sounds/Ui_digihover_01.mp3');
    sound.volume = 0.1; // Set volume between 0.0 and 1.0
    sound.play();
  };

  // Function to play the click sound
  const playClickSound = () => {
    const sound = new Audio('./src/sounds/UI_ClickBeep.mp3');
    sound.volume = 0.3; // Set volume between 0.0 and 1.0
    sound.play();
  };

  // Combine the click sound with the onClick prop
  const handleClick = () => {
    playClickSound(); // Play click sound
    if (onClick) {
      onClick(); // Call the onClick function passed from the parent (if provided)
    }
  };

  return (
    <img
      src={`./src/images/${fileName}`} // Source of the image
      alt={alt} // Alt text
      onClick={handleClick} // Handle click with sound
      onMouseEnter={playHoverSound} // Play sound on hover
      className="w-60 h-60 m-4 rounded-xl border-2 border-gray shadow-md bg-green transform transition duration-500 hover:scale-110 hover:z-10 hover:opacity- hover:border-green hover:border-6"
      videoId={videoId} // Arbitrary prop for videoId
    />
  );
};

export default CreditCovers;
