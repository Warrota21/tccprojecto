import React from 'react';
import './Relatorios.css';

function Relatorios() {
  return (
    <div className="relatorios-container">
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

      <main className="relatorios-main">
        <h1>Relatórios e Métricas</h1>
        <p>Implementar gráficos e exportação de dados aqui.</p>
      </main>
    </div>
  );
}

export default Relatorios;
