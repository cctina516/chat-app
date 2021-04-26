const express = require('express');
const socketio = require('socket.io');
const http = require('http');

//fist part for deloy later
const PORT = process.env.PORT || 5000;

//get router from router file
const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) =>{
    console.log('We have a new connection!!!');

    socket.on('disconnect', () =>{
        console.log('User left!!!');
    })
});

//call router as a middleware
app.use(router);

//run the server
server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));