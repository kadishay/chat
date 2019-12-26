var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(5000);

let id = 0;
const chatLog = [];

io.set('origins', '*:*');
io.on('connection', function (socket) {
    socket.emit('message_client', chatLog);

    socket.on('message_server', function (data) {
      chatLog.push({message: data.message, from:data.user, id:++id});
      socket.emit('message_client', chatLog);
      socket.broadcast.emit('message_client', chatLog);
    });
});