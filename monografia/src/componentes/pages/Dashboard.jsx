import '../css/aluno/DashboardAluno.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFileAlt, FaInfoCircle, FaCalendarAlt } from 'react-icons/fa';

function Dashboard() {
  const cards = [
    { title: "Submissão de Trabalho", path: "/submissao", icon: <FaFileAlt /> },
    { title: "Detalhes do Trabalho", path: "/detalhes", icon: <FaInfoCircle /> },
    { title: "Cronograma e Prazos", path: "/cronograma", icon: <FaCalendarAlt /> },
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Formulários</h2>
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
              <p>Acesse informações sobre {card.title.toLowerCase()}.</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;

