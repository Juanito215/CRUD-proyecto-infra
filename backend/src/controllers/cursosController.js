// src/controllers/cursosController.js
const cursoModel = require('../models/cursosModel');

const getCursos = async (req, res) => {
  try {
    const result = await cursoModel.getAllCursos();
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener cursos' });
  }
};

const getCursoById = async (req, res) => {
  try {
    const result = await cursoModel.getCursoById(req.params.id);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Curso no encontrado' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener curso' });
  }
};

const createCurso = async (req, res) => {
  try {
    const result = await cursoModel.createCurso(req.body);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear curso' });
  }
};

const updateCurso = async (req, res) => {
  try {
    const result = await cursoModel.updateCurso(req.params.id, req.body);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Curso no encontrado' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar curso' });
  }
};

const deleteCurso = async (req, res) => {
  try {
    const result = await cursoModel.deleteCurso(req.params.id);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Curso no encontrado' });
    }
    res.status(200).json({ mensaje: 'Curso eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar curso' });
  }
};

module.exports = {
  getCursos,
  getCursoById,
  createCurso,
  updateCurso,
  deleteCurso,
};
