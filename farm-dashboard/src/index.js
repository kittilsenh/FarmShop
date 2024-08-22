// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';  // Update this line to use 'react-dom/client'
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));  // Update this line to use 'createRoot'
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
