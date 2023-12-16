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

const QRCode = mongoose.model('QRCode', qrCodeSchema);
module.exports = QRCode;
//module.exports = mongoose.model('QRCode', qrCodeSchema);
