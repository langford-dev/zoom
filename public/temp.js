// < !DOCTYPE html >
//     <
//     html lang = "en" >

//     <
//     head >
//     <
//     meta charset = "UTF-8" / >
//     <
//     meta name = "viewport"
// content = "width=device-width, initial-scale=1.0" / >
//     <
//     title > WebRTC < /title>

// <
// style type = "text/css" >
//     /* body {
//         margin: 0;
//         font-size: 20px;
//         background-color: #000;
//         color: white;
//         padding: 1rem;
//     }

//     #room-input-box {
//         padding: 9px;
//         border: 1px solid white;
//         outline: none;
//     } */
//     /* .centered {
//         position: absolute;
//         top: 40%;
//         left: 50%;
//         transform: translate(-50%, -50%);
//     } */
//     /* .video-position {
//         position: absolute;
//         top: 35%;
//         left: 50%;
//         transform: translate(-50%, -50%);
//     } */

//     #local - video {
//         /* width: 100px;
//         height: 100px */
//         height: 100 % ;
//         width: 100 % ;
//     }

// #
// remote - video {
//     height: 100 % ;
//     width: 100 % ;
// }

// *
// {
//     padding: 0;
//     margin: 0;
//     font - family: sans - serif;
// }

// body {
//     background: #181818;
//         }

//         main {
//             display: flex;
//             align-items: center;
//             justify-content: space-between;
//         }

//         .movie-screen,
//         .side {
//             height: calc(100vh);
//         }

//         .movie-screen {
//             flex: 3;
//             background-color: # 000;
// }

// .movie - screen header {
//     background: transparent;
//     height: 60 px
// }

// .movie - screen header.logo {
//     color: red;
// }

// .movie - screen.header - wrapper {
//     display: flex;
//     align - items: center;
//     justify - content: space - between;
//     padding: 20 px;
//     height: 100 % ;
//     width: 97 % ;
// }

// .movie - screen.header - wrapper nav {
//     display: flex;
// }

// .movie - screen.header - wrapper nav div {
//     margin: 15 px;
//     cursor: pointer;
// }

// .side {
//     flex: 1;
//     display: flex;
//     flex - direction: column;
//     background: #181818;
//         }

//         .side .top {
//             flex: 2;
//             padding: 10px;
//         }

//         .side .top header {
//             margin: 20px 10px;
//         }

//         .side .top header .header-wrapper {
//             display: flex;
//             align-items: center;
//             justify-content: space-between;
//         }

//         .side .top header .header-wrapper div {
//             background: # 000;
//     color: #fff;
//     font - size: 14 px;
//     padding: 10 px;
//     cursor: pointer;
// }

// .side.top header.header - wrapper div: hover {
//     background: rgb(17, 17, 17);
// }

// .side.top.circle - avatar {
//     background: #000;
//             height: 80px;
//             width: 80px;
//             display: inline-block;
//             margin: 8px;
//             border-radius: 100%;
//             cursor: pointer;
//         }

//         .side .bottom {
//             flex: 3;
//             display: flex;
//             flex-direction: column;
//             justify-content: space-between;
//         }

//         .side .bottom .messages-container {
//             background: rgb(14, 14, 14);
//             flex: 4;
//         }

//         .side .bottom .message-input-container {
//             display: flex;
//             justify-content: space-between;
//             align-items: center;
//             padding: 10px;
//             background: # fff;
// }

// .side.bottom.send - btn {
//     background: red;
//     color: #fff;
//     border - radius: 4 px;
//     font - size: 15 px;
//     height: 100 % ;
//     display: flex;
//     align - items: center;
//     justify - content: center;
//     padding: 0 10 px;
//     margin - left: 10 px;
// }

// .side.bottom.message - input - container input[type = "text"] {
//         flex: 5;
//         border: none;
//         padding: 10 px;
//         outline: none;
//     } <
//     /style> <
//     script src = "https://cdn.jsdelivr.net/npm/vue/dist/vue.js" > < /script> <
//     /head>

// <
// body >
//     <
//     div id = "app" >
//     <
//     div id = "room-selection-container" >
//     <
//     label > Enter the number of the room you want to connect < /label><br><br> <
//     input id = "room-input-box"
// type = "text" / >
//     <
//     button id = "join-button"
// @click = "initApp" > CONNECT < /button>

// <
// /div>

// <!-- <video id="local-video" autoplay="autoplay" muted="true"></video>
// <
// video id = "remote-video"
// autoplay = "autoplay" > < /video> -->

// <
// main >
//     <
//     div class = "movie-screen" >
//     <
//     header >
//     <
//     div class = "header-wrapper" >
//     <
//     div class = "logo" > Virtual < /div>

// <
// nav >
//     <
//     div > < img src = "./assets/mic.svg"
// alt = "" > < /div> <
//     div > < img src = "./assets/video.svg"
// alt = "" > < /div> <
//     div > < img src = "./assets/volume.svg"
// alt = "" > < /div> <
//     div > < img src = "./assets/rotate.svg"
// alt = "" > < /div> <
//     /nav> <
//     /div> <
//     /header>

