import React, { useState } from 'react';
import logo from '../assets/logo-direccion-tecnica.jpg';
import riskImg from '../assets/hero-ai-safety.png'; // Updated Premium Hero Image
import './Login.css';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                onLogin();
            } else {
                setError('Credenciales incorrectas');
            }
        } catch (err) {
            setError('Error de conexión');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="login-container">
            <div className="login-split">
                {/* Left Side: Visual */}
                <div className="login-visual-side">
                    <img src={riskImg} alt="AI Lab Visual" className="login-hero-image" />
                    <div className="login-visual-overlay">
                        <div className="visual-content">
                            <h2>Innovación y Seguridad Prevención 4.0</h2>
                            <p>Laboratorio de pruebas de concepto y experimentación con Inteligencia Artificial aplicada a PRL</p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="login-form-side">
                    <div className="login-form-container">
                        <div className="login-header">
                            <img src={logo} alt="Dirección Técnica" className="login-logo" />
                            <h1 className="login-title">DIRECCIÓN TÉCNICA IA LAB</h1>
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

                            <button type="submit" className="login-button" disabled={isLoading}>
                                {isLoading ? 'Verificando...' : 'Acceder al Portal'}
                            </button>
                        </form>

                        <div className="login-footer">
                            <p>Acceso restringido y monitorizado.</p>
                            <p className="version-tag">v1.0.0 Stable • Dirección Técnica</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
