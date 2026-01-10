import riskImg from './assets/risk-analysis.png';
import manualImg from './assets/manual-instructions-v2.png';
import chemicalImg from './assets/chemical-analysis.png';

export const APPS_CONFIG = [
  {
    id: 'ia-risk-analysis',
    name: 'Análisis imagen IA Factores de Riesgo',
    url: 'https://aspy-risk-analysis.vercel.app/',
    image: riskImg,
    active: true,
  },
  {
    id: 'manual-instructions',
    name: 'Análisis manual de instrucciones equipos de trabajo',
    url: 'https://risk-analysis-six.vercel.app/',
    image: manualImg,
    active: true,
  },
  {
    id: 'chemical-products',
    name: 'Análisis productos químicos cancerígenos',
    url: 'https://chemical-products.vercel.app/',
    image: chemicalImg,
    active: true,
  }
];

export const AUTH_CREDENTIALS = {
  username: '4667',
  password: 'Rg248582'
};
