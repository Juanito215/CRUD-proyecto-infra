// src/routes/estudiantes.js

const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudiantesController');

// Ruta para obtener todos los estudiantes
router.get('/', estudiantesController.getEstudiantes);

// Ruta para obtener un estudiante por ID
router.get('/:id', estudiantesController.getEstudianteById);

// Ruta para crear un nuevo estudiante
router.post('/', estudiantesController.createEstudiante);

// Ruta para actualizar un estudiante por ID
router.put('/:id', estudiantesController.updateEstudiante);

// Ruta para eliminar un estudiante por ID
router.delete('/:id', estudiantesController.deleteEstudiante);

module.exports = router;
