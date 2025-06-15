// src/models/cursosModel.js
const pool = require('../config/db');

// Obtener todos los cursos
const getAllCursos = () => {
  return pool.query('SELECT * FROM cursos ORDER BY id');
};

// Obtener curso por ID
const getCursoById = (id) => {
  return pool.query('SELECT * FROM cursos WHERE id = $1', [id]);
};

// Crear un nuevo curso
const createCurso = ({ nombre, descripcion, creditos }) => {
  return pool.query(
    `INSERT INTO cursos (nombre, descripcion, creditos)
     VALUES ($1, $2, $3) RETURNING *`,
    [nombre, descripcion, creditos]
  );
};

// Actualizar un curso
const updateCurso = (id, { nombre, descripcion, creditos }) => {
  return pool.query(
    `UPDATE cursos SET
      nombre = $1,
      descripcion = $2,
      creditos = $3
     WHERE id = $4 RETURNING *`,
    [nombre, descripcion, creditos, id]
  );
};

// Eliminar curso por ID
const deleteCurso = (id) => {
  return pool.query('DELETE FROM cursos WHERE id = $1 RETURNING *', [id]);
};

module.exports = {
  getAllCursos,
  getCursoById,
  createCurso,
  updateCurso,
  deleteCurso,
};
