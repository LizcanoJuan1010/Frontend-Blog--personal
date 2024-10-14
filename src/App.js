import React, { useState } from 'react';
import './App.css';
import WelcomePage from './components/WelcomePage';
import EntriesPage from './components/EntriesPage';
import CreatePage from './components/CreatePage';
import DashboardPage from './components/DashboardPage';
import DraftsPage from './components/DraftsPage';
import EditPage from './components/EditPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import StatusModal from './components/StatusModal';

function App() {
  const [status, setStatus] = useState(null);

  // Función para activar el modal de estado
  const showStatus = (type) => {
    setStatus(type);
    setTimeout(() => {
      setStatus(null); // Oculta el modal después de 2 segundos
    }, 2000);
  };

  return (
    <div>
      {/* Selecciona el componente que deseas ver */}
      {/*<WelcomePage /> */}
       {/*<LoginPage /> */}
      {/*<RegisterPage />*/}
       {/*<EntriesPage /> */}
       {/*<CreatePage />*/}
       {/*<DashboardPage />*/} 
       {/*<DraftsPage />*/}
      <EditPage /> 
      
      {/* Renderiza el modal de estado si hay un status activo */}
      {status && <StatusModal type={status} />}
      
      {/* Botones para simular los diferentes estados */}
      <div className="status-buttons">
        <button onClick={() => showStatus('loading')}>Simular Cargando</button>
        <button onClick={() => showStatus('error')}>Simular Error</button>
        <button onClick={() => showStatus('published')}>Simular Publicado</button>
        <button onClick={() => showStatus('saved')}>Simular Guardado</button>
      </div>
    </div>
  );
}

export default App;

