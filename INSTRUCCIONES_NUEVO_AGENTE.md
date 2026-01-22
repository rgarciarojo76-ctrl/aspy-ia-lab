# 🤖 INSTRUCCIONES AUTOMATIZADAS PARA SUBIDA Y DESPLIEGUE (AGENT COPY-PASTE)

Hola Agente. Sigue estas instrucciones paso a paso para entregar y desplegar el proyecto.

## FASE 1: Preparar GIT (Automatizable)
Ejecuta estos comandos en la terminal de tu entorno de trabajo:

```bash
# 1. Inicializar repositorio (si no existe)
git init

# 2. Configurar usuario genérico (para evitar bloqueos)
git config user.name "AI Agent"
git config user.email "agent@example.com"

# 3. Preparar archivos
git add .
git commit -m "feat: Initial commit - Project setup"

# 4. Renombrar rama principal a 'main'
git branch -M main
```

## FASE 2: Instrucciones para el USUARIO (Lo que tú no puedes hacer)
Dile al usuario EXACTAMENTE esto:

> 🛑 **ACCIÓN MANUAL REQUERIDA (Solo dura 2 minutos)**
>
> **Paso 1: GitHub**
> 1. Crea un **Nuevo Repositorio** vacío en GitHub.
> 2. Copia la **URL HTTPS** del repositorio (ej: `https://github.com/usuario/mi-repo.git`).
> 3. Pégamela aquí en el chat para que yo suba el código.
>
> **Paso 2: Vercel**
> 1. Ve a Vercel dashboard y haz click en **"Add New Project"**.
> 2. Importa el repositorio que acabamos de crear.
> 3. **IMPORTANTE**: En "Environment Variables", añade esta clave:
>    - **Key**: `VITE_SHARED_SECRET`
>    - **Value**: `ASPY-SECRET-HANDSHAKE-2026`
> 4. Haz click en **Deploy**.
> 5. Pásame la **URL del dominio** (ej: `https://mi-app.vercel.app`) cuando termine.

## FASE 3: Subida del Código (Cuando el Usuario te de la URL del repo)
Cuando el usuario te pegue la URL del repo, ejecuta:

```bash
git remote add origin [URL_DEL_REPO]
git push -u origin main
```

## FASE 4: Integración en Portal IA (Cuando el Usuario te de la URL de Vercel)
Una vez tengas la URL de producción, genera el siguiente JSON y pídele al usuario que se lo pase a **Rubén (Agente del Portal)** para añadir el acceso:

```json
{
  "new_app_integration": {
    "title": "[Nombre visible de tu App]",
    "description": "[Descripción corta]",
    "url": "[URL_DE_VERCEL]",
    "image_filename": "dashboard-card-[tu-app].png"
  }
}
```
*Nota: Genera también una imagen de 600x400px para la tarjeta del dashboard usando tu herramienta de generación de imágenes y guárdala.*

## FASE 5: Estándar de Diseño (Obligatorio)

Para mantener la coherencia con el resto del Portal (ver capturas proporcionadas por el usuario), tu aplicación debe seguir **estrictamente** este Sistema de Diseño.

### A. Paleta de Colores Corporativa (CSS)
Copia estas variables en tu archivo CSS global (`index.css` o `App.css`):

```css
:root {
  /* Colors */
  --color-primary: #0099cc;       /* Cyan corporativo */
  --color-primary-dark: #007bb5;  /* Hover/Active states */
  --color-text-main: #4a4a4a;     /* Texto principal (Gris oscuro, no negro) */
  --color-text-light: #888888;    /* Texto secundario */
  --color-background: #f8f9fa;    /* Fondo general */
  --color-white: #ffffff;         /* Fondo tarjetas */
  --color-border: #e6e6e6;        /* Bordes sutiles */
  
  /* Fonts */
  --font-family: 'Inter', system-ui, -apple-system, sans-serif;
}

body {
    background-color: var(--color-background);
    color: var(--color-text-main);
    font-family: var(--font-family);
}
```

### B. Header Estándar
Tu aplicación debe tener un Header blanco, con sombra sutil (`box-shadow: 0 1px 2px rgba(0,0,0,0.03)`).
**IMPORTANTE**: Debes incluir la "Píldora de Advertencia" (Premium Pill) en el centro del header.

**CSS de la Píldora de Advertencia:**
```css
/* Warning Pill Badge */
.status-disclaimer {
    display: flex; align-items: center; gap: 0.75rem;
    background: linear-gradient(to right, #fffbeb, #fefce8);
    border: 1px solid #fde68a;
    padding: 0.4rem 1rem;
    border-radius: 99px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    max-width: fit-content;
}
.disclaimer-icon { color: #eab308; } /* Usa lucide-react <AlertTriangle /> */
.disclaimer-title { font-weight: 700; color: #b45309; font-size: 0.7rem; text-transform: uppercase; }
.disclaimer-body { font-size: 0.75rem; color: #92400e; font-weight: 500; }
```

### C. Contenedores
Usa tarjetas blancas con bordes redondeados para el contenido principal:
```css
.card {
    background: var(--color-white);
    border-radius: 8px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
    padding: 2rem;
    border: 1px solid var(--color-border);
}
```

Si el usuario te ha pasado capturas de referencia, **IMÍTALAS** pixel-perfect.
