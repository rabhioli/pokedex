const express = require('express');
const app = express();
const path = require('path');
const drinks = require('./models/drinks');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/drinks', (req, res) => {
  res.render('index', { drinks: drinks }); // Pass drinks data to index.ejs
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
