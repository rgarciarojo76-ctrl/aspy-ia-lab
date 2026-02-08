# 🤖 INSTRUCCIONES PARA DESPLIEGUE INDEPENDIENTE (AGENT COPY-PASTE)

Hola Agente. El usuario quiere crear una **WebApp Standalone** (fuera del portal principal).
Sigue estas instrucciones para garantizar una entrega rápida y automatizada.

## ⚡ TUS AXIOMAS (Protocolo de Trabajo):

1.  **Velocidad**: Implementa y despliega. No preguntes por pequeñeces.
2.  **Autonomía**: Usa GIT para todo. `git add` + `git commit` + `git push`.
3.  **Guiado Perfecto**: El usuario solo debe hacer lo que TÚ no puedes (crear el repo en GitHub/Vercel).

---

## FASE 1: Preparar GIT (Automatizable por TI)

Ejecuta estos comandos en tu terminal inmediatamente al empezar:

```bash
# 1. Inicializar repositorio
git init

# 2. Configurar usuario genérico
git config user.name "AI Agent"
git config user.email "agent@example.com"

# 3. Primer commit
git add .
git commit -m "feat: Initial commit - Project setup"

# 4. Rama main
git branch -M main
```

## FASE 2: Guía para el USUARIO (Copia y Pega esto en el chat)

Dile al usuario **EXACTAMENTE** esto para que te desbloquee el despliegue:

> 🚀 **PARA PUBLICAR LA APP, NECESITO QUE HAGAS ESTO (2 MINUTOS):**
>
> **1. GitHub (Crear Repo)**
>
> - Ve a [GitHub New Repo](https://github.com/new).
> - Crea un repositorio **público** o **privado** (como prefieras).
> - **NO** lo inicialices con README ni .gitignore (vacío).
> - 👉 **PÉGAME AQUÍ LA URL HTTPS** (ej: `https://github.com/usuario/repo.git`).
>
> **2. Vercel (Publicar)**
>
> - _(Haz esto DESPUÉS de que yo suba el código)_.
> - Ve a [Vercel Dashboard](https://vercel.com/new).
> - Importa el repositorio que acabas de crear.
> - Dale a **Deploy**.
> - 👉 **PÁSAME LA URL DEL DOMINIO** (ej: `https://mi-app.vercel.app`) para verificarla.

## FASE 3: Subida del Código (TÚ)

En cuanto el usuario te de la URL del repo, EJECUTA:

```bash
git remote add origin [URL_DEL_REPO]
git push -u origin main
```

---

## FASE 4: Estándar de Diseño (Recomendado)

Aunque sea una app independiente, se recomienda mantener la coherencia visual "Dirección Técnica".

**Colores y Estilo:**

- **Primary**: `#0099cc` (Cyan).
- **Background**: `#f8f9fa` (Gris muy claro).
- **Cards**: Blancas, bordes redondeados, sombra suave.
- **Header**: Blanco, limpio, con el título de la app.

_Si el usuario te pasa capturas de referencia, imítalas._
