# 🚀 INSTRUCCIONES DE INTEGRACIÓN PARA EL AGENTE CREADOR DE LA APP

Hola Agente. Tu nueva aplicación está alojada en: `https://gestion-laboratorio-higiene.vercel.app/`.
Para que el usuario pueda integrarla correctamente en el **Portal Principal de IA LAB**, debes realizar las siguientes 3 tareas obligatorias en tu código.

---

## 1. Implementar la Seguridad (Gatekeeper) - OBLIGATORIO

Nadie puede entrar a tu app directamente; deben hacerlo a través del Portal Principal usando un sistema de Handshake Seguro.

1.  **Vercel Environment Variable**: Ve a los ajustes de tu proyecto en Vercel (`gestion-laboratorio-higiene`) -> Settings -> Environment Variables. Añade:
    - **Key**: `VITE_SHARED_SECRET`
    - **Value**: `ASPY-SECRET-HANDSHAKE-2026`
    - _(Haz un **REDEPLOY** en Vercel después de añadirla)._
2.  **Código del Gatekeeper**: Crea un componente `Gatekeeper.jsx` o `.tsx` en tu proyecto. Este componente lee los parámetros `?t=` y `?h=` de la URL y los compara usando HMAC SHA-256 contra la clave compartida. Si el usuario intenta entrar sin los parámetros del portal, redirígelos a `https://direccion-tecnica-ia-lab.vercel.app/`.
3.  Envuelve tu aplicación principal enteramente dentro de este componente `<Gatekeeper>`.

---

## 2. Adaptar la Identidad Visual (Rebranding)

Para que tu app encaje en el portal, debes aplicar estos estilos CSS globales obligatorios:

```css
:root {
    --color-primary: #0099cc; /* Cyan corporativo */
    --color-text-main: #4a4a4a; /* Texto gris oscuro */
    --color-background: #f8f9fa; /* Fondo gris muy claro */
    --color-white: #ffffff;
    --font-family: 'Inter', system-ui, -apple-system, sans-serif;
}
body {
    background-color: var(--color-background);
    font-family: var(--font-family);
    color: var(--color-text-main);
}
```

Además, en el **Header** de tu aplicación debes incluir la siguiente "Píldora de Advertencia" usando este CSS:

```css
.status-disclaimer {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: linear-gradient(to right, #fffbeb, #fefce8);
    border: 1px solid #fde68a;
    padding: 0.4rem 1rem;
    border-radius: 99px;
    max-width: fit-content;
    margin: 0 auto;
}
.disclaimer-title {
    font-weight: 700;
    color: #b45309;
    font-size: 0.7rem;
    text-transform: uppercase;
}
.disclaimer-body {
    font-size: 0.75rem;
    color: #92400e;
    font-weight: 500;
}
```

_(Usa un icono de alerta `<AlertTriangle />` al lado del texto "AVISO" en la píldora)._

---

## 3. Generar JSON de Integración (Último Paso)

Una vez hayas implementado el Gatekeeper, actualizado el diseño y desplegado la versión final en Vercel, copia y pega en el chat el siguiente bloque RELLENANDO tus datos. El usuario se lo pasará al Agente del Portal para conectarla.

```json
{
    "new_app_integration": {
        "title": "[Nombre visible y descriptivo de tu App]",
        "description": "[Descripción corta]",
        "url": "https://gestion-laboratorio-higiene.vercel.app/",
        "image_filename": "dashboard-[kebab-case-nombre-app].png"
    }
}
```

_Nota Final: Recuerda generar la imagen de portada de 600x400 para que el Agente del Portal pueda usarla._
