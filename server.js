const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

app.use('/', express.static('public'))

let users = {}
let room = {}

io.on('connection', (socket) => {

    users[socket.id] = socket

    socket.on('join-room', roomId => {

        for (let user in users) {
            if (user === socket.id) {
                users[user].join(roomId)

                users[user].broadcast.to(roomId).emit('init-receive', socket.id)
            }
        }
    })

    socket.on('signal', data => {

        console.log(`signal from ${data.socketId}`);

        if (!users[data.socketId]) return

        users[data.socketId].emit('signal', { socketId: socket.id, signal: data.signal })

    })

    socket.on('sent-message', (message, roomId) => {

        socket.nsp.to(roomId).emit('got-message', message)

    })

    socket.on('init-send', socketId => {

        console.log(`init-send by ${socket.id} to ${socketId}`);

        users[socketId].emit('init-send', socket.id)

    })

    socket.on('disconnect', () => {
        console.log('socket disconnected ' + socket.id)

        socket.broadcast.emit('remove-user', socket.id)
        delete users[socket.id]
    })

    socket.on('remove-video', () => {
        console.log('user-remove-video ' + socket.id)

        socket.broadcast.emit('user-remove-video', socket.id)
    })

    socket.on('remove-audio', () => {
        console.log('user-remove-audio ' + socket.id)

        socket.broadcast.emit('user-remove-audio', socket.id)
    })

    socket.on('share-screen', roomId => {
        console.log('share-screen ' + roomId)

        socket.socket.id.reconnect();

        socket.broadcast.to(roomId).emit('got-share-screen', socket.id)
    })

})


const port = process.env.PORT || 2012
server.listen(port, () => {
    console.log(`Express server listening on port ${port}`)
})