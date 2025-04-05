const express = require('express');
const connectDB = require('./config/db');
const app = express();

connectDB();

app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));

app.get('/', (req, res) => {
  res.send('Bienvenue sur le Backend de E-Africa');
});

app.listen(3000, () => {
  console.log('Serveur démarré sur http://localhost:3000');
});