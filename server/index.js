const express = require('express');
const socketio = require('socket.io');
const http = require('http');

//fist part for deloy later
const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

//run the server
server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));