// backend/index.js
const express = require('express');
const cors = require('cors');
const sequelize = require('./config');
const userRoutes = require('./routes/user');

//  IMPORTACAO DOS MODELOS 
const Usuario = require('./models/User');
const Estudante = require('./models/Estudante');
const Orientador = require('./models/Orientador');
const Comissao = require('./models/ComissaoCientifica');

const app = express();

// MIDDLEWARES
app.use(cors());
app.use(express.json());

// ROTAS 
app.use('/api', userRoutes);

// SYNCRONIZACAO DO BANCO
sequelize.sync({ alter: true })
  .then(() => {
    console.log(' Banco sincronizado com sucesso');
    app.listen(5000, () => {
      console.log('Servidor rodando na porta 5000');
    });
  })
  .catch((err) => {
    console.error(' Erro ao sincronizar com o banco:', err);
  });

