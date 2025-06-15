// backend/server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Importar conexión desde src/config
const pool = require('./src/config/db');

const app = express();
app.use(cors());
app.use(express.json());

// Ruta de prueba de conexión
app.get('/api/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ time: result.rows[0].now });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Fallo en conexión con la base de datos' });
  }
});

app.use('/uploads', express.static('uploads'));

const uploadRoutes = require('./src/routes/uploads');
app.use('/api/uploads', uploadRoutes);

// Ruta para estudiantes
const estudiantesRoutes = require('./src/routes/estudiantes');
app.use('/api/estudiantes', estudiantesRoutes);

// Ruta para cursos
const cursosRoutes = require('./src/routes/cursos');
app.use('/api/cursos', cursosRoutes);

// Ruta para calificaciones
const calificacionesRoutes = require('./src/routes/calificaciones');
app.use('/api/calificaciones', calificacionesRoutes);

// Ruta para profesores
const profesoresRoutes = require('./src/routes/profesores');
app.use('/api/profesores', profesoresRoutes);

// Puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Servidor backend escuchando en http://localhost:${PORT}`)
);
