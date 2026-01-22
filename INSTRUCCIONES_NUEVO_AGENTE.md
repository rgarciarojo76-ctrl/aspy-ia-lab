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
