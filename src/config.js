import riskImg from './assets/risk-analysis.png';
import manualImg from './assets/manual-instructions-v2.png';
import chemicalImg from './assets/chemical-analysis.png';

export const APPS_CONFIG = [
  {
    id: 'ia-risk-analysis',
    name: 'Análisis imagen IA Factores de Riesgo',
    url: 'http://localhost:5173/',
    image: riskImg,
    active: true,
  },
  {
    id: 'manual-instructions',
    name: 'Análisis manual de instrucciones equipos de trabajo',
    url: 'http://localhost:5174/',
    image: manualImg,
    active: true,
  },
  {
    id: 'chemical-products',
    name: 'Análisis productos químicos cancerígenos',
    url: 'http://localhost:5175/',
    image: chemicalImg,
    active: true,
  }
];

export const AUTH_CREDENTIALS = {
  username: '4667',
  password: 'Rg248582'
};
