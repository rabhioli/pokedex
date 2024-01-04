const express = require('express');
const app = express();
const path = require('path');
const drinks = require('./models/drinks');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/drinks', (req, res) => {
  res.render('index', { drinks: drinks });
});

// New route for /drinks/:id
app.get('/drinks/:id', (req, res) => {
  res.send(req.params.id); // Sends the id back as a response
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
