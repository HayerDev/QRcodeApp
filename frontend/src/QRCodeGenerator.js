import React, { useState } from 'react';
import axios from 'axios';
import './QRCodeGenerator.css';
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from 'react-router-dom';

export function QRCodeGenerator() {
  const [url, setUrl] = useState('');
  const [qrCode, setQrCode] = useState('');
  const navigate = useNavigate();

  const generateQRCode = async () => {
    try {
      const response = await axios.post('http://localhost:8000/generate', { data: url });
      setQrCode(response.data.qrCodeImage);
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  };

  const goToQRCodeList = () => {
    navigate('/all-qrcodes')
  };

  return (
    <div className="qr-container">
      {qrCode && <img src={qrCode} className="qr-image" alt="QR Code" />}
      <input className="qr-input" type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter URL" />
      <div class = "button-wrap">
        <button className="qr-button" onClick={generateQRCode}>Generate QR Code</button>
        <button className="qr-button" onClick={goToQRCodeList}>All QR Codes</button>
      </div>
    </div>
  );
}

