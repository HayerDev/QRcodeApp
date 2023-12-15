import React, { useState } from 'react';
import axios from 'axios';

function QRCodeGenerator() {
  const [url, setUrl] = useState('');
  const [qrCode, setQrCode] = useState('');

  const generateQRCode = async () => {
    try {
      const response = await axios.post('http://localhost:8000/generate', { data: url });
      setQrCode(response.data.qrCodeImage);
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  };

  return (
    <div>
      <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter URL" />
      <button onClick={generateQRCode}>Generate QR Code</button>
      {qrCode && <img src={qrCode} alt="QR Code" />}
    </div>
  );
}

export default QRCodeGenerator;
