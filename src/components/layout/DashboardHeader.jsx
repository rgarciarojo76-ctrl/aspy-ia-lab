import logo from '../../assets/logo-direccion-tecnica.jpg';
import { AlertTriangle } from 'lucide-react';
import './DashboardHeader.css';

const DashboardHeader = ({ onLogout }) => {
    return (
        <header className="dashboard-header">
            <div className="header-content container">
                <div className="header-left">
                    <div className="aspy-logo-container">
                        <img src={logo} alt="Dirección Técnica Logo" className="aspy-logo-img" />
                    </div>
                    <div className="header-divider"></div>
                    <div className="header-title-block">
                        <h1 className="header-title">DIRECCIÓN TÉCNICA IA LAB</h1>
                        <p className="header-subtitle">Aplicación: Portal de Acceso - Riesgos PRL</p>
                    </div>
                </div>

                <div className="header-center">
                    <div className="status-section">
                         <div className="status-badge">Estado: Piloto interno</div>
                         <div className="status-disclaimer">
                            <AlertTriangle size={18} className="disclaimer-icon" />
                            <div className="disclaimer-content">
                                <span className="disclaimer-title">AVISO:</span>
                                <span className="disclaimer-body">
                                    Apoyo técnico (no sustitutivo del criterio profesional). La información debe ser validada.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header-right">
                    <button onClick={onLogout} className="logout-button">
                        Cerrar Sesión
                    </button>
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader;
