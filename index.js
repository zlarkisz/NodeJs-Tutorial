const fs = require('fs')

fs.unlink('./new-one/some_new.txt', () => {})

fs.rmdir('new-one', () => {})

// fs.mkdir('new-one', () => {
//   fs.writeFile('./new-one/some_new.txt', 'Wrote text for some_new.txt file', () => {
//     console.log('Everithing worked');
//   })
// })