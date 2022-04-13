const fs = require('fs')

fs.readFile('text.txt', 'utf8', (err, data) => {
  console.log(data);
})

fs.writeFile('some.txt', 'Hi it is me from writeFile !', (err, data) => {})

console.log('Test');