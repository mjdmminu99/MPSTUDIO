import './CoachPage.css'
import { Button, Container } from '@material-ui/core';

import React, { useEffect } from "react";
import SideBar from "../components/Sidebar";

function LearnPage() {
  useEffect(()=>{})

  return (
    <div className='app'>
      <SideBar/>
      <Container>
        <h1>MP-STUDIO Student Portal</h1>
        <div id="videos">
          <video id="localVideo" muted autoPlay playsInline></video>
        </div>
      </Container>
    </div>
  );

}

export default LearnPage;