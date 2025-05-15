// src/componentes/pages/Dashboard.jsx
import '../css/aluno/Dashboard.css';
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from '../logos/image.png';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="dashboard-title-container">
          <img src={logo} alt="Academia Militar" className="dashboard-logo" />
          <h1 className="dashboard-title">Gestão de Trabalhos de Conclusao do Curso</h1>
        </div>
        <nav className="dashboard-nav">
          <ul>
            <li><Link to="/submissao">Submissão de Trabalho</Link></li>
            <li><Link to="/detalhes">Detalhes do Trabalho</Link></li>
            <li><Link to="/cronograma">Cronograma e Prazos</Link></li>
          </ul>
        </nav>
      </header>
      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
