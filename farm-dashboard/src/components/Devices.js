// src/components/Devices.js
import React, { useState } from 'react';
import { Card, Row, Col, Badge, Button } from 'react-bootstrap';
import temperatureIcon from '../assets/Temperature.png'; // example icon
import rpmIcon from '../assets/Rpm.jpg'; // example icon
import runtimeIcon from '../assets/Runtime.png'; // example icon
import currentIcon from '../assets/Current.png'; // example icon
import pressureIcon from '../assets/Pressure.jpg'; // example icon

import './Devices.css'

import AddStockModal from './AddStockModal';

const Devices = () => {
    const [showModal, setShowModal] = useState(false);
  
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

  return (
    <div className="devices p-4">
      <h3>Devices</h3>
      <p>Dashboard &gt; Home</p>
      <Button variant="warning" className="mb-4" onClick={handleShow}>
        Add Stock
      </Button>
      <AddStockModal show={showModal} handleClose={handleClose} />
      <Row>
        {/* Crusher */}
        <Col md={12} className="mb-4">
          <h5><Badge bg="success">Crusher</Badge></h5>
          <Row>
            <Col>
            
              <Card className="text-center">
                <Card.Body>
                  <img src={temperatureIcon} alt="Temperature" className="icon" />
                  <Card.Text>Temperature: 50°C</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="text-center">
                <Card.Body>
                  <img src={rpmIcon} alt="RPM" className="icon" />
                  <Card.Text>RPM: 5000</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="text-center">
                <Card.Body>
                  <img src={runtimeIcon} alt="Run Time" className="icon" />
                  <Card.Text>Run Time: 2500 h</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="text-center">
                <Card.Body>
                  <img src={currentIcon} alt="Current" className="icon" />
                  <Card.Text>Current: 12 A</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        {/* Mixer */}
        <Col md={12} className="mb-4">
          <h5><Badge bg="success">Mixer</Badge></h5>
          <Row>
            <Col>
              <Card className="text-center">
                <Card.Body>
                  <img src={temperatureIcon} alt="Temperature" className="icon" />
                  <Card.Text>Temperature: 75°C</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="text-center">
                <Card.Body>
                  <img src={rpmIcon} alt="RPM" className="icon" />
                  <Card.Text>RPM: 4000</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="text-center">
                <Card.Body>
                  <img src={runtimeIcon} alt="Run Time" className="icon" />
                  <Card.Text>Run Time: 1900 h</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="text-center">
                <Card.Body>
                  <img src={currentIcon} alt="Current" className="icon" />
                  <Card.Text>Current: 13 A</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        {/* Cooler */}
        <Col md={12} className="mb-4">
          <h5><Badge bg="danger">Cooler</Badge></h5>
          <Row>
            <Col>
              <Card className="text-center">
                <Card.Body>
                  <img src={temperatureIcon} alt="Temperature" className="icon" />
                  <Card.Text>Temperature: 10°C</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="text-center">
                <Card.Body>
                  <img src={pressureIcon} alt="Pressure" className="icon" />
                  <Card.Text>Pressure: 3 bar</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="text-center">
                <Card.Body>
                  <img src={runtimeIcon} alt="Run Time" className="icon" />
                  <Card.Text>Run Time: 2500 h</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="text-center">
                <Card.Body>
                  <img src={currentIcon} alt="Current" className="icon" />
                  <Card.Text>Current: 15 A</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Devices;
