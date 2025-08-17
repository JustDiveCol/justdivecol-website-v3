// src/pages/DiveSiteMapPage.tsx
import { SEO } from '../components/common/SEO';
import { PageHeader } from '../components/sections/shared/PageHeader';
import { DiveSitesSection } from '../components/sections/divesites/DiveSitesSection';
import {
  buildDestinationOptions,
  gatherAllDiveSites,
} from '../content/destinations/dive-sites.helpers';
import { diveSitesContent } from '../content/pages/dive-sites/dive-sites.content';

export default function DiveSiteMapPage() {
  const { seo, header } = diveSitesContent;
  const destinations = buildDestinationOptions();
  const sites = gatherAllDiveSites();

  return (
    <>
      <SEO {...seo} />
      <PageHeader {...header} />
      <main>
        <section className="bg-brand-primary-dark py-8">
          <div className="section h-[85vh] min-h-[700px] w-full">
            <div className="h-full w-full rounded-xl overflow-hidden shadow-2xl border-2 border-white/10 drop-shadow-strong">
              <DiveSitesSection
                translationNS={'dive-sites'}
                sites={sites}
                destinations={destinations}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
