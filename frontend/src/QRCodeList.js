import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './QRCodeList.css';
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from 'react-router-dom';


export function QRCodeList() {
  const [qrCodes, setQrCodes] = useState([]);
  const [selectedQRCode, setSelectedQRCode] = useState(null);
  const navigate = useNavigate();

  const deleteAllQRCodes = async () => {
    try {
      await axios.delete('http://localhost:8000/deleteallqrcodes');
      setQrCodes([]); // Clear the state
    } catch (error) {
      console.error('Error deleting all QR codes:', error);
    }
  };
  
  const deleteQRCode = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/deleteqrcode/${id}`);
      setQrCodes(qrCodes.filter(qrCode => qrCode._id !== id));
    } catch (error) {
      console.error('Error deleting QR code:', error);
    }
  };
  

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

  const goBack= () => {
    navigate('/')
  }; 

  return (
    <div className="main">
      <h2 className="main-h2">All Generated QR Codes</h2>
      <ul className="main-ul">
        {qrCodes.map((qrCode, index) => (
          <li className="main-li" key={qrCode._id || index}>
            <a className="main-a" href="#" onClick={() => setSelectedQRCode(qrCode)}>
              {qrCode.data}
            </a>
            <button className="delete-button" onClick={() => deleteQRCode(qrCode._id)}>X</button>
          </li>
        ))}
      </ul>
      <div class = "button-wrap">
        <button className="qr-button" onClick={goBack}>Back</button>
        <button className="qr-button" onClick={deleteAllQRCodes}>Delete All</button>
      </div>
      {selectedQRCode && (
        <div className="qr-overlay">
          <div className="qr-modal">
            <button onClick={() => setSelectedQRCode(null)}>X</button>
            <img src={selectedQRCode.image} alt="QR Code" />
          </div>
        </div>
      )}
    </div>
  );
  
  
}

