var app = require('express')()
var server = require('http').Server(app)
var io = require('socket.io')(server)

var count = 0;

app.get('/', function(request, response){
    
    response.sendFile('/var/www/Socket/index.html')
    
})

io.on('connection', function(data) {
  
    //console.log("Connection");
    count++;
    data.send(count + " active sockets");
    
})
server.listen(4000, function(req,res){
    console.log('Catch the action at localhost:4000');
});
