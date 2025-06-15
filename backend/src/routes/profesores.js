const express = require('express');
const router = express.Router();
const controller = require('../controllers/profesoresController');

// Ruta para registrar un nuevo profesor
router.post('/register', controller.registrarProfesor);

// Ruta para login
router.post('/login', controller.loginProfesor);

module.exports = router;
