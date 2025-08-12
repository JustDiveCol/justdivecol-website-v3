// src/App.tsx
import { Routes, Route } from 'react-router-dom';
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
// import { DiveSitesPage } from './pages/DiveSitesPage';
// import { CertificationPage } from './pages/CertificationPage';

function App() {
  return (
    <MainLayout>
      <RouteScrollManager />
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />

        <Route
          path='/about-us'
          element={<AboutUsPage />}
        />

        <Route
          path='/principles'
          element={<PrinciplesPage />}
        />

        <Route
          path='/contact'
          element={<ContactPage />}
        />

        <Route
          path='/legal/policy'
          element={<PolicyPage />}
        />

        <Route
          path='/legal/terms'
          element={<TermsPage />}
        />

        <Route
          path='/legal/privacy'
          element={<PrivacyPage />}
        />

        <Route
          path='/faq'
          element={<FaqPage />}
        />

        <Route
          path='/dive-experiences'
          element={<ExperiencesPage />}
        />

        {/* <Route
          path='/dive-sites'
          element={<DiveSitesPage />}
        /> */}

        {/* <Route
          path='/certifications/:slug'
          element={<CertificationPage />}
        /> */}
      </Routes>
    </MainLayout>
  );
}

export default App;
