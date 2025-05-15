// backend/index.js
const express = require('express');
const cors = require('cors');
const sequelize = require('./config');
const userRoutes = require('./routes/user');

// IMPORTA os modelos antes de sync
require('./models/User'); // Importante! Sem isso, o Sequelize não "vê" os modelos

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', userRoutes);

// SINCRONIZA COM ALTER
sequelize.sync({ alter: true }).then(() => {
  app.listen(5000, () => {
    console.log('Servidor rodando na porta 5000');
  });
}).catch((err) => {
  console.error('Erro ao sincronizar com o banco:', err);
});
