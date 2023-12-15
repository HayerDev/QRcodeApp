const qrCodeGeneratorLibrary = require('qrcode');

const qrGenerator = async (data) => {
    try {
        //data is the URL from the frontend
        const qrCodeDataURL = await qrCodeGeneratorLibrary.toDataURL(data);
        return qrCodeDataURL; //this is the src for the frontend image tag
    } catch (error) {
        console.error('Error generating QR code:', error);
        throw error;
    }
};

module.exports = qrGenerator;
