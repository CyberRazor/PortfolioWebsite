import React from 'react';

const YouTubeEmbed = ({ videoId, width = "640", height = "360" }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
      <iframe
        width={width}
        height={height}
        src={embedUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
