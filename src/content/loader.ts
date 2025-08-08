// src/content/loader.ts
type ContentModule = { [key: string]: unknown };

const modules: Record<string, () => Promise<ContentModule>> = {
  /* Destinations */
  ...import.meta.glob<ContentModule>('./destinations/*.content.ts'),
  /* Experiences */
  ...import.meta.glob<ContentModule>('./experiences/*.content.ts'),
  /* Certifications */
  ...import.meta.glob<ContentModule>('./certifications/*.content.ts'),
  /* Sessions */
  ...import.meta.glob<ContentModule>('./sessions/*.content.ts'),
  /* Dive-sites (por destino) */
  ...import.meta.glob<ContentModule>('./dive-sites/*.content.ts'),
};

/**
 * Devuelve el módulo de contenido solicitado.
 * Ej: loadContent('destinations', 'santa-marta')
 */
export async function loadContent(
  folder:
    | 'destinations'
    | 'experiences'
    | 'certifications'
    | 'sessions'
    | 'dive-sites',
  id: string
): Promise<ContentModule> {
  const key = `./${folder}/${id}.content.ts`;
  const importer = modules[key];

  if (!importer) {
    throw new Error(`Content not found: ${key}`);
  }
  return importer();
}
