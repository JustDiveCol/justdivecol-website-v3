// validate-translations.cjs
const fs = require('fs');
const path = require('path');

// --- Configuración ---
const SRC_DIR = path.join(__dirname, 'src');
const LOCALES_DIR = path.join(__dirname, 'public/locales/es'); // Usamos 'es' como la fuente de verdad
const FILE_EXTENSIONS = ['.tsx', '.ts'];
// --- Fin de Configuración ---

// Cambiamos 'usedKeys' de un Set a un Map para rastrear las ubicaciones.
// La estructura será: Map<string, string[]>
// donde la clave es la 'translation key' y el valor es un array de rutas de archivo.
const usedKeys = new Map();
const definedKeys = new Set();

// Expresión regular para encontrar usos de la función t('clave') o t("clave").
const I18N_KEY_REGEX = /t\(['"`]([^'"`]+)['"`]/g;

/**
 * Función recursiva para recorrer un directorio y encontrar archivos.
 * @param {string} dir - La ruta del directorio a recorrer.
 * @param {(filePath: string) => void} fileCallback - La función a ejecutar por cada archivo encontrado.
 */
function traverseDirectory(dir, fileCallback) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      traverseDirectory(fullPath, fileCallback);
    } else if (FILE_EXTENSIONS.includes(path.extname(fullPath))) {
      fileCallback(fullPath);
    }
  }
}

/**
 * Lee un archivo de código y extrae las claves de traducción junto con su ubicación.
 * @param {string} filePath - La ruta del archivo.
 */
function extractKeysFromFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  let match;
  while ((match = I18N_KEY_REGEX.exec(content)) !== null) {
    const key = match[1];
    // Ignoramos claves que contienen variables.
    if (!key.includes('${') && !key.includes('{{')) {
      // Si la clave ya existe, añadimos la nueva ruta (si no está ya).
      if (usedKeys.has(key)) {
        const files = usedKeys.get(key);
        if (!files.includes(filePath)) {
          files.push(filePath);
        }
      } else {
        // Si es una clave nueva, la añadimos con su ruta.
        usedKeys.set(key, [filePath]);
      }
    }
  }
}

/**
 * Lee un archivo JSON y aplana su estructura para obtener las claves completas.
 * @param {string} filePath - La ruta del archivo JSON.
 */
function loadKeysFromJson(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const json = JSON.parse(content);

  function flatten(obj, prefix = '') {
    Object.keys(obj).forEach((key) => {
      const value = obj[key];
      const newPrefix = prefix ? `${prefix}.${key}` : key;
      if (typeof value === 'object' && value !== null) {
        flatten(value, newPrefix);
      } else {
        definedKeys.add(newPrefix);
      }
    });
  }

  flatten(json);
}

// --- Ejecución del Script ---
console.log('🔍 Iniciando validación de claves de traducción...');

// 1. Extraer todas las claves usadas en el código fuente.
traverseDirectory(SRC_DIR, extractKeysFromFile);
console.log(`... Encontradas ${usedKeys.size} claves de traducción en uso.`);

// 2. Cargar todas las claves definidas en los archivos de idioma.
const localeFiles = fs
  .readdirSync(LOCALES_DIR)
  .filter((f) => f.endsWith('.json'));
localeFiles.forEach((file) => {
  loadKeysFromJson(path.join(LOCALES_DIR, file));
});
console.log(
  `... Encontradas ${definedKeys.size} claves definidas en los archivos de idioma.`
);

// 3. Comparar y encontrar las claves que faltan.
const missingKeys = [];
for (const [key, files] of usedKeys.entries()) {
  const keyWithoutNamespace = key.split(':').pop();
  if (!definedKeys.has(keyWithoutNamespace)) {
    // Guardamos la clave y los archivos donde se encontró.
    missingKeys.push({ key, files });
  }
}

// 4. Mostrar el resultado.
if (missingKeys.length === 0) {
  console.log(
    '\n✅ ¡Excelente! Todas las claves de traducción están definidas.'
  );
} else {
  console.error(
    `\n❌ ¡Atención! Se encontraron ${missingKeys.length} claves de traducción sin definir:`
  );
  // Modificamos cómo se muestra el error para incluir la ruta.
  missingKeys
    .sort((a, b) => a.key.localeCompare(b.key))
    .forEach(({ key, files }) => {
      const relativeFiles = files.map((f) => path.relative(__dirname, f));
      console.error(`\n  - Clave: "${key}"`);
      console.error(`    -> Usada en: ${relativeFiles.join(', ')}`);
    });
  process.exit(1);
}
