import fs from 'fs';
import path from 'path';

const envExamplePath = path.resolve(process.cwd(), '.env.example');
const envLocalPath = path.resolve(process.cwd(), '.env.local'); // Or .env

if (!fs.existsSync(envExamplePath)) {
    console.warn('⚠️  Advertencia: No se encontró .env.example. No se pueden validar las variables.');
    process.exit(0);
}

// Simple parser for env files
const parseEnv = (content) => {
    return content
        .split('\n')
        .map(line => line.trim())
        .filter(line => line && !line.startsWith('#'))
        .map(line => line.split('=')[0]);
};

const exampleKeys = parseEnv(fs.readFileSync(envExamplePath, 'utf-8'));

if (!fs.existsSync(envLocalPath)) {
    console.error('\x1b[31m%s\x1b[0m', '⛔ ERROR FATAL: No tienes archivo .env.local');
    console.log('   Por favor, copia .env.example a .env.local y configura tus claves.');
    process.exit(1);
}

const localKeys = parseEnv(fs.readFileSync(envLocalPath, 'utf-8'));
const missingKeys = exampleKeys.filter(key => !localKeys.includes(key));

if (missingKeys.length > 0) {
    console.error('\x1b[31m%s\x1b[0m', '⛔ ERROR: Te faltan variables de entorno en .env.local:');
    missingKeys.forEach(key => console.log(`   - ${key}`));
    console.log('\n   Añádelas copiando los valores de referencia de .env.example');
    process.exit(1); // Stop the server start
}

console.log('\x1b[32m%s\x1b[0m', '✅ Entorno validado correctamente.');
