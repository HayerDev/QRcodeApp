const mongoose = require('mongoose');

const qrCodeSchema = new mongoose.Schema({
    data: {
        type: String,
        required: true
    },
    image: {
        //should be base64
        type: String, 
        required: true
    }
});

module.exports = mongoose.model('QRCode', qrCodeSchema);