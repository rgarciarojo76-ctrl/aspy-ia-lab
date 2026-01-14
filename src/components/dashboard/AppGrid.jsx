import React from 'react';
import { APPS_CONFIG } from '../../config';

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

            {activeApps.length === 0 && (
                <div className="no-apps-message">
                    No hay aplicaciones activas disponibles en este momento.
                </div>
            )}
        </div>
    );
};

export default AppGrid;
