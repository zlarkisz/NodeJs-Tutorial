const fs = require('fs')

const myReadShort = fs.createReadStream(__dirname + '/article.txt')
let myWriteShort = fs.createWriteStream(__dirname + '/news.txt')

myReadShort.on('data', (chunk) => {
  console.log('Got new data');

  myWriteShort.write(chunk)
})