import '../css/aluno/Dashboard.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaUserCog, FaCheckCircle, FaFileAlt } from 'react-icons/fa';

function Comissao() {
  const cards = [
    { title: "Emitir Pareceres", path: "/emitir-pareceres", icon: <FaEdit /> },
    { title: "Gerenciar Membros", path: "/gerenciar-membros", icon: <FaUserCog /> },
    { title: "Validar Trabalhos", path: "/validar-trabalhos", icon: <FaCheckCircle /> },
    { title: "Ver Relatórios Finais", path: "/ver-relatorios-finais", icon: <FaFileAlt /> },
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Painel de Administração</h2>
        <nav>
          <ul>
            {cards.map((card, index) => (
              <li key={index}><Link to={card.path}>{card.title}</Link></li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Conteúdo principal com cards */}
      <main className="dashboard-main">
        <div className="card-grid">
          {cards.map((card, index) => (
            <Link to={card.path} className="card" key={index}>
              <div className="icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>Gerencie as atividades relacionadas a {card.title.toLowerCase()}.</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Comissao;

