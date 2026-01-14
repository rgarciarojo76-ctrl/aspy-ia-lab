import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './App.css';

// 8 hours in milliseconds
const IDLE_TIMEOUT = 8 * 60 * 60 * 1000;

function App() {
  // Lazy initialization to avoid effect setState
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('aspy_lab_session') === 'active';
  });

  const logoutTimerRef = React.useRef(null);

  const handleLogout = () => {
    sessionStorage.removeItem('aspy_lab_session');
    setIsAuthenticated(false);
    if (logoutTimerRef.current) {
      clearTimeout(logoutTimerRef.current);
    }
  };

  const resetTimer = React.useCallback(() => {
    if (logoutTimerRef.current) {
      clearTimeout(logoutTimerRef.current);
    }
    logoutTimerRef.current = setTimeout(handleLogout, IDLE_TIMEOUT);
  }, []);

  useEffect(() => {
    // If authenticated on mount, start timer
    if (isAuthenticated) {
      resetTimer();
    }

    // Events that reset the timer
    const events = ['mousemove', 'keydown', 'click', 'scroll'];

    const handleActivity = () => {
      // We can check the ref or just reset. Since we are in an effect for general activity, 
      // let's check session explicitly or just rely on the component state if we included it in deps.
      // Better: check storage directly to avoid stale closures if we don't want to rebind listeners constantly.
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
  }, [resetTimer]);

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
