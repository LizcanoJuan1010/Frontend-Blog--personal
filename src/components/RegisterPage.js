import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css';

const API_URL = 'http://localhost:8080/api/users';

function RegisterPage({ setUser }) { // Recibe setUser como prop
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    try {
      const response = await axios.post(API_URL, {
        name: formData.username,
        password: formData.password
      });
      console.log('Usuario creado:', response.data);
      alert("Registro exitoso!");

      setUser(response.data); // Guarda el usuario en el estado de App.js

      // Redirige a EntriesPage
      navigate('/entries');
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
      alert("Hubo un error al registrarse, intenta nuevamente.");
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1>Registrarme</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label htmlFor="confirmPassword">Confirmar contraseña:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn-register">Continuar</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
