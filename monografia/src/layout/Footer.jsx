// src/layout/Footer.jsx
import React from 'react';
import './Footer.css';
import { FaLinkedin, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    < footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h3>INFORMAÇÕES SOBRE</h3>
          <p>
            Este site terá como objetivo proporcionar uma experiência mais agradável para pessoas dentro de uma faculdade, facilitando a gestão e o acompanhamento dos Trabalhos de Conclusão de Curso (TCC).
          </p>
        </div>
        <div className="footer-column">
          <h3>CONTACTOS</h3>
          <p>Faculdade@gmail.com</p>
          <p>(+258) 869-762-198</p>
        </div>
        <div className="footer-column">
          <h3>DÚVIDAS</h3>
          <p>Como conseguir uma conta</p>
          <p>Como acessar minha conta</p>
          <p>Como recuperar senha</p>
        </div>
        <div className="footer-column">
          <h3>REDES SOCIAIS</h3>
          <p>Linkedin</p>
          <p>Instagram</p>
          <p>You Tube</p>
          <p>Facebook</p>
          
        </div>
      </div>
      <div className="footer-bottom">
        <h3>REDES SOCIAIS</h3>
        <div className="social-icons">
          <FaLinkedin />
          <FaInstagram />
          <FaFacebook />
          <FaYoutube />
        </div>
      </div>
    </footer>
  );
}

export default Footer;

