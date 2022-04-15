const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('This is HOME page`')
})

app.get('/news', (req, res) => {
  res.send('This is NEWS page')
})

app.get('/news/:id/:name', (req, res) => {
  res.send(`ID is: ${req.params.id} ${req.params.name}`)
})

app.listen(3000)