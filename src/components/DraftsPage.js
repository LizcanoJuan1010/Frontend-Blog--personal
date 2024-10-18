import React from 'react';
import './DraftsPage.css'; // Asegúrate de crear también este archivo CSS para los estilos específicos

function DraftsPage() {
  return (
    <div className="drafts-container">
      <aside className="sidebar">
        <div className="user-info">
          <div className="user-avatar"></div>
          <p>Usuario</p>
        </div>
        <nav className="sidebar-menu">
          <button className="menu-item">Entradas</button>
          <button className="menu-item">Crear</button>
          <button className="menu-item">Borradores</button>
        </nav>
        <button className="logout">Salir</button>
      </aside>

      <main className="drafts-main">
        <h1>Borradores</h1>
        <div className="draft">
          <div className="draft-header">
            <p>Usuario</p>
            <button className="publish-btn">Publicar</button>
          </div>
          <p className="draft-content">
            Lorem ipsum dolor sit amet consectetur adipiscing elit, posuere ad feugiat cras a nulla molestie pharetra, diam risus suspendisse semper curabitur aliquam.
          </p>
          <div className="draft-footer">
            <span className="status-circle red"></span>
            <span className="draft-date">07/08/24</span>
            <span className="edit-icon">✏️</span>
            <span className="delete-icon">🗑️</span>
          </div>
        </div>

        {/* Repite este bloque para otros borradores */}
        <div className="draft">
          <div className="draft-header">
            <p>Usuario</p>
            <button className="publish-btn">Publicar</button>
          </div>
          <p className="draft-content">
            Lorem ipsum dolor sit amet consectetur adipiscing elit, posuere ad feugiat cras a nulla molestie pharetra, diam risus suspendisse semper curabitur aliquam.
          </p>
          <div className="draft-footer">
            <span className="status-circle blue"></span>
            <span className="draft-date">07/08/24</span>
            <span className="edit-icon">✏️</span>
            <span className="delete-icon">🗑️</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DraftsPage;
