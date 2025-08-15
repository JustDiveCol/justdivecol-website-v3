// src/pages/certifications/CertificationPage.tsx
import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { SEO } from '../../components/common/SEO';
import { PageHeader } from '../../components/sections/shared/PageHeader';
import { getCertificationBySlug } from '../../content/certifications';

import { StickyCtaBar } from '../../components/common/StickyCtaBar';
import { KeyMetricsBar } from '../../components/sections/certifications/KeyMetricsBar';
import { CourseContent } from '../../components/sections/certifications/CourseContent';
import { CourseCurriculum } from '../../components/sections/certifications/CourseCurriculum';
import { BookingProcess } from '../../components/sections/certifications/BookingProcess';
import { CertificationTestimonials } from '../../components/sections/certifications/CertificationTestimonials';
import { CertificationFaq } from '../../components/sections/certifications/CertificationFaq';
import { PhotoGallery } from '../../components/sections/shared/PhotoGallery';
import { CtaSection } from '../../components/sections/shared/CtaSection';
import { homeContent } from '../../content/pages/home/home.content';
import { RelatedExperiences } from '../../components/sections/certifications/RelatedExperiences';
import { listSessions } from '../../content/experiences';

const CertificationPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const content = useMemo(
    () => (slug ? getCertificationBySlug(slug) : null),
    [slug]
  );

  const relatedSessions = useMemo(() => {
    if (!content) {
      return [];
    }
    const allSessions = listSessions();
    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);

    const futureSessions = allSessions.filter((session) => {
      const sessionDate = new Date(session.startDate + 'T00:00:00Z');
      const isFuture = sessionDate >= today;
      const offersCertification = session.certificationIds?.includes(
        content.id
      );
      return isFuture && offersCertification;
    });

    futureSessions.sort(
      (a, b) =>
        new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
    );

    return futureSessions;
  }, [content]);

  if (!slug) {
    return <div>Certificación no encontrada.</div>;
  }

  if (!content) {
    return <div>Contenido de la certificación no encontrado.</div>;
  }

  return (
    <>
      <SEO {...content.seo} />
      <PageHeader {...content.header} />

      <main>
        <KeyMetricsBar
          minAge={content.minAge}
          maxDepthMeter={content.maxDepthMeter}
          maxDepthFt={content.maxDepthFt}
          estimatedDuration={content.estimatedDuration}
          translationNS={content.seo.translationNS}
        />

        <CourseContent
          description={content.description}
          prerequisites={content.prerequisites}
          whatIsIncluded={content.whatIsIncluded}
          curriculum={content.curriculum}
          translationNS={content.seo.translationNS}
        />

        <CourseCurriculum
          curriculum={content.curriculum}
          translationNS={content.seo.translationNS}
        />

        <BookingProcess
          bookingProcess={content.bookingProcess}
          translationNS={content.seo.translationNS}
        />

        <RelatedExperiences
          titleKey='certifications.relatedExperiencesTitle'
          sessions={relatedSessions}
          translationNS={'experiences'}
        />

        <PhotoGallery
          {...content.gallery}
          translationNS={content.seo.translationNS}
        />

        {content.testimonials && content.testimonials.items.length > 0 && (
          <CertificationTestimonials
            testimonials={content.testimonials}
            translationNS={content.seo.translationNS}
          />
        )}

        {content.faq && content.faq.items.length > 0 && (
          <CertificationFaq
            faq={content.faq}
            translationNS={content.seo.translationNS}
          />
        )}

        <CtaSection {...homeContent.cta} />

        {/* Espaciador para que el footer no sea tapado por la barra CTA */}
        <div className='h-24 md:h-28' />
      </main>

      {/* La barra CTA se coloca fuera del main para que no afecte su scroll */}
      <StickyCtaBar buttonData={content.ctaButton} />
    </>
  );
};

export default CertificationPage;
