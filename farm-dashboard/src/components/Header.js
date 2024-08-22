// src/components/Header.js
import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import logoIcon from '../assets/logo.png';  // Replace with your actual logo path
import bellIcon from '../assets/bell.png';  // Replace with your actual bell icon path
import userIcon from '../assets/user.png';  // Replace with your actual user icon path
import './Header.css';

const Header = () => {
  return (
    <Navbar bg="light" variant="light" className="header-navbar">
      <Navbar.Brand href="/" className="d-flex align-items-center">
        <span className="ms-2">Dashboard</span>
        </Navbar.Brand>
        <Nav className="ms-auto d-flex align-items-center">
        <Image src={logoIcon} alt="Logo" className="header-icon" />
        <Nav.Link href="#notifications">
            <Image src={bellIcon} alt="Notifications" className="header-icon" />
        </Nav.Link>
        <Nav.Link href="/login">
            <Image src={userIcon} alt="Profile" className="header-icon" />
        </Nav.Link>

      </Nav>
    </Navbar>
  );
};

export default Header;