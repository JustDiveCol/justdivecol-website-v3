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

const LanguageHandler = () => {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  React.useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return null;
};

const AppRoutes = () => (
  <MainLayout>
    <RouteScrollManager />
    <LanguageHandler />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/principles" element={<PrinciplesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/legal/policy" element={<PolicyPage />} />
      <Route path="/legal/terms" element={<TermsPage />} />
      <Route path="/legal/privacy" element={<PrivacyPage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/dive-experiences" element={<ExperiencesPage />} />
      <Route path="/dive-sites" element={<DiveSiteMapPage />} />
      <Route path="/certifications/:slug" element={<CertificationPage />} />
      <Route path="/destinations/:slug" element={<DestinationPage />} />
      <Route
        path="/dive-experiences/:experienceSlug/:sessionSlug"
        element={<ExperiencePage />}
      />
    </Routes>
  </MainLayout>
);

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Routes>
          <Route path="/:lang/*" element={<AppRoutes />} />
          <Route
            path="*"
            element={<Navigate to={`/${i18n.language}`} replace />}
          />
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
