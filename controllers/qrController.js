const qrModel = require('../models/qrModel');
const qrGenerator = require('../utils/qrGenerator');

exports.generateQRCode = async (req, res) => {
    const { data } = req.body;

    try {
        //begin generation
        const qrCodeImage = qrGenerator(data); //stub for generator

        res.status(201).json({ message: 'QR Code generated!', qrCodeImage });
    } catch (error) {
        res.status(500).json({ message: 'Error generating QR code', error: error.message });
    }
};
