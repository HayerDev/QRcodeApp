const express = require('express');
const router = express.Router();
const qrController = require('../controllers/qrController');

//route generate QR code
router.post('/generate', qrController.generateQRCode);

module.exports = router;
