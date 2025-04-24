const express = require('express');
const app = express();
const birthdaysRoutes = require('./routes/birthdays');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));
app.use('/birthdays', birthdaysRoutes);

app.use(express.json());

app.get('/', (req, res) => {
  res.redirect('/birthdays');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});