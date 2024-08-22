// src/components/Farm.js
import React, { useState } from 'react';
import { Card, Row, Col, Button, Table, Image } from 'react-bootstrap';
import AddStockModal from './AddStockModal';

import hensIcon from '../assets/Chicken.jpg';
import foodIcon from '../assets/Food.png';
import waterIcon from '../assets/Water.jpg';
import eggIcon from '../assets/Eggs.jpg';

const Farm = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

  return (
    <div className="dashboard p-4">
      <h3>FARM DASH BOARD</h3>
      <p>Dashboard &gt; Home</p>
      <Button variant="warning" className="mb-4" onClick={handleShow}>
        Add Stock
      </Button>
      <row></row>
      <AddStockModal show={showModal} handleClose={handleClose} />
      <Row className="mb-4">
        <Col className="mb-3">
          <Card className="text-center h-100 d-flex flex-row align-items-center">
            <Image src={hensIcon} className="icon" />
            <Card.Body>
              <Card.Title>Hens</Card.Title>
              <Card.Text>1490</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-3">
          <Card className="text-center h-100 d-flex flex-row align-items-center">
            <Image src={foodIcon} className="icon" />
            <Card.Body>
              <Card.Title>Feed</Card.Title>
              <Card.Text>700 kg</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-3">
          <Card className="text-center h-100 d-flex flex-row align-items-center">
            <Image src={waterIcon} className="icon" />
            <Card.Body>
              <Card.Title>Water</Card.Title>
              <Card.Text>100 L</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-3">
          <Card className="text-center h-100 d-flex flex-row align-items-center">
            <Image src={eggIcon} className="icon" />
            <Card.Body>
              <Card.Title>No. of Eggs</Card.Title>
              <Card.Text>1420</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>No. of Hens</th>
            <th>Feed (kg)</th>
            <th>Water (L)</th>
            <th>No. of Eggs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>20/03/2024</td>
            <td>1492</td>
            <td>700</td>
            <td>100</td>
            <td>1420</td>
          </tr>
          <tr>
            <td>12/03/2024</td>
            <td>1494</td>
            <td>700</td>
            <td>100</td>
            <td>1427</td>
          </tr>
          <tr>
            <td>10/03/2024</td>
            <td>1500</td>
            <td>700</td>
            <td>100</td>
            <td>1455</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Farm;
