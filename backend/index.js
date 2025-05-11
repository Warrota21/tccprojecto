// backend/index.js
const express = require('express');
const cors = require('cors');
const sequelize = require('./config');
const userRoutes = require('./routes/user');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', userRoutes);

sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log('Servidor rodando na porta 5000');
  });
});
