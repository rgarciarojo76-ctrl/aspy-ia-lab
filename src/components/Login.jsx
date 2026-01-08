import React, { useState } from 'react';
import { AUTH_CREDENTIALS } from '../config';
import aspyLogo from '../assets/aspy-logo.png';
import riskImg from '../assets/risk-analysis.png'; // Using this as the hero image
import './Login.css';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === AUTH_CREDENTIALS.username && password === AUTH_CREDENTIALS.password) {
            onLogin();
        } else {
            setError('Credenciales incorrectas. Acceso denegado.');
        }
    };

    return (
        <div className="login-wrapper">
            <div className="login-visual-side">
                <img src={riskImg} alt="AI Lab Visual" className="login-hero-image" />
                <div className="login-visual-overlay">
                    <div className="visual-content">
                        <h2>Innovación y Seguridad Prevención 4.0</h2>
                        <p>Laboratorio interno de experimentación con Inteligencia Artificial aplicada a PRL.</p>
                    </div>
                </div>
            </div>

            <div className="login-form-side">
                <div className="login-form-container">
                    <div className="login-header">
                        <img src={aspyLogo} alt="ASPY" className="login-logo" />
                        <h1 className="login-title">ASPY IA LAB</h1>
                        <p className="login-subtitle">Introduce tus credenciales corporativas para acceder</p>
                    </div>

                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="form-group">
                            <label htmlFor="username">ID Usuario</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="form-input"
                                placeholder="Ej. 4667"
                                autoFocus
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Contraseña</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-input"
                                placeholder="••••••••"
                            />
                        </div>

                        {error && (
                            <div className="error-message">
                                <span className="error-icon">⚠️</span> {error}
                            </div>
                        )}

                        <button type="submit" className="login-button">
                            Acceder al Portal
                        </button>
                    </form>

                    <div className="login-footer">
                        <p>Acceso restringido y monitorizado.</p>
                        <p className="version-tag">v1.0.0 Stable • ASPY Prevención</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
