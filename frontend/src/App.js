import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import {QRCodeGenerator} from './QRCodeGenerator';
import {QRCodeList} from './QRCodeList'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<QRCodeGenerator />} />
          <Route exact path="/all-qrcodes" element={<QRCodeList/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
