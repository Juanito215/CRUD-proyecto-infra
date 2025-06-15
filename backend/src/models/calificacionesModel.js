// src/models/calificacionesModel.js
const pool = require('../config/db');

// Obtener todas las calificaciones
const getAllCalificaciones = () => {
  return pool.query(`
    SELECT c.id, 
           e.nombres || ' ' || e.apellidos AS estudiante,
           cu.nombre AS curso,
           c.nota_primer_corte,
           c.nota_segundo_corte,
           c.nota_tercer_corte,
           c.promedio_final
    FROM calificaciones c
    JOIN estudiantes e ON e.id = c.estudiante_id
    JOIN cursos cu ON cu.id = c.curso_id
    ORDER BY c.id;
  `);
};

// Obtener calificación por ID
const getCalificacionById = (id) => {
  return pool.query(`
    SELECT * FROM calificaciones WHERE id = $1
  `, [id]);
};

// Crear una calificación
const createCalificacion = ({ estudiante_id, curso_id, nota_primer_corte, nota_segundo_corte, nota_tercer_corte }) => {
  return pool.query(`
    INSERT INTO calificaciones (
      estudiante_id, curso_id,
      nota_primer_corte, nota_segundo_corte, nota_tercer_corte
    ) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    [estudiante_id, curso_id, nota_primer_corte, nota_segundo_corte, nota_tercer_corte]
  );
};

// Actualizar una calificación
const updateCalificacion = (id, { estudiante_id, curso_id, nota_primer_corte, nota_segundo_corte, nota_tercer_corte }) => {
  return pool.query(`
    UPDATE calificaciones SET
      estudiante_id = $1,
      curso_id = $2,
      nota_primer_corte = $3,
      nota_segundo_corte = $4,
      nota_tercer_corte = $5
    WHERE id = $6 RETURNING *`,
    [estudiante_id, curso_id, nota_primer_corte, nota_segundo_corte, nota_tercer_corte, id]
  );
};

// Eliminar calificación
const deleteCalificacion = (id) => {
  return pool.query('DELETE FROM calificaciones WHERE id = $1 RETURNING *', [id]);
};

module.exports = {
  getAllCalificaciones,
  getCalificacionById,
  createCalificacion,
  updateCalificacion,
  deleteCalificacion
};
