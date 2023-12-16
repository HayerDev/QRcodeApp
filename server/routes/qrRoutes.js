const express = require('express');
const router = express.Router();
const qrController = require('../controllers/qrController');

//route generate QR code
router.post('/generate', qrController.generateQRCode);
//route to retrieve all qr codes from db
router.get('/allqrcodes', qrController.retrieveAllQR);
router.delete('/deleteallqrcodes', qrController.deleteAllQR);
router.delete('/deleteqrcode/:id', qrController.deleteQRCode);

module.exports = router;
