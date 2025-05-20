import '../css/orientador/RelatoriosMetricas.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

function RelatoriosMetricas() {
    const [tccData, setTccData] = useState({});
    const [averageTime, setAverageTime] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/relatorios');
                const { tccStatusCounts, averageCompletionTime } = response.data;
                setTccData(tccStatusCounts);
                setAverageTime(averageCompletionTime);
            } catch (error) {
                console.error('Erro ao buscar dados de relatórios:', error);
                alert('Erro ao carregar dados. Tente novamente.');
            }
        };
        fetchData();
    }, []);

    const chartData = {
        labels: Object.keys(tccData),
        datasets: [
            {
                label: 'Quantidade de TCCs',
                data: Object.values(tccData),
                backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545'],
            },
        ],
    };

    const exportData = () => {
        const data = JSON.stringify({ tccData, averageTime }, null, 2);
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'relatorios.json';
        link.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="reports-container">
            <h1>Relatórios e Métricas</h1>
            <div className="chart-container">
                <Bar data={chartData} />
            </div>
            <div className="average-time">
                <h3>Tempo Médio de Conclusão</h3>
                <p>{averageTime} dias</p>
            </div>
            <button onClick={exportData} className="export-button">Exportar Dados</button>
        </div>
    );
}

export default RelatoriosMetricas;
