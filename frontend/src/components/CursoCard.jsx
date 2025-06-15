import React from 'react';
import '../styles/CursoCard.css';

const CursoCard = ({ curso }) => {
  return (
    <div className="card curso">
      <h3>{curso.nombre}</h3>
      <p>{curso.descripcion}</p>
      <p>Créditos: {curso.creditos}</p>
    </div>
  );
};

export default CursoCard;
