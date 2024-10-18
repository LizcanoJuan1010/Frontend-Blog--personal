import React from 'react';
import './LoginPage.css'; // Asegúrate de crear también este archivo CSS para los estilos específicos

function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Iniciar sesión</h1>
        <form>
          <label htmlFor="username">Usuario:</label>
          <input type="text" id="username" name="username" />

          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" />

          <button type="submit" className="btn-login">Continuar</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
