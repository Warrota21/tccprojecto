import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Bancas.css';

function Bancas() {
  const [bancas, setBancas] = useState([]);

  useEffect(() => {
    async function fetchBancas() {
      try {
        const res = await axios.get('http://localhost:3000/api/comissao/bancas');
        setBancas(res.data);
      } catch (error) {
        console.error('Erro ao carregar bancas:', error);
      }
    }

    fetchBancas();
  }, []);

  return (
    <div className="bancas-container">
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

      <main className="bancas-main">
        <h1>Gerenciamento de Bancas</h1>
        <table className="bancas-table">
          <thead>
            <tr>
              <th>TCC</th>
              <th>Data</th>
              <th>Horário</th>
              <th>Membros da Banca</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bancas.map((banca) => (
              <tr key={banca.id}>
                <td>{banca.tccTitle}</td>
                <td>{new Date(banca.date).toLocaleDateString()}</td>
                <td>{banca.time}</td>
                <td>{banca.members.join(', ')}</td>
                <td>{banca.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default Bancas;
