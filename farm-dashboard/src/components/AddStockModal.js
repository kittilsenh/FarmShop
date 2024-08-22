// src/components/AddStockModal.js
import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './AddStockModal.css';

const AddStockModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Stock</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formStockId">
            <Form.Label>Stock ID</Form.Label>
            <Form.Control type="text" placeholder="Enter Stock ID" />
          </Form.Group>

          <Form.Group controlId="formRawWeight" className="mt-3">
            <Form.Label>Raw Weight</Form.Label>
            <Form.Control type="text" placeholder="Enter Raw Weight" />
          </Form.Group>

          <Form.Group controlId="formDate" className="mt-3">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={handleClose}>
          Save
        </Button>
        <Button variant="danger" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddStockModal;
