const fs = require('fs')

// connect to local servre
const http = require('http')

const server = http.createServer((req, res) => {
  console.log(`Request url: ${req.url}`);

  if (req.url === '/index' || req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    fs.createReadStream(__dirname + '/index.html').pipe(res)
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    fs.createReadStream(__dirname + '/about.html').pipe(res)
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    fs.createReadStream(__dirname + '/404.html').pipe(res)
  }
})

server.listen(3000, '192.168.0.102')
console.log('We are listening 3000 port');