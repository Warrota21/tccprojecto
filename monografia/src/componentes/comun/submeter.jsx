import React, { useState } from 'react';
import Cabecalho from '../../comun/cabecalho';
import '../../css/aluno/submeterTcc.css';

function SubmeterTCC() {
  const [formData, setFormData] = useState({
    titulo: '',
    resumo: '',
    palavrasChave: '',
    repositorio: '',
    consentimento: false,
    arquivo: null
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.arquivo) {
      alert('Por favor, selecione o arquivo PDF.');
      return;
    }
    if (!formData.consentimento) {
      alert('Você precisa autorizar a publicação do TCC.');
      return;
    }
    // Simular envio
    console.log('TCC submetido:', formData);
    alert('TCC submetido com sucesso!');
  };

  return (
    <div className="dashboard-container">
      <Cabecalho />
      <main className="dashboard-content">
        <form onSubmit={handleSubmit} className="submeter-tcc-form">
          <h2>Submeter Trabalho de Conclusão de Curso</h2>

          <label>Título *</label>
          <input type="text" name="titulo" value={formData.titulo} onChange={handleChange} required />

          <label>Resumo *</label>
          <textarea name="resumo" value={formData.resumo} onChange={handleChange} rows="6" required></textarea>

          <label>Palavras-chave *</label>
          <input type="text" name="palavrasChave" value={formData.palavrasChave} onChange={handleChange} required placeholder="Ex: sistema, web, TCC" />

          <label>Link para Repositório (opcional)</label>
          <input type="url" name="repositorio" value={formData.repositorio} onChange={handleChange} placeholder="https://github.com/seu-tcc" />

          <label>Arquivo PDF *</label>
          <input type="file" name="arquivo" accept=".pdf" onChange={handleChange} required />

          <label>
            <input type="checkbox" name="consentimento" checked={formData.consentimento} onChange={handleChange} required />
            Autorizo a publicação do meu TCC no repositório digital LUME da UFRGS.
          </label>

          <button type="submit">Submeter TCC</button>
        </form>
      </main>
    </div>
  );
}

export default SubmeterTCC;
