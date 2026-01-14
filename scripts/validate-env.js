import fs from 'fs';
import path from 'path';

const envExamplePath = path.resolve(process.cwd(), '.env.example');
const envLocalPath = path.resolve(process.cwd(), '.env.local'); // Or .env

// 1. Check if example exists
if (!fs.existsSync(envExamplePath)) {
    console.warn('⚠️  Advertencia: No se encontró .env.example. No se pueden validar las variables.');
    process.exit(0);
}

const parseEnv = (content) => {
    return content
        .split('\n')
        .map(line => line.trim())
        .filter(line => line && !line.startsWith('#'))
        .map(line => line.split('=')[0]);
};

const exampleKeys = parseEnv(fs.readFileSync(envExamplePath, 'utf-8'));

// 2. Check if local .env exists
if (!fs.existsSync(envLocalPath)) {
    console.error('\x1b[31m%s\x1b[0m', '⛔ ERROR FATAL: No tienes archivo .env.local');
    console.log('   Copia .env.example a .env.local y configura tus claves.');
    process.exit(1);
}

// 3. Compare keys
const localKeys = parseEnv(fs.readFileSync(envLocalPath, 'utf-8'));
const missingKeys = exampleKeys.filter(key => !localKeys.includes(key));

// 4. Auto-sync Logic
if (missingKeys.length > 0) {
    console.log('\x1b[33m%s\x1b[0m', '⚠️  Detectadas nuevas variables en .env.example.');
    console.log('   Sincronizando .env.local...');

    const exampleContent = fs.readFileSync(envExamplePath, 'utf-8');
    const exampleLines = exampleContent.split('\n');
    const linesToAdd = [];

    missingKeys.forEach(key => {
        // Find the original line to keep comments or default values
        const line = exampleLines.find(l => l.trim().startsWith(`${key}=`));
        if (line) {
            linesToAdd.push(line);
            console.log(`   + Añadido: ${key}`);
        }
    });

    if (linesToAdd.length > 0) {
        // Append to file
        fs.appendFileSync(envLocalPath, '\n# --- Auto-merged from .env.example ---\n' + linesToAdd.join('\n') + '\n');

        console.log('\n\x1b[33m%s\x1b[0m', '⚠️  ACCIÓN REQUERIDA:');
        console.log('   Se han añadido las nuevas variables a tu .env.local, pero con valores de ejemplo.');
        console.log('   > Por favor, abre .env.local y pon las contraseñas reales antes de continuar.');

        // Stop process to force review
        process.exit(1);
    }
}

console.log('\x1b[32m%s\x1b[0m', '✅ Entorno validado y sincronizado.');