// <
// video id = "remote-video"
// autoplay = "autoplay" > < /video> <
//     /div>

// <
// div class = "side" >

//     <
//     div class = "top" >

//     <
//     header >
//     <
//     div class = "header-wrapper" >
//     <
//     div v -
//     if = "!isChatsHidden"
// @click = "hideChats" > Hide chats < /div> <
//     div v -
//     if = "isChatsHidden"
// @click = "hideChats" > Show chats < /div> <
//     div > Hide chats < /div> <
//     /div> <
//     /header>


// <
// div class = "circle-avatar" > < /div> <
//     div class = "circle-avatar" > < /div> <
//     div class = "circle-avatar" > < /div> <
//     div class = "circle-avatar" > < /div> <
//     div class = "circle-avatar" > < /div> <
//     div class = "circle-avatar" > < /div> <
//     div class = "circle-avatar" > < /div> <
//     div class = "circle-avatar" > < /div> <
//     div class = "circle-avatar" > < /div> <
//     div class = "circle-avatar" > < /div> <
//     /div>

// <
// div class = "bottom"
// v -
//     if = "!isChatsHidden" >

//     <!-- <video id="remote-video" autoplay="autoplay"></video> -->
//     <
// video id = "local-video"
// autoplay = "autoplay"
// muted = "true" > < /video>

// <!-- <div class="messages-container">


// <
// /div>

// <
// div class = "message-input-container" >
//     <
//     input type = "text"
// placeholder = "Message" >
//     <
//     p class = "send-btn" > SEND < /p> <
//     /div> -->

// <
// /div>

// <
// /div> <
// /main>





// <
// /div> <
// script src = "/socket.io/socket.io.js" > < /script>

// <
// script >
//     const vueApp = new Vue({
//             el: '#app',
//             data: {
//                 isChatsHidden: false,
//                 socketConnections: [],
//                 socket: io(),
//                 localStream: null,

//                 mediaConstraints: {
//                     audio: true,
//                     video: {
//                         width: 1280,
//                         height: 720
//                     },
//                 },

//                 iceServers: {
//                     iceServers: [{
//                         urls: 'stun:stun.l.google.com:19302'
//                     }, {
//                         urls: 'stun:stun1.l.google.com:19302'
//                     }, {
//                         urls: 'stun:stun2.l.google.com:19302'
//                     }, {
//                         urls: 'stun:stun3.l.google.com:19302'
//                     }, {
//                         urls: 'stun:stun4.l.google.com:19302'
//                     }, ],
//                 }
//             },

//             mounted() {


//                 this.socket.on('signal', this.receivedSignal)

//                 this.socket.on('user-left', (id) => {
//                     console.log('user- disconnected', id)
//                 })

//                 this.socket.on('user-join', (id, count, socketClients) => {

//                     console.log('socketClients');

//                     socketClients.forEach((socketListId) => {
//                         if (!this.socketConnections[socketListId]) {
//                             this.socketConnections[socketListId] = new RTCPeerConnection(peerConnectionConfig);


//                             this.socketConnections[socketListId].onicecandidate = function() {
//                                 if (event.candidate != null) {
//                                     console.log('SENDING ICE');
//                                     this.socket.emit('signal', socketListId, JSON.stringify({
//                                         'ice': event.candidate
//                                     }));
//                                 }
//                             }



//                             this.socketConnections[socketListId].onaddstream = function() {
//                                 // gotRemoteStream(event, socketListId)

//                                 console.log('got remote stream');
//                             }

//                             //Add the local video stream
//                             this.socketConnections[socketListId].addStream(localStream);
//                         }
//                     })
//                     if (count >= 2) {
//                         this.socketConnections[id].createOffer().then(function(description) {
//                             this.socketConnections[id].setLocalDescription(description).then(function() {
//                                 console.log(this.socketConnections);
//                                 this.socket.emit('signal', id, JSON.stringify({
//                                     'sdp': this.socketConnections[id].localDescription
//                                 }));
//                             }).catch(e => console.log(e));
//                         });
//                     }
//                 }, )


//             },





//             methods: {
//                 hideChats() {
//                     this.isChatsHidden = !this.isChatsHidden
//                 },

//                 receivedSignal(fromId, message) {

//                     var signal = JSON.parse(message)

//                     //Make sure it's not coming from yourself
//                     if (fromId != socketId) {

//                         if (signal.sdp) {
//                             this.socketConnections[fromId].setRemoteDescription(new RTCSessionDescription(signal.sdp)).then(function() {
//                                 if (signal.sdp.type == 'offer') {
//                                     this.socketConnections[fromId].createAnswer().then(function(description) {
//                                         this.socketConnections[fromId].setLocalDescription(description).then(function() {
//                                             socket.emit('signal', fromId, JSON.stringify({
//                                                 'sdp': this.socketConnections[fromId].localDescription
//                                             }));
//                                         }).catch(e => console.log(e));
//                                     }).catch(e => console.log(e));
//                                 }
//                             }).catch(e => console.log(e));
//                         }

