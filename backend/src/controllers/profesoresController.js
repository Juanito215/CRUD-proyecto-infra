const model = require('../models/profesoresModel');

// Registro de nuevo profesor
const registrarProfesor = async (req, res) => {
  const { nombres, apellidos, correo_electronico, contrasena } = req.body;
  try {
    const existe = await model.findByEmail(correo_electronico);
    if (existe.rows.length > 0) {
      return res.status(409).json({ error: 'El correo ya está registrado' });
    }

    const result = await model.createProfesor({ nombres, apellidos, correo_electronico, contrasena });
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error en registro:', error);
    res.status(500).json({ error: 'Error al registrar profesor' });
  }
};

// Login básico
const loginProfesor = async (req, res) => {
  const { correo_electronico, contrasena } = req.body;
  try {
    const result = await model.findByEmail(correo_electronico);
    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const profesor = result.rows[0];

    // Comparar contraseñas sin encriptar (solo para desarrollo)
    if (profesor.contrasena !== contrasena) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    res.json({
      mensaje: 'Login exitoso',
      profesor: {
        id: profesor.id,
        nombres: profesor.nombres,
        apellidos: profesor.apellidos,
        correo_electronico: profesor.correo_electronico,
      },
    });
  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
};

module.exports = {
  registrarProfesor,
  loginProfesor,
};
