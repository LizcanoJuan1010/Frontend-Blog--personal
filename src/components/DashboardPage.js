import React from 'react';
import './DashboardPage.css';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registra los componentes necesarios para Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function DashboardPage() {
  const data = {
    labels: ['A', 'B', 'C', 'D'],
    datasets: [
      {
        label: 'Valores',
        data: [3, 7, 2, 5],
        backgroundColor: ['#76c893', '#f9c74f', '#577590', '#f94144'],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="user-info">
          <div className="user-avatar"></div>
          <p>Usuario</p>
        </div>
        <nav className="sidebar-menu">
          <button className="menu-item">Entradas</button>
          <button className="menu-item">Crear</button>
          <button className="menu-item">Borradores</button>
        </nav>
        <button className="logout">Salir</button>
      </aside>
      
      <main className="dashboard-main">
        <h1>Usuario</h1>
        <div className="dashboard-content">
          <div className="friends-section">
            <h2>Amigos</h2>
            <input type="text" placeholder="Buscar..." className="search-input" />
            <ul>
              <li>David</li>
              <li>Juan</li>
              <li>María</li>
              <li>Juan</li>
            </ul>
          </div>
          <div className="info-section">
            <div className="info-header">
              <button className="info-tab">Información</button>
              <button className="filter-tab">Filtros...</button>
            </div>
            <div className="chart-container">
              <Bar data={data} options={options} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DashboardPage;
