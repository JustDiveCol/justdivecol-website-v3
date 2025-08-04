// src/data/destinations/santa-marta.ts
import type { Destination } from '../../types/data';
import { ROUTES } from '../../constants/routes';
import { santaMartaDiveSites } from '../dive-sites/santa-marta';

const santaMarta: Destination = {
  // Metadata
  id: 'santa-marta',
  slug: 'santa-marta',
  status: 'published',
  nameKey: 'destSmName',
  subtitleKey: 'destSmSubtitle',
  country: 'CO',
  coords: [11.232, -74.195],
  minZoom: 10.5,
  maxZoom: 16,

  // SEO y Header
  seo: {
    titleKey: 'smSeoTitle',
    descriptionKey: 'smSeoDesc',
    imageUrl: '/images/destinations/santa-marta/header.webp',
    url: `${ROUTES.destinations}/santa-marta`,
  },
  header: {
    backgroundImage: '/images/destinations/santa-marta/header.webp',
    titleKey: 'smHeaderTitle',
    subtitleKey: 'smHeaderSubtitle',
  },

  // Descripción
  description: {
    titleKey: 'smDescTitle',
    paragraphs: ['smDescP1', 'smDescP2'],
  },

  // Detalles y Hallazgos Únicos
  details: {
    titleKey: 'destinationsDetailsTitle',
    items: [
      { labelKey: 'smDetailLabel1', valueKey: 'smDetailValue1' },
      { labelKey: 'smDetailLabel2', valueKey: 'smDetailValue2' },
    ],
  },
  uniqueFinds: {
    titleKey: 'destinationsUniqueFindsTitle',
    items: ['smUniqueFind1', 'smUniqueFind2', 'smUniqueFind3'],
  },

  // Galería
  gallery: {
    titleKey: 'destinationsGalleryTitle',
    images: [
      {
        backgroundImage: '/images/destinations/santa-marta/gallery-01.webp',
        altTextKey: 'smGal1Alt',
      },
      {
        backgroundImage: '/images/destinations/santa-marta/gallery-02.webp',
        altTextKey: 'smGal2Alt',
      },
    ],
  },

  // Relaciones
  experienceIds: ['exp-santa-marta-fun-dive'], // IDs de experiencias en este destino
  diveSiteIds: santaMartaDiveSites.map((site) => site.id), // Generamos los IDs dinámicamente
};

export default santaMarta;
