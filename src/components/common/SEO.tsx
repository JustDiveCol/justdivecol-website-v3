// src/components/common/SEO.tsx
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import type { SEOProps } from './types';
import {
  DEFAULT_SOCIAL_IMAGE_SAFE,
  SITE_NAME_SAFE,
  SITE_URL_SAFE,
} from '../../constants';

export const SEO = ({
  titleKey,
  descriptionKey,
  keywordsKey,
  imageUrl,
  urlPath,
  translationNS,
}: SEOProps) => {
  const { t } = useTranslation([translationNS, 'common']);

  const title = t(titleKey);
  const description = t(descriptionKey);
  const keywords = t(keywordsKey);
  const fullTitle = `${title} | ${SITE_NAME_SAFE}`;

  const fullUrl = urlPath ? `${SITE_URL_SAFE}${urlPath}` : SITE_URL_SAFE;
  const fullImageUrl = imageUrl
    ? `${SITE_URL_SAFE}${imageUrl}`
    : `${SITE_URL_SAFE}${DEFAULT_SOCIAL_IMAGE_SAFE}`;

  return (
    <Helmet>
      {/* --- Tags estándar --- */}
      <title>{fullTitle}</title>
      <meta
        name='description'
        content={description}
      />
      {keywordsKey && (
        <meta
          name='keywords'
          content={keywords}
        />
      )}

      {/* --- Open Graph --- */}
      <meta
        property='og:title'
        content={fullTitle}
      />
      <meta
        property='og:description'
        content={description}
      />
      <meta
        property='og:type'
        content='website'
      />
      <meta
        property='og:url'
        content={fullUrl}
      />
      <meta
        property='og:image'
        content={fullImageUrl}
      />
      <meta
        property='og:site_name'
        content={SITE_NAME_SAFE}
      />

      {/* --- Twitter Card --- */}
      <meta
        name='twitter:card'
        content='summary_large_image'
      />
      <meta
        name='twitter:title'
        content={fullTitle}
      />
      <meta
        name='twitter:description'
        content={description}
      />
      <meta
        name='twitter:image'
        content={fullImageUrl}
      />
    </Helmet>
  );
};
