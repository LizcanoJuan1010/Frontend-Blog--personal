import React from 'react';
import './WelcomePage.css'; // Importa el archivo de estilos

function WelcomePage() {
  return (
    <div className="welcome-container">
      <h1>Bienvenido a</h1>
      <h2>Tu Blog</h2>
      <div className="button-container">
        <button className="btn">INICIAR SESIÓN</button>
        <button className="btn">REGISTRARME</button>
      </div>
    </div>
  );
}

export default WelcomePage;
