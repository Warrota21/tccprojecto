import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cabecalho from '../../comun/cabecalho';
import '../../css/aluno/submissao.css'; // Certifique-se de editar esse CSS também

function Submissao() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmacaoSenha: '',
    cartao: '',
    orientador: '',
    titulo: '',
    proposta: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.senha !== formData.confirmacaoSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    console.log('Formulário Enviado:', formData);
    alert("Formulário enviado com sucesso!");
  };

  return (
    <div className="dashboard-container">
      <Cabecalho />
      <main className="dashboard-content horizontal-form-container">
        {/* Formulário principal */}
        <form onSubmit={handleSubmit} className="submissao-form">
          <label>Nome *</label>
          <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />

          <label>E-mail *</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            placeholder="Seu e-mail @gmail.com"
            pattern="^[a-zA-Z0-9._%+-]+@gmail\\.com$"
            title="Apenas e-mails @gmail.com são aceitos"
          />

          <label>Senha *</label>
          <input type="password" name="senha" value={formData.senha} onChange={handleChange} required />

          <label>Confirmação da Senha *</label>
          <input type="password" name="confirmacaoSenha" value={formData.confirmacaoSenha} onChange={handleChange} required />

          <label>Cartão *</label>
          <input type="text" name="cartao" value={formData.cartao} onChange={handleChange} required />

          <label>Orientador</label>
          <select name="orientador" value={formData.orientador} onChange={handleChange}>
            <option value="">Selecione...</option>
            <option value="orientador1">Orientador 1</option>
            <option value="orientador2">Orientador 2</option>
            <option value="orientador3">Orientador 3</option>
          </select>

          <label>Título</label>
          <input type="text" name="titulo" value={formData.titulo} onChange={handleChange} />

          <label>Proposta</label>
          <textarea name="proposta" value={formData.proposta} onChange={handleChange} rows="5"></textarea>

          <button type="submit">Enviar</button>
        </form>

        {/* Botão de submissão final */}
        <form className="form-link-tcc">
          <Link to="/submetertcc" className="btn-link-tcc">
            <span className="plus-icon">+</span> Ir para Submissão Final
          </Link>
        </form>
      </main>
    </div>
  );
}

export default Submissao;


