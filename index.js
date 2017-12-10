var app = require('express')()
var server = require('http').Server(app)
var io = require('socket.io')(server)

var count = 0;

app.get('/', function(request, response){
    
    response.sendFile('/var/www/Socket/index.html')
    
})

io.on('connection', function(socket) {
  
    //console.log("Connection");
    count++;
    //data.send(count + " active sockets");
    io.sockets.emit('broadcast', count)
    
    
    socket.on('disconnect', function(data){
        //data.send("User disconnected. " + count + "Users");
        count--;
        io.sockets.emit('broadcast', count)
    })
    
})

server.listen(5000, function(req,res){
    console.log('Catch the action at localhost:5000');
});
