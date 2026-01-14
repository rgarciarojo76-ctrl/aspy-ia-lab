# 👥 Guía de Colaboración - ASPY IA LAB

Esta guía explica cómo configurar el entorno de trabajo para que múltiples desarrolladores puedan trabajar en el proyecto simultáneamente.

## 1. Requisitos Previos
*   **Node.js**: v18 o superior.
*   **Git**: Instalado y configurado.
*   **Acceso al Repo**: Permisos de lectura/escritura en el repositorio de GitHub.

## 2. Configuración Inicial (Onboarding)

### Paso A: Clonar el Repositorio
```bash
git clone https://github.com/rgarciarojo76-ctrl/aspy-ia-lab.git
cd aspy-ia-lab
```

### Paso B: Instalar Dependencias
```bash
npm install
```

### Paso C: Configurar Variables de Entorno
⚠️ **IMPORTANTE**: Las contraseñas NO se suben a GitHub. Cada desarrollador debe tener su propio archivo `.env` local.

1.  Copia el archivo de ejemplo:
    ```bash
    cp .env.example .env.local
    ```
2.  Edita `.env.local` y pon los valores reales (pídeselos al administrador del proyecto o cópialos de Vercel).

**Variables Requeridas:**
*   `ADMIN_USER` / `ADMIN_PASS`: Credenciales maestras.
*   `AUTH_USERS`: JSON con la lista de usuarios (ver ejemplo en el archivo).
*   `SHARED_SECRET`: Clave secreta para firmar los tokens (debe coincidir con la de las apps externas).

## 3. Flujo de Trabajo (Workflow)

### Arrancar Servidor Local
```bash
npm run dev
# Accede a http://localhost:5173 (o el puerto que indique)
```
*Nota: Para probar la autenticación localmente, necesitas `vercel dev` o simular las Serverless Functions. Si solo tocas Frontend (React), puedes comentar temporalmente el login en `App.jsx` o usar credenciales mock.*

### Hacer Cambios
1.  Crea una rama para tu tarea: `git checkout -b feature/nueva-funcionalidad`
2.  Desarrolla y prueba.
3.  Sube tus cambios: `git push origin feature/nueva-funcionalidad`
4.  Crea un **Pull Request** en GitHub para revisar el código antes de mezclar a `main`.

## 4. Despliegue
El despliegue es automático en **Vercel** cuando se hace push a la rama `main`.
*   Si añades nuevas variables de entorno, recuerda añadirlas también en el panel de Vercel.
