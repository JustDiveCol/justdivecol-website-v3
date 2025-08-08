import { useParams } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { PageHeader } from '../components/sections/shared/PageHeader';
import { KeyDetailsSection } from '../components/sections/certifications/KeyDetailsSection';
import { getCertificationBySlug } from '../data/certifications/utils';
import type { CertificationSlug } from '../data/certifications';
import { CourseContentSection } from '../components/sections/certifications/CourseContentSection';
import { InclusionsAndRequirements } from '../components/sections/certifications/InclusionsAndRequirements';
import { PhotoGallery } from '../components/sections/shared/PhotoGallery';
import { AvailableSessions } from '../components/sections/certifications/AvailableSessions';
import { CtaSection } from '../components/sections/shared/CtaSection';

export const CertificationPage = () => {
  const { slug } = useParams<{ slug: CertificationSlug }>();

  if (!slug) {
    //   return <NotFoundPage />;
    return;
  }

  const certification = getCertificationBySlug(slug || '');

  if (!certification) {
    return (
      <div>
        <p>Certificación no encontrada.</p>
      </div>
    );
  }

  // Desestructuramos los datos tal como existen
  const {
    seo,
    header,
    details,
    ctaButton,
    cta,
    description,
    curriculum,
    requirements,
    whatIsIncluded,
    gallery,
  } = certification;

  return (
    <>
      <SEO {...seo} />
      <PageHeader {...header} />

      <KeyDetailsSection
        details={details}
        ctaButton={ctaButton}
      />

      <AvailableSessions certificationId={certification.id} />

      <CourseContentSection
        description={description}
        curriculum={curriculum}
      />

      <InclusionsAndRequirements
        included={whatIsIncluded}
        requirements={requirements}
      />

      {gallery && gallery.images.length > 0 && (
        <PhotoGallery
          titleKey={gallery.titleKey}
          images={gallery.images}
          translationNS='certifications'
        />
      )}

      <CtaSection {...cta} />
    </>
  );
};
