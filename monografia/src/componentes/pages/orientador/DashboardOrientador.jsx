import '../css/orientador/Dashboard.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserGraduate, FaChartPie, FaClock } from 'react-icons/fa';
import axios from 'axios';

function DashboardOrientador() {
    const [tccs, setTccs] = useState([]);
    const [statusCount, setStatusCount] = useState({ draft: 0, submitted: 0, approved: 0, rejected: 0 });

    useEffect(() => {
        const fetchTccs = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/tccs');
                setTccs(response.data);
                const counts = { draft: 0, submitted: 0, approved: 0, rejected: 0 };
                response.data.forEach((tcc) => counts[tcc.status]++);
                setStatusCount(counts);
            } catch (error) {
                console.error('Erro ao buscar TCCs:', error);
            }
        };
        fetchTccs();
    }, []);

    const cards = [
        { title: 'Lista de TCCs', path: '/tccs', icon: <FaUserGraduate /> },
        { title: 'Contagem de Status', path: '/estatisticas', icon: <FaChartPie /> },
        { title: 'Últimas Atualizações', path: '/atualizacoes', icon: <FaClock /> },
    ];

    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <aside className="sidebar">
                <h2>Gerenciamento</h2>
                <nav>
                    <ul>
                        {cards.map((card, index) => (
                            <li key={index}><Link to={card.path}>{card.title}</Link></li>
                        ))}
                    </ul>
                </nav>
            </aside>

            {/* Conteúdo principal com cards */}
            <main className="dashboard-main">
                <div className="card-grid">
                    {cards.map((card, index) => (
                        <Link to={card.path} className="card" key={index}>
                            <div className="icon">{card.icon}</div>
                            <h3>{card.title}</h3>
                            <p>Acesse informações sobre {card.title.toLowerCase()}.</p>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default DashboardOrientador;