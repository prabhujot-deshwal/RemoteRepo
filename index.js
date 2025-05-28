const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.render('index', { name: 'Prabhujot' });
});

app.post('/greet', (req, res) => {
  const name = req.body.name;
  res.send(`Hello, ${name}!`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
