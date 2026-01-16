import riskImg from './assets/risk-analysis.png';
import manualImg from './assets/manual-instructions-v2.png';
import chemicalImg from './assets/chemical-analysis.png';

export const PORTAL_URL = 'https://direccion-tecnica-ia-lab.vercel.app/';

export const APPS_CONFIG = [
  {
    id: 'ia-risk-analysis',
    name: 'Análisis imagen IA Factores de Riesgo',
    url: 'https://direccion-tecnica-risk-analysis.vercel.app/',
    image: riskImg,
    active: true,
  },
  {
    id: 'manual-instructions',
    name: 'Análisis manual de instrucciones equipos de trabajo',
    url: 'https://direccion-tecnica-manuals.vercel.app/',
    image: manualImg,
    active: true,
  },
  {
    id: 'chemical-products',
    name: 'Análisis productos químicos cancerígenos',
    url: 'https://direccion-tecnica-chemicals.vercel.app/',
    image: chemicalImg,
    active: true,
  }
];

// Credentials are now handled server-side via Vercel Environment Variables.
export const AUTH_CREDENTIALS = [];
