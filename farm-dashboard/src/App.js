// src/App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Farm from './components/Farm';
import Devices from './components/Devices';
import Header from './components/Header';
import Login from './components/Login';
import Stock from './components/Stock';




import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // <-- Add this line


function App() {
  return (
    <>
      <Header />
        <Container fluid>
          <Row>
            <Col md={2}>
              <Sidebar />
            </Col>
            <Col md={10}>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/devices" element={<Devices />} />
                <Route path="/farm" element={<Farm />} />
                <Route path="/login" element={<Login />} />
                <Route path="/stock" element={<Stock />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </>  
  );
}

export default App;
