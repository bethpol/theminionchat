var express = require('express')
var socket = require('socket.io')

var app = express()
var server = app.listen(8000, () => {
  console.log("Listening on port 8000.")
})

app.use(express.static('public'))

var io = socket(server)

io.on('connection', (socket) => {
  console.log("Connection successful.", socket.id)
  
  socket.on("chat", (data) => {
    io.sockets.emit("chat", data)
  })
  
})
