const pool = require('../config/db');

// Buscar profesor por correo electrónico
const findByEmail = (correo_electronico) => {
  return pool.query('SELECT * FROM profesores WHERE correo_electronico = $1', [correo_electronico]);
};

// Crear nuevo profesor
const createProfesor = ({ nombres, apellidos, correo_electronico, contrasena }) => {
  return pool.query(
    `INSERT INTO profesores (nombres, apellidos, correo_electronico, contrasena)
     VALUES ($1, $2, $3, $4)
     RETURNING id, nombres, apellidos, correo_electronico`,
    [nombres, apellidos, correo_electronico, contrasena]
  );
};

module.exports = {
  findByEmail,
  createProfesor,
};
