// src/utils/upload.js
const multer = require('multer');
const path = require('path');

// Configurar almacenamiento en /uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const nombre = Date.now() + '-' + Math.round(Math.random() * 1E9) + ext;
    cb(null, nombre);
  }
});

const upload = multer({ storage });

module.exports = upload;
