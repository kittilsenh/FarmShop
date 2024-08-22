// src/components/Login.js
import React from 'react';
import { Form, Button, Row, Col, Image } from 'react-bootstrap';
import barnImage from '../assets/barn.png'; // Replace with your barn image path
import './Login.css'; // Custom styles

const Login = () => {
  return (
    <div className="login-container">
      <Row className="align-items-center">
        <Col md={6}>
          <Image src={barnImage} alt="Barn" className="login-image" />
        </Col>
        <Col md={6}>
          <h3>Please login to your account</h3>
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Username" />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="warning" type="submit" className="mt-4 w-100">
              Login
            </Button>

            <p className="mt-3 text-center">
              <a href="#forgot-password">Forgot password?</a>
            </p>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
