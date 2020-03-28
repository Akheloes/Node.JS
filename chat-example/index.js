var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){ // responds to the get request
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){ // listener to the front-end socket emit message - 2
    let processedMsg = msg + ' [2 - back on]';
    io.emit('chat message', processedMsg + ' [3 - back emit]'); // sends event to the frontend - 3
  }); 
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
