import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AvaliacaoTcc.css';

function AvaliacaoTcc({ tccId }) {
  const [tcc, setTcc] = useState(null);
  const [notaOriginalidade, setNotaOriginalidade] = useState('');
  const [notaMetodologia, setNotaMetodologia] = useState('');
  const [notaApresentacao, setNotaApresentacao] = useState('');
  const [comentarios, setComentarios] = useState('');
  const [status, setStatus] = useState('emAvaliacao');

  useEffect(() => {
    async function fetchTcc() {
      try {
        const res = await axios.get(`http://localhost:3000/api/comissao/tccs/${tccId}`);
        setTcc(res.data);
        setStatus(res.data.status);
      } catch (error) {
        alert('Erro ao carregar TCC');
      }
    }
    fetchTcc();
  }, [tccId]);

  async function enviarAvaliacao() {
    try {
      await axios.post(`http://localhost:3000/api/comissao/tccs/${tccId}/avaliar`, {
        notaOriginalidade,
        notaMetodologia,
        notaApresentacao,
        comentarios,
        status,
      });
      alert('Avaliação enviada com sucesso!');
    } catch (error) {
      alert('Erro ao enviar avaliação');
    }
  }

  if (!tcc) return <p>Carregando...</p>;

  return (
    <div className="avaliacao-container">
      <h1>Avaliar TCC: {tcc.title}</h1>
      <p><strong>Aluno:</strong> {tcc.studentName}</p>
      <p><strong>Resumo:</strong> {tcc.description}</p>

      <form
        onSubmit={e => {
          e.preventDefault();
          enviarAvaliacao();
        }}
      >
        <div className="form-group">
          <label>Nota Originalidade</label>
          <input
            type="number"
            min="0"
            max="10"
            value={notaOriginalidade}
            onChange={e => setNotaOriginalidade(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Nota Metodologia</label>
          <input
            type="number"
            min="0"
            max="10"
            value={notaMetodologia}
            onChange={e => setNotaMetodologia(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Nota Apresentação</label>
          <input
            type="number"
            min="0"
            max="10"
            value={notaApresentacao}
            onChange={e => setNotaApresentacao(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Comentários</label>
          <textarea
            value={comentarios}
            onChange={e => setComentarios(e.target.value)}
            rows="4"
            required
          />
        </div>

        <div className="form-group">
          <label>Status da Avaliação</label>
          <select value={status} onChange={e => setStatus(e.target.value)}>
            <option value="emAvaliacao">Em Avaliação</option>
            <option value="aprovado">Aprovado</option>
            <option value="rejeitado">Rejeitado</option>
          </select>
        </div>

        <button type="submit" className="btn-enviar">Enviar Avaliação</button>
      </form>
    </div>
  );
}

export default AvaliacaoTcc;
