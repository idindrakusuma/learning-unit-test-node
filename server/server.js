const express = require('express');

var app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
  res.send([
    {
      id: 1,
      name: 'Indra Kusuma',
      email: 'id.indrakusuma@gmail.com'
    },
    {
      id: 2,
      name: 'Dinda XSD',
      email: 'dindaxsd@gmail.com'
    },
  ])
})

app.listen(PORT, () => {
  console.log(`Listening server on Port: ${PORT}`)
})

module.exports.app = app;