import React from 'react';
import logo from '../logos/image.png';
import '../css/aluno/Dashboard.css'; // reutiliza o estilo do dashboard

function Cabecalho() {
  return (
    <header className="dashboard-header">
      <div className="dashboard-title-container">
        <img src={logo} alt="Academia Militar" className="dashboard-logo" />
        <h1 className="dashboard-title">Gestão de Trabalhos de Conclusão do Curso</h1>
      </div>
    </header>
  );
}

export default Cabecalho;

