// src/components/Sidebar.js
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // To connect the pages, end of task 2 

import './Sidebar.css' // Assuming custom styles in Sidebar.css

const Sidebar = () => {
  return (
    <div className="sidebar bg-light vh-100 p-3">
      <ListGroup variant="flush">
        <ListGroup.Item as={Link} to="/" exact activeClassName="active-link" className="sidebar-item">
          Dashboard
        </ListGroup.Item>
        <ListGroup.Item as={Link} to="/devices" activeClassName="active-link" className="sidebar-item">
          Devices
        </ListGroup.Item>
        <ListGroup.Item as={Link} to="/stock" activeClassName="active-link" className="sidebar-item">
          Stock
        </ListGroup.Item>
        <ListGroup.Item as={Link} to="/farm" activeClassName="active-link" className="sidebar-item">
          Farm
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Sidebar; 