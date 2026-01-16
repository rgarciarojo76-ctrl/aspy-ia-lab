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

## 🔄 Renombrado de las Apps Externas
Para que los enlaces del Portal funcionen, debes renombrar las otras 3 apps en Vercel siguiendo el mismo proceso:

## 📋 Tabla de Copiar y Pegar (Evita Errores)
Para cada aplicación, hay dos campos que debes cambiar en Vercel. Son diferentes:

### 1. ESTA APP (Portal Principal)
| Campo | Valor a Copiar |
| :--- | :--- |
| **Project Name** | `direccion-tecnica-ia-lab` |
| **Domain Name** | `direccion-tecnica-ia-lab.vercel.app` |

### 2. APPS EXTERNAS
| Aplicación (Original) | Project Name (Sin .vercel.app) | Domain Name (CON .vercel.app) |
| :--- | :--- | :--- |
| **Risk Analysis** | `direccion-tecnica-risk-analysis` | `direccion-tecnica-risk-analysis.vercel.app` |
| **Manual Instructions** | `direccion-tecnica-manuals` | `direccion-tecnica-manuals.vercel.app` |
| **Chemical Products** | `direccion-tecnica-chemicals` | `direccion-tecnica-chemicals.vercel.app` |

### Pasos Recordatorios:
1.  **Project Name**: Configuración > General > "Project Name".
2.  **Domain**: Configuración > Domains > Botón "Edit" > Escribir el dominio COMPLETO.

## 💡 Recomendación: Redirección
Como se ve en tu captura, Vercel ha creado automáticamente una redirección (307) del dominio antiguo al nuevo.
**¡NO LO BORRES TODAVÍA!**
Déjalo así un tiempo. Esto asegura que si alguien entra en el enlace antiguo (`aspy-...`), será redirigido automáticamente al nuevo (`direccion-tecnica-...`). Puedes borrarlo en el futuro cuando estés seguro de que nadie usa la dirección vieja.
