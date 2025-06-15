// src/routes/calificaciones.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/calificacionesController');

router.get('/', controller.getCalificaciones);
router.get('/:id', controller.getCalificacionById);
router.post('/', controller.createCalificacion);
router.put('/:id', controller.updateCalificacion);
router.delete('/:id', controller.deleteCalificacion);

module.exports = router;
