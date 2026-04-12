# 🤖 PROMPT PARA EL AGENTE DE LA NUEVA APP (COPIAR Y PEGAR)

Hola. Vas a desarrollar/integrar una nueva aplicación para el ecosistema **Dirección Técnica IA LAB**. Sigue estas instrucciones al pie de la letra para garantizar una entrega profesional, segura y automatizada.

---

## ⚡ TUS AXIOMAS (Protocolo de Trabajo)
1. **Velocidad y Autonomía**: Implementa, despliega y sube. No preguntes por pequeñeces.
2. **Identidad**: Usa siempre "Dirección Técnica" (no ASPY) en títulos y logos.
3. **Seguridad por Diseño**: Nadie entra a la app fuera del Portal.

---

## FASE 1: Preparación Git (Ejecuta esto en tu Terminal)
```bash
git init
git config user.name "AI Agent"
git config user.email "agent@example.com"
git add .
git commit -m "feat: Initial commit - Project setup for DT IA LAB"
git branch -M main
```

---

## FASE 2: Guía para el USUARIO (Pídele esto al Humano)
Copia y pega este mensaje al usuario inmediatamente:

> 🚀 **Agente listo. Para publicar la app, necesito 2 cosas (2 minutos):**
>
> 1. **GitHub**: Crea un repositorio vacío en GitHub y pásame la **URL HTTPS** (ej: `https://github.com/usuario/repo.git`).
> 2. **Vercel**: Ve a [Vercel](https://vercel.com/new), importa el repo y añade esta Variable de Entorno:
>    - **Key**: `VITE_SHARED_SECRET`
>    - **Value**: `ASPY-SECRET-HANDSHAKE-2026`
>    - *Haz click en **Deploy** y pásame la URL final.*

---

## FASE 3: Implementación de Seguridad (Gatekeeper)
Crea `src/components/Gatekeeper.jsx` y envuelve tu `<App />` con él. Este código verifica que el usuario viene del Portal.

```jsx
import React, { useEffect, useState } from 'react';

const SHARED_SECRET = import.meta.env.VITE_SHARED_SECRET;

const Gatekeeper = ({ children }) => {
    const [accessGranted, setAccessGranted] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const verifyToken = async () => {
            if (!SHARED_SECRET) {
                setError("Error de Configuración: Falta Secret");
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
                    'raw', encoder.encode(SHARED_SECRET),
                    { name: 'HMAC', hash: 'SHA-256' }, false, ['verify']
                );
                const verified = await crypto.subtle.verify(
                    'HMAC', key, hexToBuf(signature), encoder.encode(timestamp)
                );

                if (verified) {
                    setAccessGranted(true);
                    window.history.replaceState({}, document.title, window.location.pathname);
                } else {
                    setError("⛔ Acceso Denegado: Firma Inválida.");
                }
            } catch (e) {
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

    if (error) return <div style={{color:'#dc2626', padding:'40px', textAlign:'center'}}><h1>🛡️ {error}</h1></div>;
    if (!accessGranted) return null;
    return children;
};

export default Gatekeeper;
```

---

## FASE 4: Estándar Visual (CSS Obligatorio)
Tu app debe lucir integrada. Copia estas variables en tu `index.css`:

```css
:root {
  --color-primary: #0099cc;       /* Cyan DT */
  --color-primary-dark: #007bb5;
  --color-text-main: #4a4a4a;
  --color-background: #f8f9fa;
  --color-white: #ffffff;
  --font-family: 'Inter', system-ui, sans-serif;
}

/* Warning Pill (Premium Pill) - Ponla en tu Header */
.status-disclaimer {
    display: flex; align-items: center; gap: 0.75rem;
    background: linear-gradient(to right, #fffbeb, #fefce8);
    border: 1px solid #fde68a;
    padding: 0.4rem 1rem; border-radius: 99px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}
```

---

## FASE 5: Entrega Final (Handover)
Cuando la app esté en Vercel, genera este JSON para Rubén (el Agente del Portal) y genera una imagen de portada (600x400) para la tarjeta:

```json
{
  "new_app_integration": {
    "title": "[Nombre de tu App]",
    "description": "[Descripción corta]",
    "url": "[URL_DE_VERCEL]",
    "image_filename": "dashboard-card-[nombre-app].png"
  }
}
```
