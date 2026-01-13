import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // 8 hours in milliseconds
  const IDLE_TIMEOUT = 8 * 60 * 60 * 1000;
  const logoutTimerRef = React.useRef(null);

  const handleLogout = () => {
    sessionStorage.removeItem('aspy_lab_session');
    setIsAuthenticated(false);
    if (logoutTimerRef.current) {
      clearTimeout(logoutTimerRef.current);
    }
  };

  const resetTimer = () => {
    if (logoutTimerRef.current) {
      clearTimeout(logoutTimerRef.current);
    }
    logoutTimerRef.current = setTimeout(handleLogout, IDLE_TIMEOUT);
  };

  useEffect(() => {
    // Check session storage for existing session
    const session = sessionStorage.getItem('aspy_lab_session');
    if (session === 'active') {
      setIsAuthenticated(true);
      resetTimer(); // Start timer on load if already logged in
    }

    // Events that reset the timer
    const events = ['mousemove', 'keydown', 'click', 'scroll'];

    const handleActivity = () => {
      // Only reset if user is authenticated
      if (sessionStorage.getItem('aspy_lab_session') === 'active') {
        resetTimer();
      }
    };

    // Attach listeners
    events.forEach(event => {
      window.addEventListener(event, handleActivity);
    });

    // Cleanup
    return () => {
      events.forEach(event => {
        window.removeEventListener(event, handleActivity);
      });
      if (logoutTimerRef.current) {
        clearTimeout(logoutTimerRef.current);
      }
    };
  }, []);

  const handleLogin = () => {
    sessionStorage.setItem('aspy_lab_session', 'active');
    setIsAuthenticated(true);
    resetTimer(); // Start monitoring on login
  };

  return (
    <div className="app-root">
      {isAuthenticated ? (
        <Dashboard onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
