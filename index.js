var txt = "2137"
const express = require('express'),
http = require('http'),
app = express(),
server = http.createServer(app),
io = require('socket.io').listen(server);
app.get('/', (req, res) => {
res.send('Chat Server is running on port 2137')
});
io.on('connection', (socket) => {



socket.on('join', function(userNickname) {

        //console log
        console.log("user has joined the chat");

        //text on join
        let  message = {"message":"txt: "+ "dołączył(a) do serwera! Uważaj!"}
        io.emit('message', message);

        //restore message to user who's joined
        message = {"message":txt}
        io.emit('message', message);
    })


socket.on('messagedetection', (senderNickname,messageContent) => {

       //log the message in console

       console.log(messageContent)

      //create a message object

      let  message = {"message":messageContent}
      io.emit('message', message )
      txt = messageContent;

      })

})

server.listen(2137,()=>{

console.log('Node app is running on port 2137')

})
