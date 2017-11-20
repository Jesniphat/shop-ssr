var express = require('express');
var app = express();
var router = express.Router();
var server = require('http').createServer(app);
var io = require('socket.io')(server, {
  serveClient: false,
  wsEngine: 'ws' // uws is not supported since it is a native module
});

router.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

server.listen(8880, function(){
  console.log('socket run on *:8880');
});

// socket io
io.on('connection', function (socket) {
  // console.log('User connected');
  socket.on('disconnect', function() {
    // console.log('User disconnected');
  });
  socket.on('save-message', function (data) {
    // console.log('socket = ', data);
    io.emit(data.logindata.type, { loginData: data.logindata, message: data.message });
  });
});

module.exports = router;