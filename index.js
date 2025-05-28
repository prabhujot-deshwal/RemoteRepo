const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

let sweets = ['Ladoo', 'Barfi', 'Gulab Jamun'];

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/sweets', (req, res) => {
  res.render('sweets', { sweets });
});

app.post('/add', (req, res) => {
  const sweet = req.body.sweet;
  if (sweet) sweets.push(sweet);
  res.redirect('/sweets');
});

module.exports = app;
