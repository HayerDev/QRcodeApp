const qrModel = require('../model/qrModel');
const qrGenerator = require('../util/qrGenerator');

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
