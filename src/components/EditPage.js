import React from 'react';
import './EditPage.css'; // Crea también este archivo CSS para estilos específicos

function EditPage() {
  return (
    <div className="edit-container">
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

      <main className="edit-main">
        <h1>Editar</h1>
        <div className="edit-content">
          <div className="post-header">
            <p>Usuario</p>
            <span className="post-date">07/08/24</span>
          </div>
          <textarea className="post-text" defaultValue="Lorem ipsum dolor sit amet consectetur adipiscing elit, posuere ad feugiat cras a nulla molestie pharetra, diam risus suspendisse semper curabitur aliquam."></textarea>
          <div className="tag-section">
            <p>Etiquetas</p>
            <button className="tag neutral">Neutro</button>
            <button className="tag happy">Alegre</button>
            <button className="tag sad">Triste</button>
            <button className="tag angry">Enojado</button>
          </div>
          <div className="post-actions">
            <button className="btn draft">Borrador</button>
            <button className="btn publish">Publicar</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default EditPage;
