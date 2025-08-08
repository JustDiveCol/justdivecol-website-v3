import { loadContent } from '../loader';

test('loader devuelve contenido de Santa Marta', async () => {
  const mod = await loadContent('dive-sites', 'santa-marta');

  // Obtenemos el primer (y único) export del módulo
  const content = Object.values(mod)[0] as Record<string, unknown>;

  expect(content).toHaveProperty('sm-aguja');
});
