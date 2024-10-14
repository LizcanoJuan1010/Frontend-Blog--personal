import React from 'react';
import './EntriesPage.css'; // Asegúrate de crear también este archivo CSS para estilos específicos

function EntriesPage() {
  return (
    <div className="entries-container">
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
      <main className="entries-main">
        <h1>Entradas</h1>
        <div className="entry">
          <div className="entry-header">
            <p>Usuario</p>
            <span className="entry-status">new</span>
          </div>
          <p className="entry-content">
            Lorem ipsum dolor sit amet consectetur adipiscing elit, posuere ad feugiat cras a nulla molestie pharetra, diam risus suspendisse semper curabitur aliquam.
          </p>
          <div className="entry-footer">
            <span className="comment">💬</span>
            <span className="options">⋯</span>
            <span className="delete">🗑️</span>
          </div>
        </div>
        
        {/* Repite esta estructura para otras entradas */}
        
      </main>
    </div>
  );
}

export default EntriesPage;
