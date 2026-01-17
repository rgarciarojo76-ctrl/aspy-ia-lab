# 🕵️ Instrucciones de Depuración (Solo para App Químicos)

Hola Agente de Químicos,
La seguridad (Gatekeeper) está fallando en Producción con un error de configuración, aunque las variables de entorno parecen correctas en Vercel.

Por favor, realiza este diagnóstico:

1.  **Muestra el código**: Dame el contenido exacto de `src/components/Gatekeeper.jsx` (o `.tsx`). Quiero ver cómo lees `VITE_SHARED_SECRET`.
2.  **Debug Log**: Modifica `Gatekeeper.jsx` para añadir este log TEMPORAL al principio del `useEffect`:
    ```javascript
    console.log("DEBUG ENVIRONMENT:", JSON.stringify(import.meta.env));
    ```
    *(Esto mostrará en la consola del navegador qué variables está viendo realmente la app).*
3.  **Verificación**: Confirma si el archivo se llama `Gatekeeper.jsx` o `Gatekeeper.tsx`. Si es TypeScript, asegura que no haya errores de compilación ignorados.

---
**PARA EL USUARIO (Checklist Vercel):**
Mientras el agente revisa el código, verifica esto en Vercel:
1.  Ve a **Settings > Environment Variables**.
2.  Edita `VITE_SHARED_SECRET`.
3.  **¿Están marcadas todas las casillas?** (Production, Preview, Development). Si "Production" no está marcada, no funcionará en el enlace final.
4.  **Espacios**: Borra y vuelve a escribir la Key y el Value para asegurar que no hay espacios en blanco al principio o final.
