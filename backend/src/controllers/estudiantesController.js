// src/controllers/estudiantesController.js

const estudianteModel = require('../models/estudiantesModel');

// Obtener todos los estudiantes
const getEstudiantes = async (req, res) => {
  try {
    const result = await estudianteModel.getAllEstudiantes();
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error al obtener estudiantes:', error);
    res.status(500).json({ error: 'Error al obtener estudiantes' });
  }
};

// Obtener un estudiante por ID
const getEstudianteById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await estudianteModel.getEstudianteById(id);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Estudiante no encontrado' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Error al obtener el estudiante:', error);
    res.status(500).json({ error: 'Error al obtener el estudiante' });
  }
};

// Crear un nuevo estudiante
const createEstudiante = async (req, res) => {
  const data = req.body;
  try {
    const result = await estudianteModel.createEstudiante(data);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error al crear el estudiante:', error);
    res.status(500).json({ error: 'Error al crear estudiante' });
  }
};

// Actualizar un estudiante existente
const updateEstudiante = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const result = await estudianteModel.updateEstudiante(id, data);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Estudiante no encontrado' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Error al actualizar estudiante:', error);
    res.status(500).json({ error: 'Error al actualizar estudiante' });
  }
};

// Eliminar un estudiante
const deleteEstudiante = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await estudianteModel.deleteEstudiante(id);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Estudiante no encontrado' });
    }
    res.status(200).json({ mensaje: 'Estudiante eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar estudiante:', error);
    res.status(500).json({ error: 'Error al eliminar estudiante' });
  }
};

module.exports = {
  getEstudiantes,
  getEstudianteById,
  createEstudiante,
  updateEstudiante,
  deleteEstudiante
};
