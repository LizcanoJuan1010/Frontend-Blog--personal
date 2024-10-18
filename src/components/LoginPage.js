// LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const API_URL = 'http://localhost:8080/api/users/login';

function LoginPage({ setUser }) {
  const [credentials, setCredentials] = useState({ name: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const userData = await response.json();
        console.log("Datos del usuario:", userData); // Imprime los datos para depuración
        setUser(userData);
        alert("Inicio de sesión exitoso!");
        navigate('/entries');
      }
      else {
        alert("Error al verificar las credenciales, por favor intenta de nuevo.");
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert("Hubo un problema al iniciar sesión, intenta nuevamente.");
    }
  };

  return (
    <div className="login-container">
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="name"
          placeholder="Usuario"
          value={credentials.name}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn-login">Ingresar</button>
      </form>
    </div>
  );
}

export default LoginPage;
