
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import Registro from './componentes/pages/Registro';
import Login from './componentes/pages/Login';
import Dashboard from './componentes/pages/Dashboard.jsx';
import Submissao from './componentes/pages/aluno/Submissao.jsx';
import Detalhes from './componentes/pages/aluno/Detalhes.jsx';
import Cronograma from './componentes/pages/aluno/Cronograma.jsx';
import Navbar from './layout/Navbar.jsx';
import Footer from './layout/Footer.jsx';
import Contacto from './layout/nav/Contacto.jsx';
import Informacao from './layout/nav/Informacao.jsx';
import Inicio from './layout/nav/Inicio.jsx';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="min-height">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to="/dashboard" />
              ) : (
                <Login onLogin={setIsAuthenticated} />
              )
            }
          />
          
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/informacao" element={<Informacao />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<Login onLogin={setIsAuthenticated} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/submissao" element={<Submissao />} />
          <Route path="/detalhes" element={<Detalhes />} />
          <Route path="/cronograma" element={<Cronograma />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
