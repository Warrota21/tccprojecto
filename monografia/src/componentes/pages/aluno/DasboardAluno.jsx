import React from 'react';
import './DashboardAluno.css';

function DashboardAluno() {
  return (
    <div className="dashboard-main">
      <h1>Bem-vindo(a) ao Painel do Aluno</h1>
      <div className="card-grid">
        <div className="card">Seu TCC</div>
        <div className="card">Status</div>
        <div className="card">Orientador</div>
        <div className="card">Prazos</div>
      </div>
    </div>
  );
}

export default DashboardAluno;
