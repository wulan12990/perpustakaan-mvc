const express = require('express');
const app = express();
const pageRoutes = require('./routes/page.routes');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use('/', pageRoutes);

app.use((req, res) => {
  res.status(404).send('<h1>404</h1><p>Halaman tidak ditemukan.</p>');
});

app.listen(3001, (err) => {
  if (err) throw err;
  console.log('Perpustakaan aktif di http://localhost:3001');
});