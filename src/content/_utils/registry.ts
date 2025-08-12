// src/content/_utils/registry.ts
export type IdSlug = { id: string; slug: string };

export function inferFromPath(path: string): { id: string; slug: string } {
  // path p.ej.: '/.../padi-open-water-diver.content.ts'
  const file = path.split('/').pop() ?? '';
  const base = file.replace('.content.ts', '');
  return { id: base, slug: base };
}

/** Convierte módulos importados a arreglo de contenidos fuertemente tipado */
export function modulesToArray<T extends Partial<IdSlug>>(
  modules: Record<string, { default: T }>,
  onMissing?: (path: string, draft: Required<IdSlug>) => T
): (T & Required<IdSlug>)[] {
  return Object.entries(modules).map(([path, mod]) => {
    const draft = inferFromPath(path);
    const base = mod?.default ?? ({} as T);
    const withKeys = {
      ...(base as object),
      id: (base.id ?? draft.id) as string,
      slug: (base.slug ?? draft.slug) as string,
    } as T & Required<IdSlug>;
    return onMissing
      ? (onMissing(path, draft) as T & Required<IdSlug>) ?? withKeys
      : withKeys;
  });
}

/** Crea un índice por id y por slug */
export function indexBy<T extends IdSlug>(items: T[]) {
  const byId = new Map<string, T>();
  const bySlug = new Map<string, T>();
  for (const it of items) {
    byId.set(it.id, it);
    bySlug.set(it.slug, it);
  }
  return { byId, bySlug };
}
