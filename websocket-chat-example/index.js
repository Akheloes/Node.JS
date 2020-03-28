const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();

//initialize a simple http server
const server = http.createServer(app);

//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });
var port = process.env.PORT || 3001;

app.get('/', function(req, res){ // responds to the get request
  res.sendFile(__dirname + '/index.html');
});

wss.on('connection', (ws) => {

  ws.on('message', (msg) => {
      let processedMsg = msg + ' [2 - back on]';
      ws.send(processedMsg + ' [3 - back send]'); // sends message to the frontend - 3
  });
});

server.listen(port, () => {
  console.log(`Server started on port ${server.address().port}`);
});