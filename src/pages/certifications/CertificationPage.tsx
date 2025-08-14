// src/pages/certifications/CertificationPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

import { SEO } from '../../components/common/SEO';
import { PageHeader } from '../../components/sections/shared/PageHeader';

import { getCertificationBySlug } from '../../content/certifications';

const CertificationPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return;

  const content = getCertificationBySlug(slug);
  if (!content) return;

  return (
    <>
      <SEO {...content.seo} />
      <PageHeader {...content.header} />
    </>
  );
};

export default CertificationPage;
