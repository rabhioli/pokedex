const express = require('express');
const app = express();
const path = require('path');
const drinksData = require('./models/drinks');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/drinks', (req, res) => {
  res.render('index', { drinks: drinksData });
});

app.get('/drinks/:id', (req, res) => {
  const drinkId = req.params.id;
  const drinks = drinksData.map(drink => {
    return {
      ...drink,
      image: drink.image + '.png'
    };
  });

  res.render('show', { drinks, drinkId });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
