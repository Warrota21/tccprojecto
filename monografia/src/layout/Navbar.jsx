// src/layout/Navbar.jsx
import React from 'react';
import './Navbar.css';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-icon">
        <FaBars />
      </div>
      <ul className="navbar-menu">
        <li><Link to="/">Início</Link></li>
        <li><Link to="/informacoes">Informações</Link></li>
        <li><Link to="/contactos">Contactos</Link></li>
        
      </ul>
    </nav>
  );
}

export default Navbar;
