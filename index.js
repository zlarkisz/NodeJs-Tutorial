const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)

app.get('/', (request, respons) => {
  respons.sendFile(__dirname + '/index.html')
})

users = []
connetctions = []

io.on('connection', (socket) => {
  console.log('connection success');
  connetctions.push(socket)

  socket.on('disconnect', (data) => {
    connetctions.splice(connetctions.indexOf(socket), 1)
    console.log('disconnection success');
  })

  socket.on('send message', data => {
    io.emit('add mess', {
      mess: data.mess,
      name: data.name,
      class: data.className
    })
  })
})

server.listen(3000)