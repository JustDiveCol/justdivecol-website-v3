// src/pages/PrinciplesPage.tsx
import { SEO } from '../components/common/SEO';
import { PageHeader } from '../components/sections/shared/PageHeader';
import { AlternatingFeature } from '../components/sections/shared/AlternatingFeature';
import { CtaSection } from '../components/sections/shared/CtaSection'; // 1. Importa
import { principlesPageData } from '../data/principlesPageData';

export const PrinciplesPage = () => {
  const { seo, header, principles, cta } = principlesPageData; // 2. Extrae 'cta'

  return (
    <>
      <SEO
        {...seo}
        translationNS='principles'
      />
      <PageHeader
        titleKey={header.titleKey}
        subtitleKey={header.subtitleKey}
        imageData={header.imageData}
      />
      <div className='bg-brand-primary-dark'>
        {principles.map((principle) => (
          <AlternatingFeature
            key={principle.id}
            featureData={principle}
          />
        ))}
      </div>
      <CtaSection {...cta} />
    </>
  );
};
