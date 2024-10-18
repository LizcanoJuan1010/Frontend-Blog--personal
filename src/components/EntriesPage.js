import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EntriesPage.css';

function EntriesPage({ user }) {
  const navigate = useNavigate();
  const [commentText, setCommentText] = useState('');
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState(user.posts || []);
  const [editMode, setEditMode] = useState(null);
  const [editPost, setEditPost] = useState({ title: '', description: '', label: '' });
  const [editCommentId, setEditCommentId] = useState(null);
  const [editCommentText, setEditCommentText] = useState('');

  const handleLogout = () => {
    navigate('/'); // Redirige a la página principal
  };

  const goToCreatePage = () => {
    navigate('/create', { state: { user } });
  };

  const goToDraftsPage = () => {
    navigate('/drafts', { state: { user } });
  };

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleDeletePost = async (postId) => {
  try {
    await axios.delete(`http://localhost:8080/api/posts/${postId}`);
    alert('Post eliminado exitosamente!');
    setPosts(posts.filter((post) => post.id !== postId)); // Filtra el post eliminado del estado
  } catch (error) {
    console.error('Error al eliminar el post:', error);
    alert('Hubo un problema al eliminar el post. Inténtalo nuevamente.');
  }
};


  const handleEditClick = (post) => {
    setEditMode(post.id);
    setEditPost({
      title: post.title,
      description: post.description,
      label: post.label,
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleSaveEdit = async (postId) => {
  try {
    const response = await axios.put(`http://localhost:8080/api/posts/${postId}`, editPost);
    if (response.status === 200) {
      alert('Post actualizado exitosamente!');
      // Actualiza el estado de los posts después de la edición
      const updatedPosts = posts.map((post) =>
        post.id === postId ? response.data : post
      );
      setPosts(updatedPosts); // Actualiza el estado con los posts modificados
      setEditMode(null); // Sal del modo de edición
    }
  } catch (error) {
    console.error('Error al actualizar el post:', error);
    alert('Hubo un problema al actualizar el post. Inténtalo nuevamente.');
  }
};


  const handleViewComments = async (postId) => {
    if (selectedPostId === postId) {
      setSelectedPostId(null); // Oculta los comentarios si ya estaban visibles
    } else {
      try {
        const response = await axios.get(`http://localhost:8080/api/comments/post/${postId}`);
        setComments(response.data);
        setSelectedPostId(postId);
      } catch (error) {
        console.error('Error al obtener los comentarios:', error);
        alert('Hubo un problema al obtener los comentarios. Inténtalo nuevamente.');
      }
    }
  };

  const handleAddComment = async (postId) => {
    if (commentText.trim() === '') {
      alert('El comentario no puede estar vacío');
      return;
    }
    
    try {
      const response = await axios.post(`http://localhost:8080/api/posts/${postId}/comments`, {
        description: commentText,
      });

      if (response.status === 201) {
        alert('Comentario agregado exitosamente!');
        setCommentText(''); // Limpia el campo de comentario después de enviar
        handleViewComments(postId); // Recarga los comentarios después de agregar uno nuevo
      }
    } catch (error) {
      console.error('Error al agregar el comentario:', error);
      alert('Hubo un problema al agregar el comentario. Inténtalo nuevamente.');
    }
  };

  const handleEditCommentClick = (comment) => {
    setEditCommentId(comment.id);
    setEditCommentText(comment.description);
  };

  const handleEditCommentChange = (e) => {
    setEditCommentText(e.target.value);
  };

  const handleSaveEditComment = async (commentId) => {
    try {
      await axios.put(`http://localhost:8080/api/comments/${commentId}`, { description: editCommentText });
      alert('Comentario actualizado exitosamente!');
      setEditCommentId(null);
      handleViewComments(selectedPostId); // Recarga los comentarios actualizados
    } catch (error) {
      console.error('Error al actualizar el comentario:', error);
      alert('Hubo un problema al actualizar el comentario. Inténtalo nuevamente.');
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await axios.delete(`http://localhost:8080/api/comments/${commentId}`);
      alert('Comentario eliminado exitosamente!');
      handleViewComments(selectedPostId); // Recarga los comentarios actualizados
    } catch (error) {
      console.error('Error al eliminar el comentario:', error);
      alert('Hubo un problema al eliminar el comentario. Inténtalo nuevamente.');
    }
  };

  return (
    <div className="entries-container">
      <aside className="sidebar">
        <div className="user-info">
          <div className="user-avatar"></div>
          <p>{user ? user.name : 'Usuario'}</p>
        </div>
        <nav className="sidebar-menu">
          <button className="menu-item" onClick={goToCreatePage}>Crear</button>
          
        </nav>
        <button className="logout" onClick={handleLogout}>Salir</button>
      </aside>
      
      <main className="entries-main">
        <h1>Entradas</h1>
        <div className="entries-list">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div key={post.id} className="entry">
                {editMode === post.id ? (
                  <div>
                    
                    <textarea
                      name="description"
                      value={editPost.description}
                      onChange={handleEditChange}
                      placeholder="Descripción"
                    ></textarea>
                    <select
                      name="label"
                      value={editPost.label}
                      onChange={handleEditChange}
                    >
                      <option value="Neutro">Neutro</option>
                      <option value="Alegre">Alegre</option>
                      <option value="Triste">Triste</option>
                      <option value="Enojado">Enojado</option>
                    </select>
                    <button onClick={() => handleSaveEdit(post.id)}>Guardar</button>
                  </div>
                ) : (
                  <>
                    <div className="entry-header">
                      <p>{post.title}</p>
                      <span className="entry-status">{post.label}</span>
                    </div>
                    <div className="entry-body">
                      <p>{post.description}</p>
                    </div>
                    <div className="entry-footer">
                      <span className="comment" onClick={() => handleViewComments(post.id)}>💬</span>
                      <span className="options" onClick={() => handleEditClick(post)}>✏️</span>
                      <span className="delete" onClick={() => handleDeletePost(post.id)}>🗑️</span>
                    </div>
                    {selectedPostId === post.id && (
                      <>
                        <div className="comments-section">
                          <h4>Comentarios</h4>
                          {comments.length > 0 ? (
                            comments.map((comment) => (
                              <div key={comment.id} className="comment">
                                {editCommentId === comment.id ? (
                                  <div>
                                    <input
                                      type="text"
                                      value={editCommentText}
                                      onChange={handleEditCommentChange}
                                    />
                                    <button onClick={() => handleSaveEditComment(comment.id)}>Guardar</button>
                                  </div>
                                ) : (
                                  <>
                                    <p className="comment-text">{comment.description}</p>
                                    <span className="comment-options" onClick={() => handleEditCommentClick(comment)}>✏️</span>
                                    <span className="comment-delete" onClick={() => handleDeleteComment(comment.id)}>🗑️</span>
                                  </>
                                )}
                              </div>
                            ))
                          ) : (
                            <p>No hay comentarios.</p>
                          )}
                        </div>
                        <div className="comment-section">
                          <input
                            type="text"
                            value={commentText}
                            onChange={handleCommentChange}
                            placeholder="Escribe un comentario..."
                            className="comment-input"
                          />
                          <button onClick={() => handleAddComment(post.id)} className="comment-submit">
                            Enviar
                          </button>
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>
            ))
          ) : (
            <p>No hay entradas disponibles.</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default EntriesPage;
