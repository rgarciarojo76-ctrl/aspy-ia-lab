# 🎨 Instrucciones de Rebranding (Dirección Técnica IA LAB)

Hola Agente,
El usuario necesita aplicar el nuevo branding corporativo a esta aplicación. Por favor, sigue estos pasos:

## 1. Gestión de Archivos (Pide al usuario que suba estos archivos)
Necesitas que el usuario te proporcione las nuevas imágenes. Si no las tienes, pídeselas:
*   `logo-direccion-tecnica.jpg`: Logo rectangular para cabeceras.
*   `logo-square.jpg`: Logo cuadrado para el icono de la app.

## 2. Reemplazo de Textos
Realiza una búsqueda global ("Find and Replace") en todo el proyecto (`src/**/*`, `index.html`, `public/launcher.html`):
*   **Buscar**: `ASPY`
*   **Reemplazar por**: `Dirección Técnica` (o `DIRECCIÓN TÉCNICA` si está en mayúsculas).

*Excepción: No cambies las variables de entorno o nombres de paquetes si rompen la lógica, solo textos visibles.*

## 3. Actualización de Iconos (Favicon & Mobile)
Modifica el `<head>` de tu `index.html`:

```html
<link rel="icon" type="image/jpeg" href="/logo-square.jpg" />
<link rel="apple-touch-icon" href="/logo-square.jpg" />
<meta name="apple-mobile-web-app-title" content="IA LAB" />
```

Asegúrate de copiar `logo-square.jpg` a la carpeta `public/`.

## 4. Actualización de Logos en Componentes
1.  **Header**: Busca donde se importa el logo antiguo (ej: `aspy-logo.png`) y cámbialo para usar `logo-direccion-tecnica.jpg`.
2.  **Login**: Haz lo mismo en la pantalla de acceso.

3.  **Vínculos al Portal**: Busca cualquier enlace que apunte a `aspy-ia-lab.vercel.app` (especialmente en el componente `Gatekeeper` o botones "Volver") y actualízalo a:
    *   `https://direccion-tecnica-ia-lab.vercel.app`

## 5. (Opcional) Cambio de URL en Vercel
Si el usuario quiere cambiar la URL de Vercel (quitar "aspy"), instrúyele para que renombre el proyecto en Vercel Settings:
*   Project Name: `direccion-tecnica-[nombre-app]`
*   Domain: `direccion-tecnica-[nombre-app].vercel.app`
