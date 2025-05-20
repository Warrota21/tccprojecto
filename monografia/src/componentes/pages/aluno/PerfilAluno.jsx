import React, { useState } from 'react';
import './PerfilAluno.css';

function PerfilAluno() {
  const [nome, setNome] = useState('Aluno Exemplo');
  const [email, setEmail] = useState('aluno@email.com');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Perfil atualizado:', nome, email);
  };

  return (
    <div className="dashboard-main">
      <h2>Perfil do Aluno</h2>
      <form onSubmit={handleSubmit} className="form-perfil">
        <label>
          Nome:
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </label>
        <label>
          E-mail:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default PerfilAluno;
