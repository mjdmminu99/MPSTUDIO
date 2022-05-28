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
    <div className='Student'>
      <SideBar/>
      <Container>
        <div className='Student_live'>
          <div className='student_title'>
        <h1>MP-STUDIO Student Portal</h1> 
          </div>
        <div id="videos">
          <video id="remoteVideo" muted autoPlay playsInline></video>
        </div>
        </div>
      </Container>
    </div>
  );

}

export default LearnPage;