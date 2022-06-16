const server= require('http').createServer()
const io= require('socket.io')(server,{
    cors:{
          orgin:"http://localhost:8000",
          methods:["GET","POST"]
    }
});
io.on("connection", (socket) => {
    socket.emit("hello", "world");
    socket.on("play",index =>{
        console.log("serevr recived",index)
        socket.broadcast.emit("play",index)
    })
  })
  server.listen(3000)