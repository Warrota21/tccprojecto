import '../css/orientador/FeedbackComentarios.css';
import React, { useState } from 'react';
import axios from 'axios';

function FeedbackComentarios() {
    const [studentId, setStudentId] = useState('');
    const [comment, setComment] = useState('');
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('studentId', studentId);
        formData.append('comment', comment);
        if (file) formData.append('file', file);

        try {
            await axios.post('http://localhost:3000/api/feedback', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            alert('Comentário enviado com sucesso!');
            setStudentId('');
            setComment('');
            setFile(null);
        } catch (error) {
            console.error('Erro ao enviar comentário:', error);
            alert('Erro ao enviar comentário. Tente novamente.');
        }
    };

    return (
        <div className="feedback-container">
            <h1>Feedback e Comentários</h1>
            <form onSubmit={handleSubmit} className="feedback-form">
                <label>
                    Aluno ID:
                    <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} required />
                </label>
                <label>
                    Comentário:
                    <textarea value={comment} onChange={(e) => setComment(e.target.value)} required />
                </label>
                <label>
                    Anexar Documento:
                    <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                </label>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default FeedbackComentarios;
