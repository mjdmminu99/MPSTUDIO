import './CoachPage.css'
import { Button, Container } from '@material-ui/core';

import React, { useEffect } from "react";
import SideBar from "../components/Sidebar";
import { joinRoomById } from "../firebase/video-rooms";
import { useLocation } from 'react-router-dom'
function LearnPage() {
  const location = useLocation();
  useEffect(()=>joinRoomById(location.pathname.split('/').pop()))

  return (
    <div className='app'>
      <SideBar/>
      <Container>
        <h1>MP-STUDIO Student Portal</h1>
        <div id="videos">
          <video id="remoteVideo" muted autoPlay playsInline></video>
        </div>
      </Container>
    </div>
  );

}

export default LearnPage;