//                         if (signal.ice) {
//                             this.socketConnections[fromId].addIceCandidate(new RTCIceCandidate(signal.ice)).catch(e => console.log(e));
//                         }
//                     }
//                 },

//                 initApp() {





//                     if (navigator.mediaDevices.getUserMedia) {

//                         // show local video stream
//                         this.getLocalStream()

//                     } else {
//                         alert('Browser does not support media devices ')
//                     }

//                 },



//                 async getLocalStream() {

//                     let stream = await navigator.mediaDevices.getUserMedia(this.mediaConstraints)
//                     let localVideo = document.getElementById('local-video')

//                     this.localStream = stream
//                     localVideo.srcObject = stream

//                 },


//             }
//         }) <
//         /script> <
//         /body>

// <
// /html>

// <
// /html>

// <
// /html>

// <
// /html>

// <
// /html>




// <
// !DOCTYPE html >
//     <
//     html lang = "en" >

//     <
//     head >
//     <
//     meta charset = "UTF-8" / >
//     <
//     meta name = "viewport"
// content = "width=device-width, initial-scale=1.0" / >
//     <
//     title > WebRTC < /title>

// <
// style type = "text/css" >
//     /* body {
//         margin: 0;
//         font-size: 20px;
//         background-color: #000;
//         color: white;
//         padding: 1rem;
//     }

//     #room-input-box {
//         padding: 9px;
//         border: 1px solid white;
//         outline: none;
//     } */
//     /* .centered {
//         position: absolute;
//         top: 40%;
//         left: 50%;
//         transform: translate(-50%, -50%);
//     } */
//     /* .video-position {
//         position: absolute;
//         top: 35%;
//         left: 50%;
//         transform: translate(-50%, -50%);
//     } */

//     #local - video {
//         /* width: 100px;
//         height: 100px */
//         height: 100 % ;
//         width: 100 % ;
//     }

// #
// remote - video {
//     height: 100 % ;
//     width: 100 % ;
// }

// *
// {
//     padding: 0;
//     margin: 0;
//     font - family: sans - serif;
// }

// body {
//     background: #181818;
//         }

//         main {
//             display: flex;
//             align-items: center;
//             justify-content: space-between;
//         }

//         .movie-screen,
//         .side {
//             height: calc(100vh);
//         }

//         .movie-screen {
//             flex: 3;
//             background-color: # 000;
// }

// .movie - screen header {
//     background: transparent;
//     height: 60 px
// }

// .movie - screen header.logo {
//     color: red;
// }

// .movie - screen.header - wrapper {
//     display: flex;
//     align - items: center;
//     justify - content: space - between;
//     padding: 20 px;
//     height: 100 % ;
//     width: 97 % ;
// }

// .movie - screen.header - wrapper nav {
//     display: flex;
// }

// .movie - screen.header - wrapper nav div {
//     margin: 15 px;
//     cursor: pointer;
// }

// .side {
//     flex: 1;
//     display: flex;
//     flex - direction: column;
//     background: #181818;
//         }

//         .side .top {
//             flex: 2;
//             padding: 10px;
//         }

//         .side .top header {
//             margin: 20px 10px;
//         }

//         .side .top header .header-wrapper {
//             display: flex;
//             align-items: center;
//             justify-content: space-between;
//         }

//         .side .top header .header-wrapper div {
//             background: # 000;
//     color: #fff;
//     font - size: 14 px;
//     padding: 10 px;
//     cursor: pointer;
// }

// .side.top header.header - wrapper div: hover {
//     background: rgb(17, 17, 17);
// }

// .side.top.circle - avatar {
//     background: #000;
//             height: 80px;
//             width: 80px;
//             display: inline-block;
//             margin: 8px;
//             border-radius: 100%;
//             cursor: pointer;
//         }

//         .side .bottom {
//             flex: 3;
//             display: flex;
//             flex-direction: column;
//             justify-content: space-between;
//         }

//         .side .bottom .messages-container {
//             background: rgb(14, 14, 14);
//             flex: 4;
//         }

//         .side .bottom .message-input-container {
//             display: flex;
//             justify-content: space-between;
//             align-items: center;
//             padding: 10px;
//             background: # fff;
// }

// .side.bottom.send - btn {
//     background: red;
//     color: #fff;
//     border - radius: 4 px;
//     font - size: 15 px;
//     height: 100 % ;
//     display: flex;
//     align - items: center;
//     justify - content: center;
//     padding: 0 10 px;
//     margin - left: 10 px;
// }

// .side.bottom.message - input - container input[type = "text"] {
//         flex: 5;
//         border: none;
//         padding: 10 px;
//         outline: none;
//     } <
//     /style> <
//     script src = "https://cdn.jsdelivr.net/npm/vue/dist/vue.js" > < /script> <
//     /head>

// <
// body >
//     <
//     div id = "app" >
//     <
//     div id = "room-selection-container" >
//     <
//     label > Enter the number of the room you want to connect < /label><br><br> <
//     input id = "room-input-box"
// type = "text" / >
//     <
//     button id = "join-button"
// @click = "initApp" > CONNECT < /button>

