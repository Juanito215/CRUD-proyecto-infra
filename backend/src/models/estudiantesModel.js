// src/models/estudiantesModel.js

const pool = require('../config/db');

// Obtener todos los estudiantes
const getAllEstudiantes = () => {
  return pool.query('SELECT * FROM estudiantes ORDER BY id');
};

// Obtener un estudiante por ID
const getEstudianteById = (id) => {
  return pool.query('SELECT * FROM estudiantes WHERE id = $1', [id]);
};

// Crear un nuevo estudiante
const createEstudiante = (data) => {
  const {
    nombres,
    apellidos,
    codigo_identificacion,
    grado,
    promedio,
    imagen_url,
    correo_electronico,
    esta_activo
  } = data;

  return pool.query(
    `INSERT INTO estudiantes (
      nombres,
      apellidos,
      codigo_identificacion,
      grado,
      promedio,
      imagen_url,
      correo_electronico,
      esta_activo
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *`,
    [
      nombres,
      apellidos,
      codigo_identificacion,
      grado,
      promedio,
      imagen_url,
      correo_electronico,
      esta_activo
    ]
  );
};

// Actualizar estudiante por ID
const updateEstudiante = (id, data) => {
  const {
    nombres,
    apellidos,
    codigo_identificacion,
    grado,
    promedio,
    imagen_url,
    correo_electronico,
    esta_activo
  } = data;

  return pool.query(
    `UPDATE estudiantes SET
      nombres = $1,
      apellidos = $2,
      codigo_identificacion = $3,
      grado = $4,
      promedio = $5,
      imagen_url = $6,
      correo_electronico = $7,
      esta_activo = $8
    WHERE id = $9
    RETURNING *`,
    [
      nombres,
      apellidos,
      codigo_identificacion,
      grado,
      promedio,
      imagen_url,
      correo_electronico,
      esta_activo,
      id
    ]
  );
};

// Eliminar estudiante por ID
const deleteEstudiante = (id) => {
  return pool.query('DELETE FROM estudiantes WHERE id = $1 RETURNING *', [id]);
};

module.exports = {
  getAllEstudiantes,
  getEstudianteById,
  createEstudiante,
  updateEstudiante,
  deleteEstudiante
};
