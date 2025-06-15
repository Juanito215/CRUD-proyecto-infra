// src/controllers/calificacionesController.js
const model = require('../models/calificacionesModel');

const getCalificaciones = async (req, res) => {
  try {
    const result = await model.getAllCalificaciones();
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener calificaciones' });
  }
};

const getCalificacionById = async (req, res) => {
  try {
    const result = await model.getCalificacionById(req.params.id);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Calificación no encontrada' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener calificación' });
  }
};

const createCalificacion = async (req, res) => {
  try {
    const result = await model.createCalificacion(req.body);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear calificación' });
  }
};

const updateCalificacion = async (req, res) => {
  try {
    const result = await model.updateCalificacion(req.params.id, req.body);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Calificación no encontrada' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar calificación' });
  }
};

const deleteCalificacion = async (req, res) => {
  try {
    const result = await model.deleteCalificacion(req.params.id);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Calificación no encontrada' });
    }
    res.status(200).json({ mensaje: 'Calificación eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar calificación' });
  }
};

module.exports = {
  getCalificaciones,
  getCalificacionById,
  createCalificacion,
  updateCalificacion,
  deleteCalificacion
};
