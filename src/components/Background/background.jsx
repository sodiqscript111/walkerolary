import React from "react";
import "./background.css";
import walkVideo from "../../assets/walkvi.mp4"; // Correct import of video

const Background = () => {
  return (
    <div className="video-section">
      <video autoPlay muted loop>
        <source src={walkVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Background;
