// src/App.tsx
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Navigate,
} from 'react-router-dom';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from './i18n/config';

import { RouteScrollManager } from './components/common/RouteScrollManager';
import { MainLayout } from './components/layout/MainLayout';
import { HomePage } from './pages/HomePage';
import { AboutUsPage } from './pages/AboutUsPage';
import { PrinciplesPage } from './pages/PrinciplesPage';
import { ContactPage } from './pages/ContactPage';
import { PolicyPage } from './pages/PolicyPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { FaqPage } from './pages/FaqPage';
import { ExperiencesPage } from './pages/ExperiencesPage';
import DiveSiteMapPage from './pages/DiveSiteMapPage';
import CertificationPage from './pages/certifications/CertificationPage';
import DestinationPage from './pages/destinations/DestinationPage';
import ExperiencePage from './pages/experiences/ExperiencePage';

import {
  I18N_LANGUAGES_SAFE,
  I18N_NAMESPACES_SAFE,
  type I18NLanguage,
} from './constants/i18n.schema';
import { NotFoundPage } from './pages/NotFoundPage';
import { UnderConstructionPage } from './pages/UnderConstructionPage';

const DEFAULT_LANG: I18NLanguage = 'es';
const ensureSafeLang = (lng?: string): I18NLanguage =>
  I18N_LANGUAGES_SAFE.includes(lng as I18NLanguage)
    ? (lng as I18NLanguage)
    : DEFAULT_LANG;

const I18nReadyGate: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { i18n } = useTranslation();
  const [ready, setReady] = React.useState(i18n.isInitialized);

  React.useEffect(() => {
    let active = true;

    // Cuando i18n termine su init, intentamos cargar namespaces
    const onInitialized = async () => {
      try {
        await i18n.loadNamespaces(I18N_NAMESPACES_SAFE as unknown as string[]);
      } finally {
        if (active) setReady(true);
      }
    };

    if (i18n.isInitialized) {
      onInitialized();
    } else {
      i18n.on('initialized', onInitialized);
    }

    return () => {
      active = false;
      i18n.off('initialized', onInitialized);
    };
  }, [i18n]);

  if (!ready) return null; // puedes poner un loader aquí si quieres
  return <>{children}</>;
};

const LanguageHandler: React.FC = () => {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  const urlIsValid = I18N_LANGUAGES_SAFE.includes(lang as I18NLanguage);
  const safeLang = ensureSafeLang(lang);

  React.useEffect(() => {
    if (urlIsValid && lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
      return;
    }

    if (!urlIsValid && i18n.language !== safeLang) {
      i18n.changeLanguage(safeLang);
    }
  }, [urlIsValid, lang, safeLang, i18n]);

  if (!urlIsValid) {
    return <Navigate to={`/${safeLang}/route-lost`} replace />;
  }

  return null;
};

const AppRoutes = () => (
  <MainLayout>
    <RouteScrollManager />
    <LanguageHandler />
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="about-us" element={<AboutUsPage />} />
      <Route path="principles" element={<PrinciplesPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="legal/policy" element={<PolicyPage />} />
      <Route path="legal/terms" element={<TermsPage />} />
      <Route path="legal/privacy" element={<PrivacyPage />} />
      <Route path="faq" element={<FaqPage />} />
      <Route path="dive-experiences" element={<ExperiencesPage />} />
      <Route path="dive-sites" element={<DiveSiteMapPage />} />

      <Route path="certifications/:slug" element={<CertificationPage />} />
      <Route path="destinations/:slug" element={<DestinationPage />} />
      <Route
        path="dive-experiences/:experienceSlug/:sessionSlug"
        element={<ExperiencePage />}
      />

      <Route path="coming-soon" element={<UnderConstructionPage />} />
      <Route path="route-lost" element={<NotFoundPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </MainLayout>
);

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <I18nReadyGate>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Navigate to={`/${ensureSafeLang(i18n.language)}`} replace />
              }
            />

            <Route path="/:lang/*" element={<AppRoutes />} />

            <Route
              path="*"
              element={
                <Navigate
                  to={`/${ensureSafeLang(i18n.language)}/route-lost`}
                  replace
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </I18nReadyGate>
    </I18nextProvider>
  );
}

export default App;
