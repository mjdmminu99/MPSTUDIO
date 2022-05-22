import './CoachPage.css'
import { Button, Container } from '@material-ui/core';
import LinkedCameraIcon from '@mui/icons-material/LinkedCamera';
import SchoolIcon from '@mui/icons-material/School';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import { createRoom, openUserMedia, hangUp } from '../firebase/video-rooms'
import React, { useState } from "react";
import SideBar from "../components/Sidebar";


function CoachPage() {
  const [camDisabled, setCamDisabled] = useState(false);
  const [startClassDisabled, setStartClassDisabled] = useState(true);
  const [finishClassDisabled, setFinishClassDisabled] = useState(true);
  return (
    <div className='app'>
      <SideBar/>
      <Container>
        <h1>MP-STUDIO Coach Panel</h1>
        <Container id="buttons">
          <Button id="cameraBtn" disabled={camDisabled} onClick={async (e) => {
            await openUserMedia();
            setCamDisabled(true);
            setStartClassDisabled(false);
          }}>
            <LinkedCameraIcon/>
            <span className="mdc-button__label">Open camera & microphone</span>
          </Button>
          <Button id="createBtn" disabled={startClassDisabled} onClick={async (e) => {
            await createRoom(e);
            setStartClassDisabled(true);
            setFinishClassDisabled(false);
          }}>
            <SchoolIcon/>
            <span className="mdc-button__label">Start Class Room</span>
          </Button>
          <Button id="hangupBtn" disabled={finishClassDisabled}  onClick={hangUp}>
            <CancelPresentationIcon/>
            <span className="mdc-button__label">Finish Class</span>
          </Button>
        </Container>
        <div>
          <span id="currentRoom"></span>
        </div>
        <div id="videos">
          <video id="localVideo" muted autoPlay playsInline></video>
        </div>
      </Container>

    </div>
  );

}

export default CoachPage;