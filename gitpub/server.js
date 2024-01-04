const express = require('express');
const app = express();
const drinks = require('./models/drinks'); 
app.get('/drinks', (req, res) => {
  res.send(drinks);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
