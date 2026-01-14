import React from 'react';
import DashboardHeader from './layout/DashboardHeader';
import DashboardFooter from './layout/DashboardFooter';
import AppGrid from './dashboard/AppGrid';
import './Dashboard.css';

const Dashboard = ({ onLogout }) => {
    return (
        <div className="dashboard-layout">
            <DashboardHeader onLogout={onLogout} />

            <main className="dashboard-main container">
                <div className="dashboard-intro">
                    <h2 className="dashboard-welcome-title">Laboratorio de Aplicaciones IA</h2>
                    <p className="dashboard-welcome-text">Seleccione una herramienta para comenzar el análisis</p>
                </div>

                <AppGrid />
            </main>

            <DashboardFooter />
        </div>
    );
};

export default Dashboard;
