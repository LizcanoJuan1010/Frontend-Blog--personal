import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './DraftsPage.css';

function DraftsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = location.state || {}; // Obtén el usuario desde location.state

  const handleLogout = () => {
    navigate('/'); // Redirige a la página principal al cerrar sesión
  };

  const goToEntriesPage = () => {
    navigate('/entries', { state: { user } }); // Redirige a EntriesPage y pasa el usuario
  };

  const goToCreatePage = () => {
    navigate('/create', { state: { user } }); // Redirige a CreatePage y pasa el usuario
  };

  if (!user) {
    navigate('/'); // Redirige si `user` no está presente
    return null;
  }

  return (
    <div className="drafts-container">
      <aside className="sidebar">
        <div className="user-info">
          <div className="user-avatar"></div>
          <p>{user.name}</p>
        </div>
        <nav className="sidebar-menu">
          <button className="menu-item" onClick={goToEntriesPage}>Entradas</button>
          <button className="menu-item" onClick={goToCreatePage}>Crear</button>
          
        </nav>
        <button className="logout" onClick={handleLogout}>Salir</button>
      </aside>

      <main className="drafts-main">
        <h1>Borradores</h1>
        <div className="drafts-list">
          {user && user.drafts && user.drafts.length > 0 ? (
            user.drafts.map((draft) => (
              <div key={draft.id} className="draft">
                <div className="draft-header">
                  <p>{user.name}</p>
                  <button className="publish-btn">Publicar</button>
                </div>
                <p className="draft.content">{draft.label}</p>
                <div className="draft-footer">
                  <span className="status-circle red"></span>
                  
                  <span className="edit-icon">✏️</span>
                  <span className="delete-icon">🗑️</span>
                </div>
              </div>
            ))
          ) : (
            <p>No hay borradores disponibles.</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default DraftsPage;
