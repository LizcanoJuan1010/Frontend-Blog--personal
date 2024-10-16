import React from 'react';
import './CreatePage.css'; // Crea también este archivo CSS para los estilos

function CreatePage() {
  return (
    <div className="create-container">
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
      
      <main className="create-main">
        <h1>Crear</h1>
        <div className="post-editor">
          <div className="post-header">
            <p>Usuario</p>
            <span className="post-date">09/08/24</span>
          </div>
          <textarea className="post-input" placeholder="¿Qué nos quieres contar hoy?"></textarea>
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

export default CreatePage;