// <
// /div>

// <!-- <video id="local-video" autoplay="autoplay" muted="true"></video>
// <
// video id = "remote-video"
// autoplay = "autoplay" > < /video> -->

// <
// main >
//     <
//     div class = "movie-screen" >
//     <
//     header >
//     <
//     div class = "header-wrapper" >
//     <
//     div class = "logo" > Virtual < /div>

// <
// nav >
//     <
//     div > < img src = "./assets/mic.svg"
// alt = "" > < /div> <
//     div > < img src = "./assets/video.svg"
// alt = "" > < /div> <
//     div > < img src = "./assets/volume.svg"
// alt = "" > < /div> <
//     div > < img src = "./assets/rotate.svg"
// alt = "" > < /div> <
//     /nav> <
//     /div> <
//     /header>

// <
// video id = "remote-video"
// autoplay = "autoplay" > < /video> <
//     /div>

// <
// div class = "side" >

//     <
//     div class = "top" >

//     <
//     header >
//     <
//     div class = "header-wrapper" >
//     <
//     div v -
//     if = "!isChatsHidden"
// @click = "hideChats" > Hide chats < /div> <
//     div v -
//     if = "isChatsHidden"
// @click = "hideChats" > Show chats < /div> <
//     div > Hide chats < /div> <
//     /div> <
//     /header>


// <!-- <div class="circle-avatar"></div>
// <
// div class = "circle-avatar" > < /div> <
//     div class = "circle-avatar" > < /div> <
//     div class = "circle-avatar" > < /div> <
//     div class = "circle-avatar" > < /div> <
//     div class = "circle-avatar" > < /div> <
//     div class = "circle-avatar" > < /div> <
//     div class = "circle-avatar" > < /div> <
//     div class = "circle-avatar" > < /div> <
//     div class = "circle-avatar" > < /div> --> <
//     /div>

// <
// div class = "bottom"
// v -
//     if = "!isChatsHidden" >

//     <!-- <video id="remote-video" autoplay="autoplay"></video> -->
//     <
// video id = "local-video"
// autoplay = "autoplay"
// muted = "true" > < /video>

// <!-- <div class="messages-container">


// <
// /div>

// <
// div class = "message-input-container" >
//     <
//     input type = "text"
// placeholder = "Message" >
//     <
//     p class = "send-btn" > SEND < /p> <
//     /div> -->

// <
// /div>

// <
// /div> <
// /main>





// <
// /div> <
// script src = "/socket.io/socket.io.js" > < /script>

// <
// script >
//     const vueApp = new Vue({
//             el: '#app',
//             data: {
//                 isChatsHidden: false,
//                 connections: [],
//                 socket: io(),
//                 localStream: null,
//                 roomId: null,
//                 rtcPeerConnection: null,

//                 mediaConstraints: {
//                     audio: true,
//                     video: {
//                         width: 1280,
//                         height: 720
//                     },
//                 },

//                 iceServers: {
//                     iceServers: [{
//                         urls: 'stun:stun.l.google.com:19302'
//                     }, {
//                         urls: 'stun:stun1.l.google.com:19302'
//                     }, {
//                         urls: 'stun:stun2.l.google.com:19302'
//                     }, {
//                         urls: 'stun:stun3.l.google.com:19302'
//                     }, {
//                         urls: 'stun:stun4.l.google.com:19302'
//                     }, ],
//                 }
//             },

//             mounted() {

//                 this.socket.on('signal', this.receivedSignal);




//                 this.socket.on('call_start', async(room, clientId) => {
//                     console.log('call_start ..client', room, clientId)

//                     this.rtcPeerConnection = new RTCPeerConnection(this.iceServers)

//                     this.addLocalTracks(this.rtcPeerConnection)


//                     this.rtcPeerConnection.ontrack = this.showRemoteStream
//                         // rtcPeerConnection.onicecandidate = sendIceCandidate




//                     this.rtcPeerConnection.onicecandidate = function() {
//                         if (event.candidate != null) {
//                             console.log('SENDING ICE');
//                             this.socket.emit('signal', clientId, JSON.stringify({
//                                 'ice': event.candidate
//                             }));
//                         }
//                     }

//                     let sessionDescription = await this.rtcPeerConnection.createOffer()

//                     this.rtcPeerConnection.setLocalDescription(sessionDescription).then(function() {
//                         console.log('connections');
//                         //     this.socket.emit('signal', id, JSON.stringify({
//                         //         'sdp': this.rtcPeerConnection.localDescription
//                         //     }));
//                     }).catch(e => console.log(e));



//                     // this.rtcPeerConnection.createOffer()
//                     //     .then(function(description) {
//                     //         console.log(description);
//                     //         this.rtcPeerConnection.setLocalDescription(description)

//                     //     });


//                     // //Wait for their video stream
//                     // clientId.onaddstream = (event) => {
//                     //     console.log(event, clientId)
//                     // }

