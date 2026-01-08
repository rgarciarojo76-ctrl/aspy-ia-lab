import riskImg from './assets/risk-analysis.png';
import manualImg from './assets/manual-instructions-v2.png';
import chemicalImg from './assets/chemical-analysis.png';

export const APPS_CONFIG = [
  {
    id: 'ia-risk-analysis',
    name: 'Análisis imagen IA Factores de Riesgo',
    url: 'https://productos-quimicos-j8mw-kp7228yja-rgarciarojo76-ctrls-projects.vercel.app/',
    image: riskImg,
    active: true,
  },
  {
    id: 'manual-instructions',
    name: 'Análisis manual de instrucciones equipos de trabajo',
    url: 'https://analisis-de-riesgos-5s6f8q2o4-rgarciarojo76-ctrls-projects.vercel.app/',
    image: manualImg,
    active: true,
  },
  {
    id: 'chemical-products',
    name: 'Análisis productos químicos cancerígenos',
    url: 'https://productos-quimicos-14lr-pcs5r6wrf-rgarciarojo76-ctrls-projects.vercel.app/',
    image: chemicalImg,
    active: true,
  }
];

export const AUTH_CREDENTIALS = {
  username: '4667',
  password: 'Rg248582'
};
