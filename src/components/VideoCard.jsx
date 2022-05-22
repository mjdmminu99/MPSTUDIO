import React from "react";
import "./VideoCard.css";
import { Button } from "@material-ui/core";
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

function VideoCard({ image, title, channel, views, timestamp, onJoinClick }) {
  return (
    <div className="video-card">
      <img src={image} alt=""/>
      <Button onClick={onJoinClick}><ConnectWithoutContactIcon/> <span>Join</span> </Button>
      <div className="video-content">
        <div className="video-text">
          <p className="title">{title}</p>
          <p className="channel">{channel}</p>
          <p className="views">
            {views} . {timestamp}
          </p>

        </div>
      </div>
    </div>
  );
}

export default VideoCard;
