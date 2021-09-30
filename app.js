const express = require('express');
const morgan = require('morgan');
const app = express();
const views = require('./views');
const layout = require('./views/layout.js');

const { db } = require('./models');

app.use('/', (req, res) => {
    res.send(layout(''));
})

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })



const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
