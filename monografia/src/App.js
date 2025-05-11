
// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import Login from './componentes/pages/Login';
import Dashboard from './componentes/pages/Dashboard.jsx';
import Submissao from './componentes/pages/aluno/Submissao.jsx';
import Detalhes from './componentes/pages/aluno/Orientacoes.jsx';
import Orientacoes from './componentes/pages/aluno/Detalhes.jsx';
import Avaliacoes from './componentes/pages/aluno/Cronograma.jsx';
import Cronograma from './componentes/pages/aluno/Avaliacoes.jsx';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
      
        <Route path="/" element={
          isAuthenticated ? <Navigate to="/dashboard" /> : <Login onLogin={setIsAuthenticated} />
        } />
        
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/submissao" element={<Submissao />} />
        <Route path="/detalhes" element={<Detalhes />} />
        <Route path="/orientacoes" element={<Orientacoes />} />
        <Route path="/avaliacoes" element={<Avaliacoes />} />
        <Route path="/cronograma" element={<Cronograma />} />
      </Routes>
    </Router>
  );
}

export default App;
