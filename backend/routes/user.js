// backend/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Rota de registro (já existente)
router.post('/users', async (req, res) => {
  const { email, senha, tipoUsuario } = req.body;
  try {
    const user = await User.create({ email, senha, tipoUsuario });
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao criar usuário', error: err });
  }
});

// Rota para listar usuários (já existente)
router.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

// ✅ NOVA ROTA DE LOGIN
router.post('/login', async (req, res) => {
  const { email, password, tipoUsuario } = req.body;

  try {
    // Procura usuário com email fornecido
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ success: false, message: 'Usuário não encontrado' });
    }

    // Comparação simples de senha (sem hash ainda)
    if (user.senha !== password) {
      return res.status(401).json({ success: false, message: 'Senha incorreta' });
    }

    // Se tudo ok, retorna sucesso
    res.json({ success: true, message: 'Login bem-sucedido', user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Erro no servidor' });
  }
});

module.exports = router;
