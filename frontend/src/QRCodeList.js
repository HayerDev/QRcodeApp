import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function QRCodeList() {
  const [qrCodes, setQrCodes] = useState([]);

  useEffect(() => {
    const fetchQRCodes = async () => {
      try {
        const response = await axios.get('http://localhost:8000/allqrcodes');
        setQrCodes(response.data);
      } catch (error) {
        console.error('Error fetching QR codes:', error);
      }
    };

    fetchQRCodes();
  }, []);

  return (
    <div>
      <h2>All Generated QR Codes</h2>
      <ul>
        {qrCodes.map((qrCode, index) => (
          <li key={index}>{qrCode.data}</li>
        ))}
      </ul>
    </div>
  );
}


