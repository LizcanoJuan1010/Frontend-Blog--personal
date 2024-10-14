import React from 'react';
import './RegisterPage.css'; // Crea también este archivo CSS para los estilos específicos

function RegisterPage() {
  return (
    <div className="register-container">
      <div className="register-box">
        <h1>Registrarme</h1>
        <form>
          <label htmlFor="username">Usuario:</label>
          <input type="text" id="username" name="username" />

          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" />

          <label htmlFor="confirm-password">Confirmar contraseña:</label>
          <input type="password" id="confirm-password" name="confirm-password" />

          <button type="submit" className="btn-register">Continuar</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
