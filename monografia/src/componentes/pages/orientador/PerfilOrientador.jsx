import '../css/orientador/PerfilOrientador.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PerfilOrientador() {
    const [profile, setProfile] = useState({ name: '', email: '', phone: '' });
    const [password, setPassword] = useState('');

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/orientador/perfil');
                setProfile(response.data);
            } catch (error) {
                console.error('Erro ao buscar perfil:', error);
                alert('Erro ao carregar perfil. Tente novamente.');
            }
        };
        fetchProfile();
    }, []);

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.put('http://localhost:3000/api/orientador/perfil', profile);
            alert('Perfil atualizado com sucesso!');
        } catch (error) {
            console.error('Erro ao atualizar perfil:', error);
            alert('Erro ao atualizar perfil. Tente novamente.');
        }
    };

    const handlePasswordChange = async (e) => {
        e.preventDefault();
        try {
            await axios.put('http://localhost:3000/api/orientador/senha', { password });
            alert('Senha atualizada com sucesso!');
            setPassword('');
        } catch (error) {
            console.error('Erro ao atualizar senha:', error);
            alert('Erro ao atualizar senha. Tente novamente.');
        }
    };

    return (
        <div className="profile-container">
            <h1>Perfil do Orientador</h1>
            <form onSubmit={handleUpdate} className="profile-form">
                <label>Nome:
                    <input type="text" value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} required />
                </label>
                <label>Email:
                    <input type="email" value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} required />
                </label>
                <label>Telefone:
                    <input type="text" value={profile.phone} onChange={(e) => setProfile({ ...profile, phone: e.target.value })} />
                </label>
                <button type="submit">Atualizar Informações</button>
            </form>

            <form onSubmit={handlePasswordChange} className="password-form">
                <label>Nova Senha:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </label>
                <button type="submit">Alterar Senha</button>
            </form>
        </div>
    );
}

export default PerfilOrientador;
