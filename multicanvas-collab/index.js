var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  
  io.emit('connection msg', 'user connected');
  
  // socket.on('draw', function(rObj){
  // 	// console.log("pushDrawing "+rObj);
  //   io.emit('draw', rObj);
  // });

  // socket.on('do draw',function(rObj){
		
  // });

  socket.on('passRectData', function(rObj){
  	io.emit('draw', rObj);
  })
  
  socket.on('disconnect', function(){
  	io.emit('connection msg', 'user disconnect');
  });

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});