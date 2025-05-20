import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Comissao.css';

function Comissao() {
  const [tccs, setTccs] = useState([]);
  const [statusCount, setStatusCount] = useState({
    pendente: 0,
    emAvaliacao: 0,
    aprovado: 0,
    rejeitado: 0,
  });

  useEffect(() => {
    async function fetchTccs() {
      try {
        const res = await axios.get('http://localhost:3000/api/comissao/tccs');
        setTccs(res.data);

        // Contar status
        const counts = { pendente: 0, emAvaliacao: 0, aprovado: 0, rejeitado: 0 };
        res.data.forEach(tcc => {
          counts[tcc.status] = (counts[tcc.status] || 0) + 1;
        });
        setStatusCount(counts);
      } catch (error) {
        alert('Erro ao carregar TCCs');
      }
    }
    fetchTccs();
  }, []);

  return (
    <div className="dashboard-comissao-container">
      <aside className="sidebar">
        <h2>Menu Comissão</h2>
        <ul>
          <li>TCCs para Avaliar</li>
          <li>Bancas</li>
          <li>Relatórios</li>
          <li>Notificações</li>
        </ul>
      </aside>

      <main className="dashboard-main">
        <h1>Dashboard Comissão Científica</h1>

        <div className="status-cards">
          <div className="card pendente">Pendentes: {statusCount.pendente}</div>
          <div className="card em-avaliacao">Em Avaliação: {statusCount.emAvaliacao}</div>
          <div className="card aprovado">Aprovados: {statusCount.aprovado}</div>
          <div className="card rejeitado">Rejeitados: {statusCount.rejeitado}</div>
        </div>

        <h2>TCCs para avaliação</h2>
        <ul className="tcc-list">
          {tccs.map(tcc => (
            <li key={tcc.id} className={`tcc-item ${tcc.status}`}>
              <strong>{tcc.title}</strong> - {tcc.studentName} - Status: {tcc.status}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default Comissao;
