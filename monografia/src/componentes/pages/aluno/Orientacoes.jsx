import React from 'react';
import Cabecalho from '../../comun/cabecalho';

function Submissao() {
  return (
    <div className="dashboard-container">
      <Cabecalho />
      <main className="dashboard-content">
        <h2> do Trabalho</h2>
        {<form>
          <input type="text" placeholder="Insira o seu Nome"/>
          </form>}
      </main>
    </div>
  );
}

export default Submissao;