//                     //Add the local video stream
//                     // this.rtcPeerConnection.addTrack(this.localStream);




//                 })



//                 this.socket.on('room_joined_event', async(roomId, clientId) => {
//                     console.log('room_joined_event ..client')

//                     //show local video
//                     await this.showLocalStream()

//                     //emit start call event
//                     //share my video to room

//                     this.socket.emit('start_call', roomId, clientId)
//                         // this.createOffer(this.rtcPeerConnection, clientId);




//                 }, )
//             },





//             methods: {
//                 hideChats() {
//                     this.isChatsHidden = !this.isChatsHidden
//                 },


//                 addLocalTracks(rtcPeerConnection) {
//                     this.localStream.getTracks().forEach((track) => {
//                         rtcPeerConnection.addTrack(track, this.localStream)
//                     })
//                 },


//                 receivedSignal(fromId, message) {

//                     var signal = JSON.parse(message)

//                     console.log('signal', fromId, message);



//                     if (signal.sdp) {
//                         this.rtcPeerConnection.setRemoteDescription(new RTCSessionDescription(signal.sdp)).then(function() {
//                             if (signal.sdp.type == 'offer') {
//                                 this.rtcPeerConnection.createAnswer().then(function(description) {
//                                     console.log(description);
//                                     // this.rtcPeerConnection.setLocalDescription(description).then(function() {
//                                     //     this.socket.emit('signal', fromId, JSON.stringify({
//                                     //         'sdp': this.rtcPeerConnection.localDescription
//                                     //     }));
//                                     // }).catch(e => console.log(e));
//                                 }).catch(e => console.log(e));
//                             }
//                         })
//                     }

//                     if (signal.ice) {
//                         connections[fromId].addIceCandidate(new RTCIceCandidate(signal.ice)).catch(e => console.log(e));
//                     }

//                     // let sessionDescription = await this.rtcPeerConnection.createOffer()

//                     // rtcPeerConnection.setLocalDescription(sessionDescription)

//                     // console.log(roomId);

//                     // socket.emit('webrtc_offer', {
//                     //     type: 'webrtmedia_share_offerc_offer',
//                     //     sdp: sessionDescription,
//                     //     roomId,
//                     // })

//                     console.log('offer creation:', this.rtcPeerConnection)

//                     // let sessionDescription
//                     // try {
//                     //     sessionDescription = await rtcPeerConnection.createOffer()
//                     //     rtcPeerConnection.setLocalDescription(sessionDescription)
//                     // } catch (error) {
//                     //     console.error(error)
//                     // }

//                     // socket.emit('webrtc_offer', {
//                     //     type: 'webrtc_offer',
//                     //     sdp: sessionDescription,
//                     //     roomId,
//                     // })
//                 },

//                 receivedSignal() {
//                     console.log('got signal');
//                 },

//                 // receivedSignal(fromId, message) {

//                 //     var signal = JSON.parse(message)

//                 //     //Make sure it's not coming from yourself
//                 //     if (fromId != socketId) {

//                 //         if (signal.sdp) {
//                 //             this.connections[fromId].setRemoteDescription(new RTCSessionDescription(signal.sdp)).then(function() {
//                 //                 if (signal.sdp.type == 'offer') {
//                 //                     this.connections[fromId].createAnswer().then(function(description) {
//                 //                         this.connections[fromId].setLocalDescription(description).then(function() {
//                 //                             socket.emit('signal', fromId, JSON.stringify({
//                 //                                 'sdp': this.connections[fromId].localDescription
//                 //                             }));
//                 //                         }).catch(e => console.log(e));
//                 //                     }).catch(e => console.log(e));
//                 //                 }
//                 //             }).catch(e => console.log(e));
//                 //         }

//                 //         if (signal.ice) {
//                 //             this.connections[fromId].addIceCandidate(new RTCIceCandidate(signal.ice)).catch(e => console.log(e));
//                 //         }
//                 //     }
//                 // },

//                 initApp() {



//                     if (navigator.mediaDevices.getUserMedia) {

//                         const roomInputBox = document.getElementById('room-input-box')

//                         this.joinRoom(roomInputBox.value)

//                     } else {
//                         alert('Browser does not support media devices ')
//                     }

//                 },


//                 joinRoom(room) {
//                     if (room === '') {
//                         alert('Please type a room ID')
//                     } else {


//                         //set global roomId
//                         roomId = room
//                         this.socket.emit('join', room)

//                     }
//                 },

//                 async showLocalStream() {
//                     let stream = await navigator.mediaDevices.getUserMedia(this.mediaConstraints)
//                     let localVideo = document.getElementById('local-video')


//                     this.localStream = stream
//                     localVideo.srcObject = stream
//                 },
//                 async showRemoteStream(event) {
//                     console.log('remote event', event);
//                     // // let stream = await navigator.mediaDevices.getUserMedia(this.mediaConstraints)
//                     // let remoteVideo = document.getElementById('remote-video')


//                     // this.remoteStream = event
//                     // remoteVideo.srcObject = event
//                 },

