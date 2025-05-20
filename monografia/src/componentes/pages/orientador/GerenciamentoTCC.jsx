import '../css/orientador/GerenciamentoTCC.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GerenciamentoTCC() {
    const [tccs, setTccs] = useState([]);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const fetchTccs = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/tccs');
                setTccs(response.data);
            } catch (error) {
                console.error('Erro ao buscar TCCs:', error);
            }
        };
        fetchTccs();
    }, []);

    const filteredTccs = filter === 'all' ? tccs : tccs.filter(tcc => tcc.status === filter);

    return (
        <div className="tcc-container">
            <h1>Gerenciamento de TCCs</h1>

            <div className="filter-buttons">
                <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>Todos</button>
                <button onClick={() => setFilter('draft')} className={filter === 'draft' ? 'active' : ''}>Rascunho</button>
                <button onClick={() => setFilter('submitted')} className={filter === 'submitted' ? 'active' : ''}>Submetido</button>
                <button onClick={() => setFilter('approved')} className={filter === 'approved' ? 'active' : ''}>Aprovado</button>
                <button onClick={() => setFilter('rejected')} className={filter === 'rejected' ? 'active' : ''}>Rejeitado</button>
            </div>

            <div className="tcc-list">
                {filteredTccs.map((tcc) => (
                    <div className="tcc-card" key={tcc.id}>
                        <h2>{tcc.title}</h2>
                        <p><strong>Descrição:</strong> {tcc.description}</p>
                        <p><strong>Status:</strong> {tcc.status}</p>
                        <p><strong>Aluno:</strong> {tcc.studentId || 'Não associado'}</p>
                        <div className="tcc-actions">
                            <button className="approve">Aprovar</button>
                            <button className="reject">Rejeitar</button>
                            <button className="request-revision">Solicitar Revisão</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GerenciamentoTCC;
