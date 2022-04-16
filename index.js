const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/news/:id', (req, res) => {
  const obj = {
    title: 'News',
    id: 4,
    paragraphs: ['Paragraph', 'Default text', 'Some numbers; 1, 45, 1313.17', 99]
  };
  res.render('news', { newsId: req.params.id, newParam: 234, obj })
})

app.listen(3000)