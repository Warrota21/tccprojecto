import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Notificacoes.css';

function Notificacoes() {
  const [notificacoes, setNotificacoes] = useState([]);

  useEffect(() => {
    async function fetchNotificacoes() {
      try {
        const res = await axios.get('http://localhost:3000/api/comissao/notificacoes');
        setNotificacoes(res.data);
      } catch (error) {
        console.error('Erro ao carregar notificações:', error);
      }
    }

    fetchNotificacoes();
  }, []);

  return (
    <div className="notificacoes-container">
      <aside className="sidebar">
        <h2>Menu Comissão</h2>
        <ul>
          <li>Dashboard</li>
          <li>Avaliar TCCs</li>
          <li>Bancas</li>
          <li>Relatórios</li>
          <li>Notificações</li>
        </ul>
      </aside>

      <main className="notificacoes-main">
        <h1>Notificações</h1>
        <ul className="notificacoes-list">
          {notificacoes.map((notif) => (
            <li key={notif.id} className="notificacao-item">
              <p>{notif.message}</p>
              <small>{new Date(notif.date).toLocaleString()}</small>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default Notificacoes;
