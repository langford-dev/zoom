// // DOM elements.
const roomInputBox = document.getElementById('room-input-box')
const joinButton = document.getElementById('join-button')
const roomSelectionContainer = document.getElementById('room-selection-container')

let localVideo = document.getElementById('local-video')
let remoteVideo = document.getElementById('remote-video')

// // Variables.
const socket = io()
const mediaConstraints = {
    audio: true,
    video: { width: 1280, height: 720 },
}
let localStream
let remoteStream
let isRoomCreator
let rtcPeerConnection
let roomId

// // Free public STUN servers provided by Google.
const iceServers = {
    iceServers: [
        { urls: 'stun:stun.l.google.com:19302' },
        { urls: 'stun:stun1.l.google.com:19302' },
        { urls: 'stun:stun2.l.google.com:19302' },
        { urls: 'stun:stun3.l.google.com:19302' },
        { urls: 'stun:stun4.l.google.com:19302' },
    ],
}

joinButton.addEventListener('click', () => {
    joinRoom(roomInputBox.value)
})

socket.on('room_created_event', async() => {
    console.log('room_created_event ..client')

    // await showLocalVideo(mediaConstraints)
    // isRoomCreator = true
})

socket.on('room_joined_event', async() => {
    console.log('room_joined_event ..client')

    //show local video
    await showLocalVideo(mediaConstraints)

    //emit start call event
    socket.emit('start_call', roomId)
})

// socket.on('full_room', () => {
//     console.log('Socket event callback: full_room')

//     alert('The room is full, please try another one')
// })



function joinRoom(room) {

    if (room === '') {
        alert('Please type a room ID')
    } else {

        //set global roomId
        roomId = room
        socket.emit('join', room)

        roomSelectionContainer.style.display = "none"

    }
}

// function showLocalVideo() {
//     roomSelectionContainer.style = 'display: none'
//     videoChatContainer.style = 'display: block'
// }

async function showLocalVideo(mediaConstraints) {
    let stream
    try {
        stream = await navigator.mediaDevices.getUserMedia(mediaConstraints)
    } catch (error) {
        console.error('Could not get user media', error)
    }

    localStream = stream
    localVideo.srcObject = stream
}


socket.on('start_call', async() => {
    console.log('start_call ..client')


    rtcPeerConnection = new RTCPeerConnection(iceServers)
    addLocalTracks(rtcPeerConnection)
    rtcPeerConnection.ontrack = showRemoteStream
    rtcPeerConnection.onicecandidate = sendIceCandidate
    await createOffer(rtcPeerConnection)


    // if (isRoomCreator) {
    //     rtcPeerConnection = new RTCPeerConnection(iceServers)
    //     addLocalTracks(rtcPeerConnection)
    //     rtcPeerConnection.ontrack = showRemoteStream
    //     rtcPeerConnection.onicecandidate = sendIceCandidate
    //     await createOffer(rtcPeerConnection)
    // }
})



socket.on('webrtc_offer', async(event) => {
    console.log('Socket event callback: webrtc_offer')

    if (!isRoomCreator) {
        rtcPeerConnection = new RTCPeerConnection(iceServers)
        addLocalTracks(rtcPeerConnection)
        rtcPeerConnection.ontrack = showRemoteStream
        rtcPeerConnection.onicecandidate = sendIceCandidate
        rtcPeerConnection.setRemoteDescription(new RTCSessionDescription(event))
        await createAnswer(rtcPeerConnection)
    }
})

socket.on('webrtc_answer', (event) => {
    console.log('Socket event callback: webrtc_answer')

    rtcPeerConnection.setRemoteDescription(new RTCSessionDescription(event))
})

socket.on('webrtc_ice_candidate', (event) => {
    console.log('webrtc_ice_candidate')

    // ICE candidate configuration.
    var candidate = new RTCIceCandidate({
        sdpMLineIndex: event.label,
        candidate: event.candidate,
    })
    rtcPeerConnection.addIceCandidate(candidate)
})


function addLocalTracks(rtcPeerConnection) {
    localStream.getTracks().forEach((track) => {
        rtcPeerConnection.addTrack(track, localStream)
    })
}

async function createOffer(rtcPeerConnection) {

    console.log('offer creation:', rtcPeerConnection);

    let sessionDescription
    try {
        sessionDescription = await rtcPeerConnection.createOffer()
        rtcPeerConnection.setLocalDescription(sessionDescription)
    } catch (error) {
        console.error(error)
    }

    socket.emit('webrtc_offer', {
        type: 'webrtc_offer',
        sdp: sessionDescription,
        roomId,
    })
}

async function createAnswer(rtcPeerConnection) {
    let sessionDescription
    try {
        sessionDescription = await rtcPeerConnection.createAnswer()
        rtcPeerConnection.setLocalDescription(sessionDescription)
    } catch (error) {
        console.error(error)
    }

    socket.emit('webrtc_answer', {
        type: 'webrtc_answer',
        sdp: sessionDescription,
        roomId,
    })
}

function showRemoteStream(event) {
    remoteVideo.srcObject = event.streams[0]
    remoteStream = event.stream
}

function sendIceCandidate(event) {
    if (event.candidate) {
        socket.emit('webrtc_ice_candidate', {
            roomId,
            label: event.candidate.sdpMLineIndex,
            candidate: event.candidate.candidate,
        })
    }
}