//             }
//         }) <
//         /script> <
//         /body>

// <
// /html>

// <
// /html>

// <
// /html>

// <
// /html>

// <
// /html>

// <
// /html>





// const express = require('express')
// const app = express()
// const server = require('http').createServer(app)
// const io = require('socket.io')(server)

// app.use('/', express.static('public'))

// io.on('connection', (socket) => {

//     // // io.sockets.emit('user-join', socket.id);
//     // io.sockets.emit("user-joined", socket.id, io.engine.clientsCount, Object.keys(io.sockets.sockets));

//     socket.on('signal', (toId, message) => {
//         io.to(toId).emit('signal', socket.id, message);
//     });


//     // //when user disconnects
//     // socket.on('disconnect', () => {
//     //     io.sockets.emit("user-left", socket.id);
//     // })


//     // // when server receives message
//     // socket.on('message', () => {
//     //     io.sockets.emit("message", data);
//     //     console.log(data);
//     // })

//     // console.log(socket.id);



//     // console.log('socket connection');

//     socket.on('join', (roomId) => {

//         socket.join(roomId)
//         socket.emit('room_joined_event', roomId, socket.id)

//     })

//     socket.on('start_call', (room, clientId) => {
//         console.log(room);
//         // socket.emit('call_start', Object.keys(io.sockets.sockets), room)
//         // console.log(io.sockets.adapter.rooms[room]);
//         // console.log(Object.keys(socket.adapter.rooms[room]));
//         //broadcast user video to room

//         socket.broadcast.to(room).emit('call_start', room, clientId)
//     })


//     // socket.on('start_call', roomId, Object.keys(io.sockets.sockets)) {

//     //     console.log(` start_call  ${roomId}`)
//     //     socket.broadcast.to(roomId).emit('start_call')

//     // })
//     // socket.on('webrtc_offer', (event) => {

//     //     console.log(`Broadcasting webrtc_offer event to peers in room ${event.roomId}`)
//     //     socket.broadcast.to(event.roomId).emit('webrtc_offer', event.sdp)

//     // })
//     // socket.on('webrtc_answer', (event) => {

//     //     console.log(`Broadcasting webrtc_answer event to peers in room ${event.roomId}`)
//     //     socket.broadcast.to(event.roomId).emit('webrtc_answer', event.sdp)

//     // })
//     // socket.on('webrtc_ice_candidate', (event) => {

//     //     console.log(`Broadcasting webrtc_ice_candidate event to peers in room ${event.roomId}`)
//     //     socket.broadcast.to(event.roomId).emit('webrtc_ice_candidate', event)

//     // })
// })


// const port = process.env.PORT || 3000
// server.listen(port, () => {
//     console.log(`Express server listening on port ${port}`)
// })















// // joinButton.addEventListener('click', () => {
// //     joinRoom(roomInputBox.value)
// // })

// // const roomInputBox = document.getElementById('room-input-box')

// // const roomSelectionContainer = document.getElementById('room-selection-container')

// // let localVideo = document.getElementById('local-video')
// // let remoteVideo = document.getElementById('remote-video')

// // const socket = io()
// // const mediaConstraints = {
// //     audio: true,
// //     video: {
// //         width: 1280,
// //         height: 720
// //     },
// // }
// // let localStream
// // let remoteStream
// // let isRoomCreator
// // let rtcPeerConnection 
// // let roomId
// // let users = []

// // // // Free public STUN servers provided by Google.
// // const iceServers = {
// //     iceServers: [{
// //         urls: 'stun:stun.l.google.com:19302'
// //     }, {
// //         urls: 'stun:stun1.l.google.com:19302'
// //     }, {
// //         urls: 'stun:stun2.l.google.com:19302'
// //     }, {
// //         urls: 'stun:stun3.l.google.com:19302'
// //     }, {
// //         urls: 'stun:stun4.l.google.com:19302'
// //     }, ],
// // }

// // joinButton.addEventListener('click', () => {
// //     joinRoom(roomInputBox.value)
// // })

// // socket.on('room_created_event', async() => {
// //     console.log('room_created_event ..client')
// // })

// // socket.on('room_joined_event', async() => {
// //     console.log('room_joined_event ..client')

// //     //show local video
// //     await showLocalVideo(mediaConstraints)

// //     //emit start call event
// //     socket.emit('start_call', roomId)
// // })

// // // socket.on('full_room', () => {
// // //     console.log('Socket event callback: full_room')

// // //     alert('The room is full, please try another one')
// // // })



// // function joinRoom(room) {

// //     if (room === '') {
// //         alert('Please type a room ID')
// //     } else {

// //         //set global roomId
// //         roomId = room
// //         socket.emit('join', room)

// //         roomSelectionContainer.style.display = "none"

// //     }
// // }


// // async function showLocalVideo(mediaConstraints) {
// //     let stream
// //     try {
// //         stream = await navigator.mediaDevices.getUserMedia(mediaConstraints)
// //     } catch (error) {
// //         console.error('Could not get user media', error)
// //     }

