const express = require('express');
const app = express();
const path = require('path'); // Require the 'path' module
const drinks = require('./models/drinks'); // Assuming 'drinks.js' is in the 'models' folder

// Set 'views' directory for your views
app.set('views', path.join(__dirname, 'views'));
// Set view engine as EJS
app.set('view engine', 'ejs');

app.get('/drinks', (req, res) => {
  res.render('index'); // Render 'index.ejs' when '/drinks' is accessed
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
