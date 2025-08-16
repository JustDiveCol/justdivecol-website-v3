// src/pages/DiveSiteMapPage.tsx
import { DiveSitesSection } from '../components/sections/divesites/DiveSitesSection';
import {
  buildDestinationOptions,
  gatherAllDiveSites,
} from '../content/destinations/dive-sites.helpers';

export default function DiveSiteMapPage() {
  const destinations = buildDestinationOptions();
  const sites = gatherAllDiveSites();

  return (
    <DiveSitesSection
      translationNS={'dive-sites'}
      sites={sites}
      destinations={destinations}
    />
  );
}
