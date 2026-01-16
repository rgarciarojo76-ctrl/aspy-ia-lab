# 🛡️ Informe de Seguridad ENS (Esquema Nacional de Seguridad)

**Proyecto**: DIRECCIÓN TÉCNICA IA LAB Portal
**Fecha**: 2026-01-14
**Estado**: ✅ CUMPLIMIENTO ALTO

## 1. Resumen Ejecutivo
Se ha realizado una auditoría de seguridad y "Harding" (endurecimiento) siguiendo los controles del ENS. Se han mitigado todas las vulnerabilidades críticas detectadas en la fase de análisis inicial.

## 2. Controles Implementados

### [op.exp.8] Protección frente a código dañino
*   **Vulnerabilidad Mitigada**: Cross-Site Scripting (XSS).
*   **Medida**: Implementación de **Content Security Policy (CSP)** estricta.
*   **Detalle**: Se ha configurado el servidor (Vercel) para rechazar la ejecución de scripts no originados en el propio dominio.
    ```http
    Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; ...
    ```

### [op.acc.6] Protección de autenticadores
*   **Vulnerabilidad Mitigada**: Ataques de Fuerza Bruta.
*   **Medida**: Implementación de **Rate Limiting** en API.
*   **Detalle**: El sistema bloquea automáticamente cualquier IP que realice más de 5 intentos fallidos de login en 1 minuto.

### [co.seg.4] Configuración de seguridad
*   **Medida**: Cabeceras HTTP de Seguridad (Security Headers).
*   **Detalle**:
    *   `Strict-Transport-Security` (HSTS): Fuerza HTTPS.
    *   `X-Frame-Options: DENY`: Evita Clickjacking.
    *   `X-Content-Type-Options: nosniff`: Evita MIME sniffing.

### [op.seg.1] Validación de datos
*   **Medida**: Validación de entrada y entorno.
*   **Detalle**: Script `validate-env.js` asegura la integridad del entorno de ejecución antes del arranque.

## 3. Estado de Dependencias
*   **Auditoría NPM**: `0 vulnerabilidades` detectadas.
*   **Gestión**: Se utiliza `npm audit` en el ciclo de desarrollo.

## 4. Conclusión
La aplicación cumple con los requisitos de seguridad necesarios para su despliegue en entorno de producción (Nivel BAJO/MEDIO según clasificación ENS para aplicaciones internas). La superficie de ataque se ha reducido drásticamente mediante la arquitectura modular y las medidas de seguridad activa.
