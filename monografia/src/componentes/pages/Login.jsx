// src/pages/Login.jsx
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaUser, FaLock } from 'react-icons/fa';
import '../css/Login.css';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [tipoUsuario, settipoUsuario] =useState("");
  const navigate = useNavigate();

  //Funcao para login
  const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const response = await axios.post('http://localhost:5000/api/login', {
      email: username,
      password: password
    });

    console.log('Resposta:', response.data);

    if (response.data.success) {
      const tipo = response.data.tipoUsuario;

      console.log("Login realizado com sucesso! Tipo:", tipo);

      if (tipo === 'Estudante') {
        navigate('/dashboard');
      } else if (tipo === 'Orientador') {
        navigate('/orientador');
      } else if (tipo === 'Comissao') {
        navigate('/comissao');
      } else {
        alert("Tipo de usuário desconhecido.");
      }
    } else {
      alert("Credenciais inválidas.");
    }
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    alert("Erro ao tentar fazer login.");
  }
};

  
  return (
    <div className="formulario">
      <form onSubmit={handleSubmit}>
        <h1>Sistema de Gestão de TCC</h1>

        <div className="input-container">
          <input type="email" name="email" placeholder="E-mail" required value={username} onChange={(e) => setUsername(e.target.value)}/> <FaUser className="icon" />
        </div>

        <div className="input-container">
          <input type="password" name="password" placeholder="Senha" required value={password}  onChange={(e) => setPassword(e.target.value)}/> <FaLock className="icon" />
        </div>

  
        <div className="recall-forget">
          <label>
            <input type="checkbox" />  Lembre de mim
          </label> 
          <a href="#">Esqueceu a senha?</a>
        </div>

        <button type="submit">Entrar</button>

        <div className="signup-link">
            <p>
    Não tem uma conta? <Link to="/Registro">Registrar</Link>
            </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
