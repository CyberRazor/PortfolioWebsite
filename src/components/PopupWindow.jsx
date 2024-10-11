import React from 'react';
import VidPlayer from './VidPlayer';
import SeparatorBody from './SeparatorBody';

const PopupWindow = ({ isOpen, onClose, title, content, developer, jobTitle, videoId, width = 'max-w-md' }) => {
  if (!isOpen) return null; // If not open, don't render anything

  // Function to play the click sound
  const playClickSound = () => {
    const sound = new Audio('./src/sounds/Ui_ClosePopup_01.mp3');
    sound.volume = 0.3; // Set volume between 0.0 and 1.0
    sound.play();
  };

  // Handle the close action with sound
  const handleClose = () => {
    playClickSound(); // Play the closing sound
    onClose(); // Call the onClose function from parent to close the popup
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
      onClick={handleClose} // Call handleClose when background is clicked
    >
      <div
        className={`bg-white p-10 rounded-lg shadow-lg relative w-full ${width}`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the popup
      >
        <button
          className="absolute top-2 right-2 text-2xl font-bold text-gray-600 hover:text-gray-800"
          onClick={handleClose} // Call handleClose when close button is clicked
        >
          &times;
        </button>
        {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
        <div>
          <h4 className="text-lg font-semibold mb-2">{developer}</h4>
        </div>
        <div>
          <h6 className="text-med italic mb-2">{jobTitle}</h6>
        </div>
        <SeparatorBody className="flex justify-center mx-auto h-0.5 w-3/4 my-4 bg-gradient-to-r from-black to-green" />
        <div>{content}</div>
        <div>
          <VidPlayer videoId={videoId} />
        </div>
      </div>
    </div>
  );
};

export default PopupWindow;
