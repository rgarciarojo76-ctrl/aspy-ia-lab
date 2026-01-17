import { APPS_CONFIG } from '../../config';
import { FlaskConical } from 'lucide-react';
import './AppGrid.css';

const AppGrid = () => {
    const activeApps = APPS_CONFIG.filter(app => app.active);

    const handleAppLaunch = (e, appUrl) => {
        e.preventDefault();

        // Mobile-Robust Strategy: Redirect to launcher page
        const launcherUrl = `/launcher.html?url=${encodeURIComponent(appUrl)}`;
        window.open(launcherUrl, '_blank', 'noopener,noreferrer');
    };

    return (
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

            {/* --- INICIO TARJETA FDS ANALYZER --- */}
            <a
                href="https://direccion-tecnica-fds-analyzer.vercel.app/"
                onClick={(e) => handleAppLaunch(e, "https://direccion-tecnica-fds-analyzer.vercel.app/")}
                className="fds-card"
            >
                <div className="fds-card-header">
                    <div className="fds-icon-wrapper">
                        {/* Icono Matraz/Química */}
                        <FlaskConical className="fds-icon" strokeWidth={1.5} />
                    </div>
                    <span className="fds-version-badge">
                        v1.0
                    </span>
                </div>

                <h3 className="fds-title">
                    FDS Analyzer
                </h3>

                <p className="fds-description">
                    Extracción automática de datos de fichas de seguridad química (12 puntos) mediante IA.
                </p>
            </a>
            {/* --- FIN TARJETA FDS ANALYZER --- */}

            {activeApps.length === 0 && (
                <div className="no-apps-message">
                    No hay aplicaciones activas disponibles en este momento.
                </div>
            )}
        </div>
    );
};

export default AppGrid;
