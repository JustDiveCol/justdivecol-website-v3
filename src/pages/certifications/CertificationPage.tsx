// src/pages/certifications/CertificationPage.tsx
import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { SEO } from '../../components/common/SEO';
import { PageHeader } from '../../components/sections/shared/PageHeader';
import { getCertificationBySlug } from '../../content/certifications';

import { StickyCtaBar } from '../../components/common/StickyCtaBar';
import { KeyMetricsBar } from '../../components/sections/certifications/KeyMetricsBar';
import { CourseContent } from '../../components/sections/certifications/CourseContent';
import { CourseCurriculum } from '../../components/sections/certifications/CourseCurriculum';
import { BookingProcess } from '../../components/sections/certifications/BookingProcess';
import { PhotoGallery } from '../../components/sections/shared/PhotoGallery';
import { CtaSection } from '../../components/sections/shared/CtaSection';
import { homeContent } from '../../content/pages/home/home.content';
import { RelatedExperiences } from '../../components/sections/certifications/RelatedExperiences';
import { listSessions } from '../../content/experiences';
import { FaqSection } from '../../components/sections/contact/FaqSection';

const CertificationPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation(['certifications', 'common']);
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

  const stickyButtonData = useMemo(() => {
    if (!content || !content.ctaButton) return undefined;

    const newAction = { ...content.ctaButton.action };

    if (newAction.type === 'whatsapp' && newAction.whatsAppMessageKey) {
      const itemName = t(content.name, { ns: 'certifications' });

      const translatedMessage = t(newAction.whatsAppMessageKey, { itemName });

      newAction.pretranslatedMessage = translatedMessage;
    }

    return {
      ...content.ctaButton,
      action: newAction,
    };
  }, [content, t]);

  if (!stickyButtonData) {
    return null;
  }

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
          translationNS={'certifications'}
        />

        <PhotoGallery
          {...content.gallery}
          translationNS={content.seo.translationNS}
        />

        <FaqSection
          translationNS={'faq'}
          showSeeAllButton={true}
          categoryId={content.faq}
        />

        <CtaSection {...homeContent.cta} />

        <div className='h-24 md:h-28' />
      </main>

      <StickyCtaBar
        buttonData={stickyButtonData}
        translationNS={'certifications'}
      />
    </>
  );
};

export default CertificationPage;
