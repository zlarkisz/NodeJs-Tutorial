const fs = require('fs')
const http = require('http')

const server = http.createServer((req, res) => {
  console.log(`Request url: ${req.url}`);
  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });

  const obj = {
    model: 'Audi',
    speed: '234.5',
    wheels: 4
  }

  res.end(JSON.stringify(obj))
  // res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  // const myReadShort = fs.createReadStream(__dirname + '/index.html')
})

server.listen(3000, '192.168.0.102')
console.log('We are listening 3000 port');