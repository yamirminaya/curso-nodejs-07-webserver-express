const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales', function (err) {
  console.log(err);
});
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('home', {
    name: 'YAMIR',
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

// app.get('/data', function (req, res) {
//   res.send('Hello DATA');
// });

app.listen(port, () => {
  console.log(`Escuchando peticiones puerto ${port}`);
});
