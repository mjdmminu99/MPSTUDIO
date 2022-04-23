import React from "react";
import "./VideoCard.css";

function VideoCard({ image, title, channel, views, timestamp }) {
  return (
    <div className="video-card">
      <img src={image} alt="" />
      <div className="video-content">
        <div className="video-text">
          <p className="title">{title}</p>
          <p className="channel">{channel}</p>
          <p className="views">
            {views} • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
