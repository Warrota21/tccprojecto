import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { FaUser, FaLock, FaEnvelope, FaPhoneAlt, FaBuilding } from 'react-icons/fa'; // Novos ícones importados
import '../css/Registro.css';

const Registro = () => {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [idEstudante, setIdEstudante] = useState('');
  const [contacto, setContacto] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('Estudante'); // Padrao
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/registrar', {

                      nome: nomeCompleto,
                      email,
                      senha: password,
                      tipoUsuario,
                      ...(tipoUsuario === 'Estudante' && {
                        numeroEstudante: idEstudante,
                        classe: especialidade
                      }),
                      ...(tipoUsuario === 'Orientador' && {
                        disciplina: especialidade,
                        areaFormacao: departamento,
                        interno: true // ou false, conforme logica
                      }),
                      ...(tipoUsuario === 'Comissao' && {
                        curso: especialidade,
                        interno: false // ou true
                      })
                    });

      if (response.data.success) {
        alert('Registro realizado com sucesso!'); navigate('/login');
      } else {
        alert('Erro no registro: ' + response.data.message);
      }
    } catch (error) {console.error('Erro ao registrar:', error); alert('Erro ao tentar registrar.');
    }
  };
  return (
    <div className="formulario">
      <form onSubmit={handleSubmit}>
        <h1>Cadastro</h1>

        <div className="input-container">
          <h2> Selecione o usuario</h2>
            <select value={tipoUsuario} onChange={(e) => setTipoUsuario(e.target.value)} required>
              <option value="Estudante">Estudante</option>
              <option value="Orientador">Orientador</option>
              <option value="Comissao">Comissão Científica</option>
            </select>
        </div>


        <div className="input-container">
          <input type="text" name="nomeCompleto" placeholder="Nome completo" required value={nomeCompleto} onChange={(e) => setNomeCompleto(e.target.value)}
          /> <FaUser className="icon" />
        </div>

        <div className="input-container">
          <input type="email" name="email" placeholder="E-mail institucional" required value={email} onChange={(e) => setEmail(e.target.value)} /> <FaEnvelope className="icon" />
        </div>

        <div className="input-container">
          <input type="password" name="password" placeholder="Senha" required value={password}  onChange={(e) => setPassword(e.target.value)} /><FaLock className="icon" />
        </div>

        <div className="input-container">
          <input type="text" name="idEstudante" placeholder="ID do Estudante" required value={idEstudante} onChange={(e) => setIdEstudante(e.target.value)}/> <FaUser className="icon" />
        </div>

        <div className="input-container">
          <input type="tel" name="contacto" placeholder="Contacto" required value={contacto}  onChange={(e) => setContacto(e.target.value)}/><FaPhoneAlt className="icon" />
        </div>

        <div className="input-container">
  <select name="departamento" required value={departamento} onChange={(e) => setDepartamento(e.target.value)}>
    <option value="">Selecione o departamento</option>
    <option value="Departamento de Engenharia">Departamento de Engenharia</option>
    <option value="Departamento de Ciências Jurídicas">Departamento de Ciências Jurídicas</option>
    <option value="Outro">Outro</option>
  </select>
  
    </div>
        <div className="input-container">
          <select name="especialidade" required value={especialidade} onChange={(e) => setEspecialidade(e.target.value)}
          >
            <option value="">Selecione a especialidade</option>
            <option value="Engenharia Electronica">Engenharia Electronica</option>
            <option value="Engenharia Mecanica">Engenharia Mecanica</option>
            <option value="Administração">Administração</option>
            <option value="Outro">Outro</option>
          </select>
        </div>

        <button type="submit">Registrar</button>

        <div className="signup-link"> <p>Já tem uma conta?</p> <Link to="/login">Voltar para Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Registro;

