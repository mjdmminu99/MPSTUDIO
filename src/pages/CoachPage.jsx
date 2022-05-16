import './CoachPage.css'
import Button from '@material-ui/core/Button';
import LinkedCameraIcon from '@mui/icons-material/LinkedCamera';


const configuration = {
  iceServers: [
    {
      urls: [
        'stun:stun1.l.google.com:19302',
        'stun:stun2.l.google.com:19302',
      ],
    },
  ],
  iceCandidatePoolSize: 10,
};


function CoachPage() {

  let firebase = { dummy: 'dummy' }

  let peerConnection = null;
  let localStream = null;
  let remoteStream = null;
  let roomDialog = null;
  let roomId = null;

  async function createRoom() {
    document.querySelector('#createBtn').disabled = true;
    document.querySelector('#joinBtn').disabled = true;
    const db = firebase.firestore();

    console.log('Create PeerConnection with configuration: ', configuration);
    peerConnection = new RTCPeerConnection(configuration);

    registerPeerConnectionListeners();

    // Add code for creating a room here

    // Code for creating room above

    localStream.getTracks().forEach(track => {
      peerConnection.addTrack(track, localStream);
    });

    // Code for creating a room below

    // Code for creating a room above

    // Code for collecting ICE candidates below

    // Code for collecting ICE candidates above

    peerConnection.addEventListener('track', event => {
      console.log('Got remote track:', event.streams[0]);
      event.streams[0].getTracks().forEach(track => {
        console.log('Add a track to the remoteStream:', track);
        remoteStream.addTrack(track);
      });
    });

    // Listening for remote session description below

    // Listening for remote session description above

    // Listen for remote ICE candidates below

    // Listen for remote ICE candidates above
  }

  function joinRoom() {
    document.querySelector('#createBtn').disabled = true;
    document.querySelector('#joinBtn').disabled = true;

    document.querySelector('#confirmJoinBtn').addEventListener('click', async () => {
      roomId = document.querySelector('#room-id').value;
      console.log('Join room: ', roomId);
      document.querySelector(
        '#currentRoom').innerText = `Current room is ${roomId} - You are the callee!`;
      await joinRoomById(roomId);
    }, { once: true });
    roomDialog.open();
  }

  async function joinRoomById(roomId) {
    const db = firebase.firestore();
    const roomRef = db.collection('rooms').doc(`${roomId}`);
    const roomSnapshot = await roomRef.get();
    console.log('Got room:', roomSnapshot.exists);

    if (roomSnapshot.exists) {
      console.log('Create PeerConnection with configuration: ', configuration);
      peerConnection = new RTCPeerConnection(configuration);
      registerPeerConnectionListeners();
      localStream.getTracks().forEach(track => {
        peerConnection.addTrack(track, localStream);
      });

      // Code for collecting ICE candidates below

      // Code for collecting ICE candidates above

      peerConnection.addEventListener('track', event => {
        console.log('Got remote track:', event.streams[0]);
        event.streams[0].getTracks().forEach(track => {
          console.log('Add a track to the remoteStream:', track);
          remoteStream.addTrack(track);
        });
      });

      // Code for creating SDP answer below

      // Code for creating SDP answer above

      // Listening for remote ICE candidates below

      // Listening for remote ICE candidates above
    }
  }

  async function openUserMedia(e) {
    const stream = await navigator.mediaDevices.getUserMedia(
      { video: true, audio: true });
    document.querySelector('#localVideo').srcObject = stream;
    localStream = stream;
    remoteStream = new MediaStream();
    document.querySelector('#remoteVideo').srcObject = remoteStream;

    console.log('Stream:', document.querySelector('#localVideo').srcObject);
    document.querySelector('#cameraBtn').disabled = true;
    document.querySelector('#joinBtn').disabled = false;
    document.querySelector('#createBtn').disabled = false;
    document.querySelector('#hangupBtn').disabled = false;
  }

  async function hangUp(e) {
    const tracks = document.querySelector('#localVideo').srcObject.getTracks();
    tracks.forEach(track => {
      track.stop();
    });

    if (remoteStream) {
      remoteStream.getTracks().forEach(track => track.stop());
    }

    if (peerConnection) {
      peerConnection.close();
    }

    document.querySelector('#localVideo').srcObject = null;
    document.querySelector('#remoteVideo').srcObject = null;
    document.querySelector('#cameraBtn').disabled = false;
    document.querySelector('#joinBtn').disabled = true;
    document.querySelector('#createBtn').disabled = true;
    document.querySelector('#hangupBtn').disabled = true;
    document.querySelector('#currentRoom').innerText = '';

    // Delete room on hangup
    if (roomId) {
      const db = firebase.firestore();
      const roomRef = db.collection('rooms').doc(roomId);
      const calleeCandidates = await roomRef.collection('calleeCandidates').get();
      calleeCandidates.forEach(async candidate => {
        await candidate.delete();
      });
      const callerCandidates = await roomRef.collection('callerCandidates').get();
      callerCandidates.forEach(async candidate => {
        await candidate.delete();
      });
      await roomRef.delete();
    }

    document.location.reload(true);
  }

  function registerPeerConnectionListeners() {
    peerConnection.addEventListener('icegatheringstatechange', () => {
      console.log(
        `ICE gathering state changed: ${peerConnection.iceGatheringState}`);
    });

    peerConnection.addEventListener('connectionstatechange', () => {
      console.log(`Connection state change: ${peerConnection.connectionState}`);
    });

    peerConnection.addEventListener('signalingstatechange', () => {
      console.log(`Signaling state change: ${peerConnection.signalingState}`);
    });

    peerConnection.addEventListener('iceconnectionstatechange ', () => {
      console.log(
        `ICE connection state change: ${peerConnection.iceConnectionState}`);
    });
  }

  return (
    <div>
      <h1>Welcome to MP-STUDIO Coach Panel!</h1>
      <div id="buttons">
        <Button className="mdc-button mdc-button--raised" id="cameraBtn" onClick={openUserMedia()}>
          <LinkedCameraIcon/>
          <span className="mdc-button__label">Open camera & microphone</span>
        </Button>
        <button className="mdc-button mdc-button--raised" disabled id="createBtn">
          <i className="material-icons mdc-button__icon" aria-hidden="true">group_add</i>
          <span className="mdc-button__label">Create room</span>
        </button>
        <button className="mdc-button mdc-button--raised" disabled id="joinBtn">
          <i className="material-icons mdc-button__icon" aria-hidden="true">group</i>
          <span className="mdc-button__label">Join room</span>
        </button>
        <button className="mdc-button mdc-button--raised" disabled id="hangupBtn">
          <i className="material-icons mdc-button__icon" aria-hidden="true">close</i>
          <span className="mdc-button__label">Hangup</span>
        </button>
      </div>
      <div>
        <span id="currentRoom"></span>
      </div>
      <div id="videos">
        <video id="localVideo" muted autoPlay playsInline></video>
        <video id="remoteVideo" autoPlay playsInline></video>
      </div>
      <div className="mdc-dialog"
           id="room-dialog"
           role="alertdialog"
           aria-modal="true"
           aria-labelledby="my-dialog-title"
           aria-describedby="my-dialog-content">
        <div className="mdc-dialog__container">
          <div className="mdc-dialog__surface">
            <h2 className="mdc-dialog__title" id="my-dialog-title">Join room</h2>
            <div className="mdc-dialog__content" id="my-dialog-content">
              Enter ID for room to join:
              <div className="mdc-text-field">
                <input type="text" id="room-id" className="mdc-text-field__input"/>
                <label className="mdc-floating-label" htmlFor="my-text-field">Room ID</label>
                <div className="mdc-line-ripple"></div>
              </div>
            </div>
            <footer className="mdc-dialog__actions">
              <button type="button" className="mdc-button mdc-dialog__button" data-mdc-dialog-action="no">
                <span className="mdc-button__label">Cancel</span>
              </button>
              <button id="confirmJoinBtn" type="button" className="mdc-button mdc-dialog__button"
                      data-mdc-dialog-action="yes">
                <span className="mdc-button__label">Join</span>
              </button>
            </footer>
          </div>
        </div>
        <div className="mdc-dialog__scrim"></div>
      </div>
    </div>
  );

}

export default CoachPage;