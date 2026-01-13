import React from 'react';
import { APPS_CONFIG } from '../config';
import './Dashboard.css';
import aspyLogo from '../assets/aspy-logo.png';

const Dashboard = ({ onLogout }) => {
    const activeApps = APPS_CONFIG.filter(app => app.active);

    const handleAppLaunch = async (e, appUrl) => {
        e.preventDefault();

        try {
            // 1. Get a fresh signed token from our internal API
            const response = await fetch('/api/generate-token');
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to generate access token');
            }

            // 2. Append token to the destination URL
            const url = new URL(appUrl);
            url.searchParams.set('t', data.timestamp);
            url.searchParams.set('h', data.signature);

            // 3. Open the secure link
            window.open(url.toString(), '_blank', 'noopener,noreferrer');

        } catch (error) {
            console.error('Security Handshake Failed:', error);
            alert('Error de seguridad: No se pudo generar el pase de acceso. Contacte con el administrador.');
        }
    };

    return (
        <div className="dashboard-layout">
            <header className="dashboard-header">
                <div className="header-content container">


                    <div className="header-left">
                        <div className="aspy-logo-container">
                            <img src={aspyLogo} alt="ASPY Logo" className="aspy-logo-img" />
                        </div>
                        <div className="header-divider"></div>
                        <div className="header-title-block">
                            <h1 className="header-title">ASPY IA LAB</h1>
                            <p className="header-subtitle">Aplicación: Portal de Acceso - Riesgos PRL</p>
                        </div>
                    </div>

                    <div className="header-center">
                        <div className="status-badge">Estado: Piloto interno</div>
                        <div className="warning-text">
                            AVISO: Apoyo técnico (no sustitutivo del criterio profesional). La información debe ser validada.
                        </div>
                    </div>

                    <div className="header-right">
                        <button onClick={onLogout} className="logout-button">
                            Cerrar Sesión
                        </button>
                    </div>
                </div>
            </header>

            <main className="dashboard-main container">
                {/* Warning moved to header to match screenshot, but keeping a spacer or just the grid */}

                <div className="dashboard-intro">
                    <h2 className="dashboard-welcome-title">Laboratorio de Aplicaciones IA</h2>
                    <p className="dashboard-welcome-text">Seleccione una herramienta para comenzar el análisis</p>
                </div>

                <div className="apps-grid">
                    {activeApps.map(app => (
                        <div key={app.id} className="app-card">
                            <div className="app-card-image-container">
                                <img src={app.image} alt={app.name} className="app-card-image" />
                                <div className="app-card-overlay">
                                    <h3 className="app-card-title">{app.name}</h3>
                                </div>
                            </div>

                            <div className="app-card-actions">
                                <a
                                    href="#"
                                    onClick={(e) => handleAppLaunch(e, app.url)}
                                    className="app-launch-button"
                                >
                                    Acceder a la aplicación
                                </a>
                            </div>
                        </div>
                    ))}

                    {activeApps.length === 0 && (
                        <div className="no-apps-message">
                            No hay aplicaciones activas disponibles en este momento.
                        </div>
                    )}
                </div>
            </main >

            <footer className="dashboard-footer">
                <div className="container">
                    <p>ASPY IA LAB – Uso interno restringido</p>
                </div>
            </footer>
        </div >
    );
};

export default Dashboard;
