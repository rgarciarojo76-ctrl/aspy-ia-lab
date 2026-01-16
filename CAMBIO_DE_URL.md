# 🌐 Cómo cambiar la URL del proyecto (Eliminar "ASPY")

Como la aplicación está alojada en **Vercel**, el dominio `https://aspy-ia-lab.vercel.app` se gestiona desde el panel de control, no desde el código.

Sigue estos pasos para renombrarlo a algo como `direccion-tecnica-ia-lab.vercel.app`:

## Pasos en Vercel

1.  Entra en [vercel.com](https://vercel.com) y haz login.
2.  Selecciona el proyecto **aspy-ia-lab**.
3.  Ve a la pestaña **Settings** (Configuración) en la parte superior.
4.  En la sección **General**, busca "Project Name".
    *   Cámbialo a: `direccion-tecnica-ia-lab`.
    *   **ESTADO: HECHO** (Ya actualizado en el código).
5.  Para cambiar el dominio activo YA:
    *   Ve a **Domains** en el menú lateral izquierdo.
    *   Haz clic en **Edit** junto al dominio actual.
    *   Escribe el nuevo nombre (ej: `direccion-tecnica-ia-lab.vercel.app`) y guarda.

## Nota Importante
Al cambiar la URL, recuerda actualizar el archivo `src/config.js` en este código si alguna otra app apunta hacia aquí, para que los enlaces no se rompan.
