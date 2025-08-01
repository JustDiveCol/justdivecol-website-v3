import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

// --- Tipado de Props ---
interface SEOProps {
  titleKey: string;
  descriptionKey: string;
  keywords?: string;
  imageUrl?: string;
  urlPath?: string;
}

export const SEO = ({
  titleKey,
  descriptionKey,
  keywords,
  imageUrl,
  urlPath,
}: SEOProps) => {
  const { t } = useTranslation('common'); // Asumimos que las claves SEO están en common.json

  const title = t(titleKey);
  const description = t(descriptionKey);

  const siteName = 'JustDiveCol'; // Puedes poner esto en una constante global
  const fullTitle = `${title} | ${siteName}`;
  const siteUrl = 'https://www.justdivecol.com'; // La URL base de tu sitio

  const fullUrl = urlPath ? `${siteUrl}${urlPath}` : siteUrl;
  const fullImageUrl = imageUrl
    ? `${siteUrl}${imageUrl}`
    : `${siteUrl}/default-social-image.jpg`; // Ten una imagen por defecto en /public

  return (
    <Helmet>
      {/* --- Tags Estándar --- */}
      <title>{fullTitle}</title>
      <meta
        name='description'
        content={description}
      />
      {keywords && (
        <meta
          name='keywords'
          content={keywords}
        />
      )}

      {/* --- Open Graph Tags (Redes Sociales) --- */}
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
        content={siteName}
      />

      {/* --- Twitter Card Tags --- */}
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
