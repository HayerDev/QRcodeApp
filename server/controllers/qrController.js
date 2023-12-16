const qrModel = require('../model/qrModel');
const qrGenerator = require('../util/qrGenerator');
const QRCode = require('../model/qrModel');

exports.generateQRCode = async (req, res) => {
    console.log(req.body);
    const { data } = req.body;

    try {
        //begin generation
        const qrCodeImage = await qrGenerator(data);
        //console.log('QR Code generated:', qrCodeImage);

        //create a new QR code record in our db
        const newQRCode = new qrModel({
            data: data, //url
            image: qrCodeImage //qr code
        });
        
        
        await newQRCode.save();
       
        res.status(201).json({ message: 'QR Code generated!', qrCodeImage }); // Send src to frontend as res
    } catch (error) {
        res.status(500).json({ message: 'Error generating QR code', error: error.message });
    }
};

exports.retrieveAllQR = async (req, res) => {
    try {
        const allQRCodes = await QRCode.find(); 
        res.json(allQRCodes);
    } catch (error) {
        console.error('Error retrieving QR codes:', error);
        res.status(500).json({ message: 'Error retrieving QR codes', error: error.message });
    }
};

exports.deleteAllQR = async (req, res) => {
    try {
        await QRCode.deleteMany({}); 
        res.status(201).json({ message: 'All QRs removed'});
    } catch (error) {
        console.error('Error removing all QR codes:', error);
        res.status(500).json({ message: 'Error removing QR codes', error: error.message });
    }
};

exports.deleteQRCode = async (req, res) => {
    try {
        await QRCode.findByIdAndDelete(req.params.id);
        res.status(201).json({ message: 'QR removed'});
    } catch (error) {
        console.error('Error removing QR code:', error);
        res.status(500).json({ message: 'Error removing QR code', error: error.message });
    }
};