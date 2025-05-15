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

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email: username, 
        password: password,
        tipoUsuario: tipoUsuario
      });

      console.log('Dadoss response ' +response)
      if (response.data.success) {
      console.log("Login realizado com sucesso!");
            if (tipoUsuario == 'Estudante') {
              console.log('Tipo usuario '+ tipoUsuario);   
              navigate('/dashboard');

                } else if (tipoUsuario == 'Orientador'){ 
                  console.log('Tipo usuario '+ tipoUsuario); 
                  navigate('/orientador');
                } else if (tipoUsuario == 'Comissao_cientifica'){
                  console.log('Tipo usuario ' + tipoUsuario); 
                  navigate('/comissao');
                } else{
                  alert('Erro de login if interior')
                } }
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

        <select name="tipoUsuario" required value={tipoUsuario} onChange={(e) => settipoUsuario(e.target.value)}>
            <option value="">Selecione o tipo de usuario</option>
            <option value="Estudante">Estudante</option>
            <option value="Orientador">Orientador</option>
            <option value="Comissao_cientifica">Comissao cientifica</option>
        </select>

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
