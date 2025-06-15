require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Función que intenta conectarse con reintento
const conectarConReintento = async (reintentos = 5, espera = 3000) => {
  for (let i = 1; i <= reintentos; i++) {
    try {
      await pool.connect();
      console.log('✅ Conexión a la base de datos establecida');
      return;
    } catch (err) {
      console.error(`❌ Error al conectar a la base de datos (intento ${i}):`, err.message);
      if (i === reintentos) {
        process.exit(1); // Salir si se agotan los intentos
      }
      await new Promise(res => setTimeout(res, espera));
    }
  }
};

conectarConReintento();

module.exports = pool;
