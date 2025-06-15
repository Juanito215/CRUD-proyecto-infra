// src/components/Login.jsx
import React, { useState } from 'react';
import '../styles/Login.css';

const Login = () => {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje('');

    try {
      const response = await fetch('http://localhost:5000/api/profesores/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          correo_electronico: correo,
          contrasena: contrasena
        })
      });

      const data = await response.json();

      if (response.ok) {
        setMensaje(`✅ Bienvenido/a ${data.profesor.nombres}`);
        // Aquí puedes guardar en localStorage, redirigir, etc.
      } else {
        setMensaje(`❌ ${data.error}`);
      }
    } catch (err) {
      setMensaje('❌ Error en el servidor.');
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión - Profesor</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          required
        />
        <button type="submit">Ingresar</button>
      </form>
      {mensaje && <p className="mensaje">{mensaje}</p>}
    </div>
  );
};

export default Login;
