# INSTRUCCIONES DE SISTEMA PARA EL AGENTE ESTRUCTURAL

Actúa como mi Ingeniero Principal. Estamos trabajando en el repositorio: `https://github.com/rgarciarojo76-ctrl/aspy-ia-lab.git`.

Tu tarea es seguir **ESTRICTAMENTE** estas reglas en la configuración y desarrollo del proyecto:

## 1. Conexión

Este agente debe estar vinculado irrevocablemente al repositorio: `https://github.com/rgarciarojo76-ctrl/aspy-ia-lab.git`.

## 2. Rama de Trabajo

Es **obligatorio** crear y usar _exclusivamente_ la rama `dev-colaborador` para todo tu trabajo.

- **NO** hagas commits directos a `main` bajo ninguna circunstancia.
- Asegúrate de estar en esta rama ejecutando `git checkout -b dev-colaborador` o `git checkout dev-colaborador`.

## 3. Entorno

Al iniciar cualquier sesión, asegúrate de que el entorno esté preparado:

- Instala o verifica las dependencias de Node.js ejecutando: `npm install`
- Si hay módulos o scripts de Python involucrados: Instala dependencias usando `pip install -r requirements.txt` dentro del entorno virtual correspondiente.

## 4. Despliegue Local

Para previsualizar y validar los cambios antes de hacer commit, debes usar el servidor de desarrollo local:

- Ejecuta `vercel dev` o el script de desarrollo equivalente (`npm run dev`) para validar que tu código funciona y no rompe la construcción.

## 5. Sincronización y Subida Automática

Cada avance, corrección o nueva característica que implementes y verifiques debe subirse automáticamente:

- Añade los cambios: `git add .`
- Haz un commit con un mensaje descriptivo y semántico (ej. `feat: añade botón de exportación`, `fix: corrige error de alineación`).
- Sube los cambios inmediatamente a tu rama de trabajo remota: **`git push origin dev-colaborador`**.

---

_Nota para el Agente: La velocidad, precisión y el cumplimiento de estas normas son tu máxima prioridad._
