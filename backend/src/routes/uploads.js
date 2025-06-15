const express = require('express');
const router = express.Router();
const upload = require('../utils/upload');

// Ruta POST /api/uploads
router.post('/', upload.single('imagen'), (req, res) => {
  const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
  res.json({ url: imageUrl });
});

module.exports = router;
