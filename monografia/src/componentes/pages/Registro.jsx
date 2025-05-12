import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaUser, FaLock } from 'react-icons/fa';
import '../css/Login.css';
import { Link } from 'react-router-dom';

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [matricula, setMatricula] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const navigate = useNavigate();

  const especialidades = [
    "Engenharia de Electronica","ECP","Administracao",  
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/register', {
        fullName, email, password, matricula, especialidade,
      });

      if (response.data.success) {
        alert("Registro realizado com sucesso!"); navigate("/login");
      } else {
        alert("Erro ao registrar: " + response.data.message);
      }
    } catch (error) { console.error("Erro ao registrar:", error); alert("Erro ao tentar registrar.");
    }
  };

  return (
    <div className="formulario">
      <form onSubmit={handleSubmit}>
        <h1>Registro de Estudante</h1>

        <div className="input-container">
          <input type="text" placeholder="Nome completo" required value={fullName} onChange={(e) => setFullName(e.target.value)} /> <FaUser className="icon" />
        </div>

        <div className="input-container">
          <input type="email" placeholder="E-mail" required value={email} onChange={(e) => setEmail(e.target.value)} /><FaUser className="icon" />
        </div>

        <div className="input-container">
          <input type="password" placeholder="Senha" required value={password} onChange={(e) => setPassword(e.target.value)} /> <FaLock className="icon" />
        </div>

        <div className="input-container">
          <input type="text" placeholder="Matrícula" required value={matricula} onChange={(e) => setMatricula(e.target.value)} /><FaUser className="icon" />
        </div>

        <div className="input-container">
          <select required value={especialidade} onChange={(e) => setEspecialidade(e.target.value)}>
            <option value="">Selecione sua especialidade</option>
            {especialidades.map((curso) => (
              <option key={curso} value={curso}>{curso}</option>
            ))}
          </select>
        </div>

        <button type="submit">Registrar</button>

        <div className="signup-link">
            <p>
            Já tem uma conta? <Link to="/login">Entrar</Link>
            </p>
        </div>
      </form>
    </div>
  );
};

export default Register;

