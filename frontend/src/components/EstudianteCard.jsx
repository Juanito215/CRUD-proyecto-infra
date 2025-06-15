import React from 'react';
import '../styles/EstudianteCard.css';

const EstudianteCard = ({ estudiante }) => {
  return (
    <div className="card">
      <img src={estudiante.imagen_url} alt={estudiante.nombres} />
      <h3>{estudiante.nombres} {estudiante.apellidos}</h3>
      <p>Grado: {estudiante.grado}</p>
      <p>Promedio: {estudiante.promedio}</p>
    </div>
  );
};

export default EstudianteCard;
