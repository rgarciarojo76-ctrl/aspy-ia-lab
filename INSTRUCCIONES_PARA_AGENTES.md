# 🛡️ Instrucciones para el Agente (Security + Visual)

_**Nota para el Agente:** Si estás leyendo esto, el usuario solicita que apliques DOS mejoras importantes en tu proyecto asignado (`Riesgos`, `Manuales` o `Químicos`)._

---

## 🔒 1. SEGURIDAD: Implementar "Token Handshake"
Necesitamos evitar el acceso directo. El Portal Principal genera un token firmado que tu aplicación debe validar.

### A. Crear `src/components/Gatekeeper.jsx`
Copia este código EXACTO:

```jsx
import React, { useEffect, useState } from 'react';
const SHARED_SECRET = import.meta.env.VITE_SHARED_SECRET; 

const Gatekeeper = ({ children }) => {
    const [accessGranted, setAccessGranted] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const verifyToken = async () => {
            if (!SHARED_SECRET) {
                console.error("Falta VITE_SHARED_SECRET");
                setError("Error Configuración Servidor");
                return;
            }
            const params = new URLSearchParams(window.location.search);
            const timestamp = params.get('t');
            const signature = params.get('h');

            if (!timestamp || !signature) { setError("Acceso Denegado"); return; }
            if (Date.now() - parseInt(timestamp) > 60000) { setError("Enlace Caducado"); return; }

            try {
                const encoder = new TextEncoder();
                const key = await crypto.subtle.importKey('raw', encoder.encode(SHARED_SECRET), { name: 'HMAC', hash: 'SHA-256' }, false, ['verify']);
                const verified = await crypto.subtle.verify('HMAC', key, hexToBuf(signature), encoder.encode(timestamp));
                if (verified) { setAccessGranted(true); window.history.replaceState({}, document.title, window.location.pathname); }
                else { setError("Firma Inválida"); }
            } catch (e) { setError("Error Verificación"); }
        };
        function hexToBuf(hex) { const b = new Uint8Array(hex.length/2); for(let i=0; i<hex.length; i+=2) b[i/2]=parseInt(hex.substring(i, i+2), 16); return b; }
        verifyToken();
    }, []);

    if (error) return <div style={{height:'100vh', display:'flex', alignItems:'center', justifyContent:'center', color:'red'}}><h1>⛔ {error}</h1></div>;
    if (!accessGranted) return <div style={{height:'100vh', display:'flex', alignItems:'center', justifyContent:'center'}}>Verificando... 🔐</div>;
    return children;
};
export default Gatekeeper;
```

### B. Proteger `src/App.jsx`
Envuelve tu app con `<Gatekeeper>`:
```jsx
<Gatekeeper> <TuApp /> </Gatekeeper>
```
*Asegúrate de que la variable de entorno `VITE_SHARED_SECRET` esté puesta en Vercel.*

---

## 🎨 2. DISEÑO: Mejora Visual "UNE 689"
El usuario quiere que la lista de "Criterios técnicos básicos" se vea perfecta (una sola línea por ítem). Si tu aplicación muestra esta sección, reemplaza el código antiguo con este componente.

### A. Crear CSS `src/components/AssessmentCard.css`

```css
.assessment-card {
  background: white; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
  padding: 24px; margin: 0 auto 24px; max-width: 1200px; font-family: sans-serif;
}
.assess-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #0099CC; padding-bottom: 12px; margin-bottom: 20px; }
.assess-title { margin: 0; color: #005580; font-size: 1.25rem; font-weight: 700; }
.assess-badge { background: #f0f9ff; color: #0284c7; padding: 6px 12px; border-radius: 20px; font-weight: 600; border: 1px solid #bae6fd; display: flex; gap: 6px; }
.assess-content-box { background: #f8fdff; border-left: 5px solid #0099CC; border-radius: 0 8px 8px 0; padding: 20px; }
.assess-subtitle { margin: 0 0 16px; color: #0c4a6e; font-size: 1.1rem; font-weight: 600; }
.assess-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(500px, 1fr)); gap: 12px 40px; }
.assess-item { display: flex; align-items: center; gap: 10px; padding: 6px 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.item-bullet { color: #0099CC; font-weight: bold; font-size: 1.2rem; }
.item-label { font-weight: 700; color: #0f172a; min-width: 110px; }
.item-text { color: #475569; }
@media (max-width: 768px) { .assess-grid { grid-template-columns: 1fr; } .assess-item { white-space: normal; } }
```

### B. Crear Componente `src/components/AssessmentCard.jsx`

```jsx
import React from 'react';
import './AssessmentCard.css';

const AssessmentCard = () => {
    const items = [
        { label: "Organización", text: "Tareas, jornada, funciones y carga." },
        { label: "Proceso", text: "Técnicas, fuentes de emisión y producción." },
        { label: "Entorno", text: "Distribución, orden y limpieza." },
        { label: "Medidas", text: "Ventilación, procedimientos y zonas." },
        { label: "Temporalidad", text: "Duración, frecuencia y variaciones." },
        { label: "Personal", text: "Comportamiento y hábitos de trabajo." }
    ];

    return (
        <div className="assessment-card">
            <header className="assess-header">
                <h2 className="assess-title">1. Caracterización básica</h2>
                <div className="assess-badge"><span>📚</span> Norma UNE 689</div>
            </header>
            <div className="assess-content-box">
                <h3 className="assess-subtitle">ℹ️ Criterios técnicos básicos (Factores de Exposición):</h3>
                <div className="assess-grid">
                    {items.map((item, i) => (
                        <div key={i} className="assess-item">
                            <span className="item-bullet">•</span>
                            <span className="item-label">{item.label}:</span>
                            <span className="item-text">{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default AssessmentCard;
```
