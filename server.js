var express = require('express');
var app = express();

var connections = [];

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

var server = app.listen(3000, function () {
  console.log("Express server is up on port 3000");
});
var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {

  socket.once('disconnect', function () {
    connections.splice(connections.indexOf(socket),1);
    socket.disconnect(); // So that the server too disconnectes
    console.log("Disconnected socket : " + socket.id);
    console.log("Remaining sockets: " + connections.length);
  });

	connections.push(socket);
  console.log("Current sockets: " + connections.length);
});