// //     localStream = stream
// //     localVideo.srcObject = stream
// // }


// // socket.on('start_call', async() => {
// //     console.log('start_call ..client')


// //     rtcPeerConnection = new RTCPeerConnection(iceServers)
// //     addLocalTracks(rtcPeerConnection)
// //     rtcPeerConnection.ontrack = showRemoteStream
// //     rtcPeerConnection.onicecandidate = sendIceCandidate
// //     await createOffer(rtcPeerConnection)



// // })



// // socket.on('webrtc_offer', async(event) => {
// //     console.log('Socket event callback: webrtc_offer')

// //     rtcPeerConnection = new RTCPeerConnection(iceServers)
// //     addLocalTracks(rtcPeerConnection)
// //     rtcPeerConnection.ontrack = showRemoteStream
// //     rtcPeerConnection.onicecandidate = sendIceCandidate
// //     rtcPeerConnection.setRemoteDescription(new RTCSessionDescription(event))
// //     await createAnswer(rtcPeerConnection)
// // })

// // socket.on('webrtc_answer', (event) => {
// //     console.log('Socket event callback: webrtc_answer')

// //     rtcPeerConnection.setRemoteDescription(new RTCSessionDescription(event))
// // })

// // socket.on('webrtc_ice_candidate', (event) => {
// //     console.log(' new webrtc_ice_candidate')

// //     // ICE candidate configuration.
// //     var candidate = new RTCIceCandidate({
// //         sdpMLineIndex: event.label,
// //         candidate: event.candidate,
// //     })
// //     rtcPeerConnection.addIceCandidate(candidate)
// // })


// // function addLocalTracks(rtcPeerConnection) {
// //     localStream.getTracks().forEach((track) => {
// //         // console.log(track);
// //         rtcPeerConnection.addTrack(track, localStream)
// //     })
// // }

// // async function createOffer(rtcPeerConnection) {

// //     console.log('offer creation:', rtcPeerConnection);

// //     let sessionDescription
// //     try {
// //         sessionDescription = await rtcPeerConnection.createOffer()
// //         rtcPeerConnection.setLocalDescription(sessionDescription)
// //     } catch (error) {
// //         console.error(error)
// //     }

// socket.emit('webrtc_offer', {
//     type: 'webrtc_offer',
//     sdp: sessionDescription,
//     roomId,
// })
// // }

// // async function createAnswer(rtcPeerConnection) {
// //     let sessionDescription
// //     try {
// //         sessionDescription = await rtcPeerConnection.createAnswer()
// //         rtcPeerConnection.setLocalDescription(sessionDescription)
// //     } catch (error) {
// //         console.error(error)
// //     }

// //     socket.emit('webrtc_answer', {
// //         type: 'webrtc_answer',
// //         sdp: sessionDescription,
// //         roomId,
// //     })
// // }

// // function showRemoteStream(event) {


//     // var vidElement = document.createElement('video');
//     // vidElement.setAttribute('autoplay', '');
//     // vidElement.setAttribute('muted', '');
//     // vidElement.srcObject = event.streams[0];

//     // var vidContainer = document.createElement('div');
//     // vidContainer.setAttribute('id', 'remoteVideo_' + peerUuid);
//     // vidContainer.setAttribute('class', 'videoContainer');
//     // vidContainer.appendChild(vidElement);


// //     // console.log(event.streams.length);
// //     // remoteVideo.srcObject = event.streams[0]
// //     // remoteStream = event.stream
// // }

// // function sendIceCandidate(event) {
// //     if (event.candidate) {
// //         socket.emit('webrtc_ice_candidate', {
// //             roomId,
// //             label: event.candidate.sdpMLineIndex,
// //             candidate: event.candidate.candidate,
// //         })
// //     }
// // }
















// <
// !DOCTYPE html >
//     <
//     html lang = "en" >

//     <
//     head >
//     <
//     meta charset = "UTF-8" / >
//     <
//     meta name = "viewport"
// content = "width=device-width, initial-scale=1.0" / >
//     <
//     title > WebRTC < /title>

// <
// style type = "text/css" > #local - video {
//     height: 100 % ;
//     width: 100 % ;
// }

// #
// remote - video {
//     height: 100 % ;
//     width: 100 % ;
// }

// *
// {
//     padding: 0;
//     margin: 0;
//     font - family: sans - serif;
// } <
// /style> <
// script src = "https://cdn.jsdelivr.net/npm/vue/dist/vue.js" > < /script> <
//     /head>

// <
// body >
//     <
//     div id = "app" >
//     <
//     div id = "room-selection-container" >
//     <
//     label > Enter the number of the room you want to connect < /label><br><br> <
//     input id = "room-input-box"
// type = "text" / >
//     <
//     button id = "join-button"
// @click = "initApp" > CONNECT < /button> <
//     /div>

// <
// div id = "video-grid" > < /div>

// <!-- <video id="remote-video" autoplay="autoplay"></video> -->
// <
// video id = "local-video"
// autoplay = "autoplay"
// muted = "true" > < /video> <
//     /div> <
//     script src = "/socket.io/socket.io.js" > < /script>

