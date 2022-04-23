import React from "react";
import "./Recommended.css";

function VideoCard({ image, title, channel, views, timestamp, avatar }) {
  return (
    <div className="video-card">
      <img src={image} alt="" />
      <div className="video-text">
        <h4>{title}</h4>
        <p>{channel}</p>
        <p>{views} - {timestamp}</p>
      </div>
    </div>
  );
}

export default VideoCard;
