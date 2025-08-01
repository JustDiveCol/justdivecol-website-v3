// src/App.tsx
import { MainLayout } from './components/layout/MainLayout';
import { HomePage } from './pages/HomePage'; // Importa la nueva página

function App() {
  return (
    <MainLayout>
      {/* En el futuro aquí irá el sistema de rutas, por ahora mostramos solo HomePage */}
      <HomePage />
    </MainLayout>
  );
}

export default App;
