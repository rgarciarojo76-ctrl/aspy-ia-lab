# 🛡️ Protocolo de Seguridad Unificado (ENS - Nivel Alto)

## 🚨 Análisis de Seguridad: ¿Qué método usar?
Existen dos opciones sobre la mesa:
1.  **Token Estático (`?k=Contraseña`)**: ❌ **INSEGURO**. La contraseña viaja en la URL, queda en el historial y si se copia el enlace, el acceso es permanente.
2.  **Firma Temporal HMAC (`?t=Timestamp&h=Firma`)**: ✅ **SEGURO**. El enlace caduca a los 60 segundos. Si alguien lo roba, no sirve.

**Decisión**: Para cumplir con el Esquema Nacional de Seguridad (ENS), **TODAS las Apps deben usar el Método 2 (HMAC).**

---

## 🛠️ Instrucciones para Agentes (Risk, Manuals, Chemicals)

Por favor, implementa (o revierte) la seguridad siguiendo ESTRICTAMENTE estos pasos.

### 1. Variables de Entorno (Vercel)
Estandarizamos la clave para todos.
*   **Key**: `VITE_SHARED_SECRET`  (⚠️ Obligatorio el prefijo `VITE_`)
*   **Value**: `ASPY-SECRET-HANDSHAKE-2026`

> **¡IMPORTANTE!** Después de guardar la variable, debes ir a **Deployments** y hacer **REDEPLOY** al último commit. Si no, la app no leerá la clave nueva.

### 2. Código del `Gatekeeper.jsx`
Usa este componente estándar que valida la firma HMAC y la caducidad temporal:

```jsx
import React, { useEffect, useState } from 'react';

// Debe coincidir con la variable de entorno en Vercel
const SHARED_SECRET = import.meta.env.VITE_SHARED_SECRET; 

const Gatekeeper = ({ children }) => {
    const [accessGranted, setAccessGranted] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const verifyToken = async () => {
            // 1. Validar que tenemos el secreto
            if (!SHARED_SECRET) {
                console.error("CRITICAL: VITE_SHARED_SECRET is missing.");
                setError("Error de Configuración de Seguridad (Falta Secreto).");
                return;
            }

            // 2. Leer parámetros de URL
            const params = new URLSearchParams(window.location.search);
            const timestamp = params.get('t');
            const signature = params.get('h');

            // 3. Validación básica
            if (!timestamp || !signature) {
                // Si llegas sin pase, te mando al Portal
                window.location.href = 'https://direccion-tecnica-ia-lab.vercel.app';
                return;
            }

            // 4. Protección Anti-Replay (60 segundos de validez)
            const now = Date.now();
            const timeDiff = now - parseInt(timestamp);
            if (timeDiff > 60000 || timeDiff < -5000) { // Margen de 5s por si el reloj cliente va mal
                setError("⛔ CRÍTICO: El enlace ha caducado. Vuelve a entrar desde el Portal.");
                return;
            }

            // 5. Verificación Criptográfica (HMAC SHA-256)
            try {
                const encoder = new TextEncoder();
                const key = await crypto.subtle.importKey(
                    'raw',
                    encoder.encode(SHARED_SECRET),
                    { name: 'HMAC', hash: 'SHA-256' },
                    false,
                    ['verify']
                );
                
                // Regenerar firma esperada
                const verified = await crypto.subtle.verify(
                    'HMAC',
                    key,
                    hexToBuf(signature), // Convierte el hex de la URL a bytes
                    encoder.encode(timestamp) // Firma el timestamp
                );

                if (verified) {
                    setAccessGranted(true);
                    // Limpieza visual de la URL (Seguridad por oscuridad adicional)
                    window.history.replaceState({}, document.title, window.location.pathname);
                } else {
                    setError("⛔ ACCESO DENEGADO: Firma Digital Inválida.");
                }
            } catch (e) {
                console.error(e);
                setError("Error interno de criptografía.");
            }
        };

        // Helper para convertir Hex a Buffer
        function hexToBuf(hex) {
            const bytes = new Uint8Array(hex.length / 2);
            for (let i = 0; i < hex.length; i += 2) {
                bytes[i / 2] = parseInt(hex.substring(i, i + 2), 16);
            }
            return bytes;
        }

        verifyToken();
    }, []);

    if (error) {
        return (
            <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#fef2f2', color: '#991b1b', fontFamily: 'sans-serif' }}>
                <h1 style={{ fontSize: '2em', marginBottom: '10px' }}>🛡️ Seguridad Activada</h1>
                <h3 style={{ fontWeight: 'normal' }}>{error}</h3>
                <a href="https://direccion-tecnica-ia-lab.vercel.app" style={{ marginTop: '20px', padding: '10px 20px', background: '#dc2626', color: 'white', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold' }}>
                    Volver al Portal Oficial
                </a>
            </div>
        );
    }

    if (!accessGranted) return null; // O un spinner de carga

    return children;
};

export default Gatekeeper;
```
