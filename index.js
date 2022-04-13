const http = require('http')

const server = http.createServer((req, res) => {
  console.log(`Page URL is ${req.url}`);
  res.writeHead(200, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end('Hello, Pedro !')
})

server.listen(3000, '192.168.0.102')
console.log('We are listetning port 3000');