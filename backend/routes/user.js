// backend/routes/userRoutes.js
const express = require('express');
const bcrypt = require('bcryptjs'); 
const Usuario = require('../models/User');
const Estudante = require('../models/Estudante');
const Orientador = require('../models/Orientador');
const Comissao = require('../models/ComissaoCientifica');
const router = express.Router();


// Rota para Login
router.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await Usuario.findOne({ where: { email } });

    if (!usuario) {
      return res.status(401).json({ success: false, message: "Usuario nao encontrado" });
    }
    const senhaValida = await bcrypt.compare(senha, usuario.senha); 

    if (!senhaValida) {
      return res.status(401).json({ success: false, message: "Senha incorreta" });
    }
    return res.json({
      success: true,
      tipoUsuario: usuario.tipoUsuario
    });

  } catch (error) {
    console.error("Erro ao fazer login:", error);
    return res.status(500).json({ success: false, message: "Erro interno no servidor" });
  }
});


// Rota para registrar usuario
router.post('/registrar', async (req, res) => {
  try {
    const { nome, email, senha, tipoUsuario, ...dadosEspecificos } = req.body;
    const hashedPassword = await bcrypt.hash(senha, 10);

    const usuario = await Usuario.create({ nome, email, senha: hashedPassword, tipoUsuario });

    if (tipoUsuario === 'Estudante') {
      await Estudante.create({ 
        numeroEstudante: dadosEspecificos.numeroEstudante,
        classe: dadosEspecificos.classe,
        usuarioId: usuario.id 
      });
    } else if (tipoUsuario === 'Orientador') {
      await Orientador.create({ 
        disciplina: dadosEspecificos.disciplina,
        areaFormacao: dadosEspecificos.areaFormacao,
        interno: dadosEspecificos.interno,
        usuarioId: usuario.id 
      });
    } else if (tipoUsuario === 'Comissao') {
      await Comissao.create({ 
        curso: dadosEspecificos.curso,
        interno: dadosEspecificos.interno,
        usuarioId: usuario.id 
      });
    }

    res.status(201).json({ success: true, message: 'Usuario registrado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Erro ao registrar usuario' });
  }
});


// GET: Buscar todos os usuarios
router.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar usuarios.' });
  }
});


// GET: Buscar um usuario por ID com dados especificos
router.get('/usuarios/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findByPk(id, {
      include: [Estudante, Orientador, ComissaoCientifica]
    });
    if (!usuario) return res.status(404).json({ error: 'Usuario nao encontrado.' });
    res.json(usuario);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar usuario.' });
  }
});


// PUT: Atualizar dados de um usuario
router.put('/usuarios/:id', async (req, res) => {
  const { id } = req.params;
  const dadosAtualizados = req.body;
  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) return res.status(404).json({ error: 'Usuario nao encontrado.' });

    await usuario.update(dadosAtualizados);

    // Atualizar dados especificos, se houver
    if (usuario.tipoUsuario === 'Estudante') {
      const estudante = await Estudante.findOne({ where: { UsuarioId: id } });
      if (estudante) await estudante.update(dadosAtualizados);
    } else if (usuario.tipoUsuario === 'Orientador') {
      const orientador = await Orientador.findOne({ where: { UsuarioId: id } });
      if (orientador) await orientador.update(dadosAtualizados);
    } else if (usuario.tipoUsuario === 'Comissao_cientifica') {
      const comissao = await ComissaoCientifica.findOne({ where: { UsuarioId: id } });
      if (comissao) await comissao.update(dadosAtualizados);
    }

    res.json({ message: 'Usuario atualizado com sucesso.' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar usuario.' });
  }
});


// DELETE: Deletar um usuario e os dados relacionados
router.delete('/usuarios/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) return res.status(404).json({ error: 'Usuario nao encontrado.' });

    // Deletar dados relacionados primeiro
    if (usuario.tipoUsuario === 'Estudante') {
      await Estudante.destroy({ where: { UsuarioId: id } });
    } else if (usuario.tipoUsuario === 'Orientador') {
      await Orientador.destroy({ where: { UsuarioId: id } });
    } else if (usuario.tipoUsuario === 'Comissao_cientifica') {
      await ComissaoCientifica.destroy({ where: { UsuarioId: id } });
    }

    // Depois deletar o usuário
    await usuario.destroy();
    res.json({ message: 'Usuario excluido com sucesso.' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar usuario.' });
  }
});

module.exports = router;
