# 🚀 Guía de Integración para Nueva App (Dirección Técnica IA LAB)

Hola Agente,
Bienvenido al ecosistema. Para integrar tu nueva aplicación en el Portal Principal, debes seguir estos 4 pasos obligatorios.

---

## 1. Rebranding (Identidad Visual)

Debes alinear la identidad visual con el resto de aplicaciones:
1.  **Nombre del Proyecto**: Usa "Dirección Técnica" en lugar de "ASPY" en todos los títulos visibles.
2.  **Logo**:
    *   Sustituye cualquier logo antiguo por el nuevo `logo-direccion-tecnica.jpg`.
    *   Usa el logo cuadrado (`logo-square.jpg`) para el Favicon.
    *(Pídele al usuario que te suba estas dos imágenes si no las tienes).*

---

## 2. Seguridad ENS (Gatekeeper)

**IMPORTANTE**: Nadie puede entrar a tu app directamente. Deben pasar por el Portal. Implementa el componente de seguridad **Gatekeeper**.

### A. Variable de Entorno (Vercel)
Añade esta variable en la configuración de Vercel de tu proyecto:
*   **Key**: `VITE_SHARED_SECRET`
*   **Value**: `ASPY-SECRET-HANDSHAKE-2026`

> ⚠️ **CRÍTICO:** Después de añadirla, debes hacer **REDEPLOY** en Vercel. Si no, la app fallará.

### B. Código del Componente `Gatekeeper`
Crea el archivo `src/components/Gatekeeper.jsx` (o `.tsx`).

**Versión JavaScript (.jsx):**
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
                setError("Error de Configuración de Seguridad");
                return;
            }

            const params = new URLSearchParams(window.location.search);
            const timestamp = params.get('t');
            const signature = params.get('h');

            if (!timestamp || !signature) {
                window.location.href = 'https://direccion-tecnica-ia-lab.vercel.app';
                return;
            }

            const now = Date.now();
            const timeDiff = now - parseInt(timestamp);
            if (timeDiff > 60000 || timeDiff < -5000) {
                setError("⛔ Enlace Caducado. Vuelve al Portal.");
                return;
            }

            try {
                const encoder = new TextEncoder();
                const key = await crypto.subtle.importKey(
                    'raw',
                    encoder.encode(SHARED_SECRET),
                    { name: 'HMAC', hash: 'SHA-256' },
                    false,
                    ['verify']
                );
                const verified = await crypto.subtle.verify(
                    'HMAC',
                    key,
                    hexToBuf(signature),
                    encoder.encode(timestamp)
                );

                if (verified) {
                    setAccessGranted(true);
                    window.history.replaceState({}, document.title, window.location.pathname);
                } else {
                    setError("⛔ Acceso Denegado: Firma Inválida.");
                }
            } catch (e) {
                console.error(e);
                setError("Error de Verificación.");
            }
        };

        function hexToBuf(hex) {
            const bytes = new Uint8Array(hex.length / 2);
            for (let i = 0; i < hex.length; i += 2) {
                bytes[i / 2] = parseInt(hex.substring(i, i + 2), 16);
            }
            return bytes;
        }

        verifyToken();
    }, []);

    if (error) return <div style={{color:'red', padding:'20px', textAlign:'center'}}><h1>🛡️ {error}</h1></div>;
    if (!accessGranted) return null;
    return children;
};
export default Gatekeeper;
```

*(Si usas TypeScript, añade los tipos `ReactNode` y `React.FC` correspondientes).*

### C. Proteger la App
Envuelve tu aplicación principal con este componente:
```jsx
<Gatekeeper>
  <App />
</Gatekeeper>
```

---

## 3. Despliegue en Vercel

Configura tu proyecto en Vercel con este patrón de nombres para mantener la coherencia:
1.  **Project Name**: `direccion-tecnica-[nombre-de-tu-app]`
2.  **Domain**: `direccion-tecnica-[nombre-de-tu-app].vercel.app`

---

## 4. Reporte Final (Entregar al Usuario)

Una vez hayas terminado, **genera este bloque JSON** y dáselo al usuario para que pueda añadirte al Portal Principal:

```json
{
  "integration_request": {
    "name": "Nombre visible de tu App",
    "id": "identificador-unico-kebab-case",
    "url": "https://direccion-tecnica-[tu-nombre].vercel.app/",
    "active": true
  }
}
```
*(Además, recuerda darle una captura de pantalla bonita de tu "Card" para el menú).*
