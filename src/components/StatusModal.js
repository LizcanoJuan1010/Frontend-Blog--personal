import React from 'react';
import './StatusModal.css';

function StatusModal({ type }) {
  const getStatusContent = () => {
    switch (type) {
      case 'loading':
        return { icon: '...', message: 'CARGANDO' };
      case 'error':
        return { icon: '✖', message: 'ERROR' };
      case 'published':
        return { icon: '✔', message: 'PUBLICADO CORRECTAMENTE' };
      case 'saved':
        return { icon: '✔', message: 'SE AGREGO A BORRADORES' };
      default:
        return null;
    }
  };

  const { icon, message } = getStatusContent();

  return (
    <div className="status-modal">
      <div className="status-box">
        <div className="status-icon">{icon}</div>
        <p className="status-message">{message}</p>
      </div>
    </div>
  );
}

export default StatusModal;
