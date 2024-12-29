import ReactPlayer from 'react-player';
import './index.css';
import React, { useState } from 'react';

const VideoPlayer = () => {
  const [url, setUrl] = useState(
    'https://youtu.be/jOst7Trpj7o?si=hSsmI_BIVH-OhMZO'
  );

  return (
    <div className="video-container">
      <h1 className="heading">Video Player</h1>
      <p className="para">For AdFree videos copy the URL and paste here.</p>

      <input 
        className='video-url-input'
        type="search"
        placeholder="Enter Video URL" 
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <div className="responsive-container">
        <ReactPlayer url={url} controls light loop playbackRate /> 
      </div>
    </div>
  );
};

export default VideoPlayer;

