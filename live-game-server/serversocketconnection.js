// import 'socket.io/socket.io.js'


var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  // res.sendFile(__dirname + '../public/index.html');
  // res.sendFile(__dirname + '/public/index.html');
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



// export default function test(){
//     const a = [1,2,3,4,5,6]
//     a.forEach(m => console.log(m)) 
// }

// export default class Media{
// 	constructor(title, duration, isPlaying = false){
// 		this.title = title;
// 		this.duration = duration;
// 		this.isPlaying = isPlaying;
// 		console.log("Media is playing","title",title,"duration",duration,"isPlaying",isPlaying);
// 	}

// 	start(){
// 		this.isPlaying = 'true';
// 		console.log("starting");
// 	}

// 	stop(){
// 		this.isPlaying = 'false';
// 		console.log("stopping");
// 	}

// }