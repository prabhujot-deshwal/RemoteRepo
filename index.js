const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Setup
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Sample sweet data
let sweets = ['Ladoo', 'Barfi', 'Gulab Jamun'];

// Routes
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

app.listen(3000, () => {
  console.log('Sweet shop running at http://localhost:3000');
});
