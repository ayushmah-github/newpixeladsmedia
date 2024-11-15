import React from 'react';
import './VideoContainer.css';

const VideoContainer=()=> {
  return (
    <div className="video-container">
      <video className="background-video" autoPlay loop muted>
        <source src="../Assets/home-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay-content">
        <h1>Welcome to Our Portfolio</h1>
        <p>Explore our creative projects and discover what makes our work unique.</p>
        <a href="/portfolio" className="cta-button">View Portfolio</a>
      </div>
    </div>
  );
}

export default VideoContainer;
