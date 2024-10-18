import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CreatePage.css';

function CreatePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = location.state || {}; // Obtén el usuario desde location.state

  const [post, setPost] = useState({
    title: '',
    description: '',
    label: 'Neutro' // Etiqueta predeterminada
  });

  const handleLogout = () => {
    navigate('/'); // Redirige a la página principal al cerrar sesión
  };

  const goToEntriesPage = () => {
    navigate('/entries', { state: { user } }); // Redirige a EntriesPage y pasa el usuario
  };

  const goToDraftsPage = () => {
    navigate('/drafts', { state: { user } }); // Redirige a DraftsPage y pasa el usuario
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value
    }));
  };

  const handleLabelChange = (label) => {
    setPost((prevPost) => ({
      ...prevPost,
      label: label
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8080/api/users/${user.id}/posts`, post);
      if (response.status === 201) {
        alert('Post creado exitosamente!');
        goToEntriesPage(); // Redirige a EntriesPage después de crear el post
      }
    } catch (error) {
      console.error('Error al crear el post:', error);
      alert('Hubo un problema al crear el post. Inténtalo nuevamente.');
    }
  };

  if (!user) {
    navigate('/'); // Redirige si `user` no está presente
    return null;
  }

  return (
    <div className="create-container">
      <aside className="sidebar">
        <div className="user-info">
          <div className="user-avatar"></div>
          <p>{user.name}</p>
        </div>
        <nav className="sidebar-menu">
          <button className="menu-item" onClick={goToEntriesPage}>Entradas</button>
          
        </nav>
        <button className="logout" onClick={handleLogout}>Salir</button>
      </aside>
      
      <main className="create-main">
        <h1>Crear</h1>
        <form onSubmit={handleSubmit} className="post-editor">
          <div className="post-header">
            <p>{user.name}</p>
            <span className="post-date">{new Date().toLocaleDateString()}</span>
          </div>
          <textarea
            className="post-input"
            name="description"
            value={post.description}
            onChange={handleChange}
            placeholder="¿Qué nos quieres contar hoy?"
            required
          ></textarea>
          <div className="tag-section">
            <p>Etiquetas</p>
            <button
              type="button"
              className={`tag neutral ${post.label === 'Neutro' ? 'selected' : ''}`}
              onClick={() => handleLabelChange('Neutro')}
            >
              Neutro
            </button>
            <button
              type="button"
              className={`tag happy ${post.label === 'Alegre' ? 'selected' : ''}`}
              onClick={() => handleLabelChange('Alegre')}
            >
              Alegre
            </button>
            <button
              type="button"
              className={`tag sad ${post.label === 'Triste' ? 'selected' : ''}`}
              onClick={() => handleLabelChange('Triste')}
            >
              Triste
            </button>
            <button
              type="button"
              className={`tag angry ${post.label === 'Enojado' ? 'selected' : ''}`}
              onClick={() => handleLabelChange('Enojado')}
            >
              Enojado
            </button>
          </div>
          <div className="post-actions">
            <button type="submit" className="btn publish">Publicar</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default CreatePage;