// <
// script >
//     const vueApp = new Vue({
//             el: '#app',
//             data: {
//                 isChatsHidden: false,
//                 connections: [],
//                 socket: io(),
//                 localStream: null,
//                 roomId: null,
//                 peerConnection: null,

//                 mediaConstraints: {
//                     audio: true,
//                     video: {
//                         width: 1280,
//                         height: 720
//                     },
//                 },

//                 iceServers: {
//                     iceServers: [{
//                         urls: 'stun:stun.l.google.com:19302'
//                     }, {
//                         urls: 'stun:stun1.l.google.com:19302'
//                     }, {
//                         urls: 'stun:stun2.l.google.com:19302'
//                     }, {
//                         urls: 'stun:stun3.l.google.com:19302'
//                     }, {
//                         urls: 'stun:stun4.l.google.com:19302'
//                     }, ],
//                 }
//             },

//             mounted() {
//                 this.socket.on('user-joined-room', () => {
//                     //emit start call event
//                     this.socket.emit('start-call', this.roomId)

//                 })





//                 this.socket.on('start-call', async() => {

//                     console.log('start call');

//                     this.peerConnection = new RTCPeerConnection(this.iceServers)

//                     this.addLocalTracks(this.peerConnection)

//                     this.peerConnection.ontrack = this.addRemoteStream

//                     this.peerConnection.onicecandidate = this.addIceCandidate

//                     await this.createRtcOffer(this.peerConnection)

//                 })

//                 this.socket.on('answer', (event) => {

//                     console.log('answer', event);

//                     this.peerConnection = new RTCPeerConnection(this.iceServers)

//                     rtcConnection.setRemoteDescription(new RTCSessionDescription(event))
//                 })



//                 // offer event
//                 this.socket.on('offer', async(event) => {

//                     console.log('offer', event);

//                     this.peerConnection = new RTCPeerConnection(this.iceServers)

//                     this.addLocalTracks(this.peerConnection)

//                     this.peerConnection.ontrack = this.addRemoteStream

//                     this.peerConnection.onicecandidate = this.addIceCandidate

//                     this.peerConnection.setRemoteDescription(new RTCSessionDescription(event))

//                     await this.createRtcAnswer(this.peerConnection)

//                 })

//                 this.socket.on('ice-candidate', event => {

//                     console.log('new ice candidate');

//                     this.peerConnection = new RTCPeerConnection(this.iceServers)

//                     // configure ICE candidates.
//                     var candidate = new RTCIceCandidate({
//                         sdpMLineIndex: event.label,
//                         candidate: event.candidate,
//                     })

//                     this.peerConnection.addIceCandidate(candidate)


//                 })

//             },

//             methods: {
//                 initApp() {

//                     let roomIdElement = document.getElementById('room-input-box')
//                     let room = roomIdElement.value
//                     this.roomId = room

//                     // emit socket room join event
//                     this.socket.emit('join', this.roomId)

//                     // show my local video
//                     this.showLocalVideo()

//                 },

//                 addLocalTracks(rtcConnection) {

//                     this.localStream.getTracks().forEach((track) => {

//                         rtcConnection.addTrack(track, this.localStream)

//                     });



//                 },

//                 //create RTC offer
//                 async createRtcOffer(rtcConnection) {


//                     let sessionDescription = await rtcConnection.createOffer();
//                     let room = this.roomId

//                     rtcConnection.setLocalDescription(sessionDescription);

//                     this.socket.emit('offer', {
//                         type: 'rtc_offer',
//                         sdp: sessionDescription,
//                         room,
//                     })

//                 },

//                 //create RTC answer
//                 async createRtcAnswer() {

//                     let sessionDescription = await rtcConnection.createAnswer();
//                     let room = this.roomId

//                     rtcConnection.setLocalDescription(sessionDescription);

//                     this.socket.emit('answer', {
//                         type: 'rtc_offer',
//                         sdp: sessionDescription,
//                         room,
//                     })

//                 },

//                 //send ICE candidate
//                 addIceCandidate(event) {

//                     let roomId = this.roomId

//                     if (event.candidate) {
//                         this.socket.emit('ice-candidate', {
//                             roomId,
//                             label: event.candidate.sdpMLineIndex,
//                             candidate: event.candidate.candidate,
//                         })
//                     }
//                 },

//                 // set remote Stream
//                 addRemoteStream(event) {

//                     this.remoteStream = event.stream

//                     alert('remote stream', event.stream);

//                 },



//                 //show local stream
//                 showLocalVideo() {

//                     navigator.mediaDevices.getUserMedia(this.mediaConstraints).then(stream => {


//                         //add local stream
//                         this.localStream = stream

//                         //add video element src
//                         let localVideoElement = document.getElementById('local-video');
//                         localVideoElement.srcObject = stream


//                     })


//                 }
//             }
//         }, ) <
//         /script> <
//         /body>

// <
// /html>

// <
// /html>