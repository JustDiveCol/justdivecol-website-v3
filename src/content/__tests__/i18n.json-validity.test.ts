import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

const LOCALES_ROOT = path.resolve(process.cwd(), 'public/locales');

describe('i18n: todos los archivos de traducción son JSON válido', () => {
  function walk(dir: string): string[] {
    return fs.readdirSync(dir).flatMap((file) => {
      const fullPath = path.join(dir, file);
      return fs.statSync(fullPath).isDirectory() ? walk(fullPath) : [fullPath];
    });
  }

  const files = walk(LOCALES_ROOT).filter((f) => f.endsWith('.json'));

  it(`Valida ${files.length} archivos JSON`, () => {
    for (const file of files) {
      const raw = fs.readFileSync(file, 'utf8');
      try {
        JSON.parse(raw);
      } catch (e) {
        throw new Error(`❌ JSON inválido en ${file}: ${(e as Error).message}`);
      }
    }
    expect(true).toBe(true); // Si llegamos aquí, todo pasó
  });
});
