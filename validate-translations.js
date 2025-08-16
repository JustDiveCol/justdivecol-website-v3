// validate-translations.js
const fs = require('fs');
const path = require('path');

// --- Configuración ---
const SRC_DIR = path.join(__dirname, 'src');
const LOCALES_DIR = path.join(__dirname, 'public/locales/es'); // Usamos 'es' como la fuente de verdad
const FILE_EXTENSIONS = ['.tsx', '.ts'];
// --- Fin de Configuración ---

// Un Set para almacenar todas las claves usadas en el código, sin duplicados.
const usedKeys = new Set();
// Un Set para almacenar todas las claves definidas en los archivos JSON.
const definedKeys = new Set();

// Expresión regular para encontrar usos de la función t('clave') o t("clave").
// Captura el contenido dentro de las comillas.
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
 * Lee un archivo de código y extrae las claves de traducción.
 * @param {string} filePath - La ruta del archivo.
 */
function extractKeysFromFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  let match;
  while ((match = I18N_KEY_REGEX.exec(content)) !== null) {
    const key = match[1];
    // Ignoramos claves que contienen variables, ya que el script no puede resolverlas.
    if (!key.includes('${') && !key.includes('{{')) {
      usedKeys.add(key);
    }
  }
}

/**
 * Lee un archivo JSON y aplana su estructura para obtener las claves completas.
 * Ej: { "header": { "title": "Hola" } } -> "header.title"
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
for (const key of usedKeys) {
  // Algunas claves incluyen el namespace (ej: 'common:key'). Lo separamos.
  const keyWithoutNamespace = key.split(':').pop();
  if (!definedKeys.has(keyWithoutNamespace)) {
    missingKeys.push(key);
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
  missingKeys.sort().forEach((key) => {
    console.error(`  - ${key}`);
  });
  // Salimos con un código de error para que pueda ser usado en pipelines de CI/CD.
  process.exit(1);
}
