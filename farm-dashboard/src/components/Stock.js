// src/components/Stock.js
import React from 'react';
import { Table, Button } from 'react-bootstrap';
import './Stock.css'; // Add styles if necessary

const Stock = () => {
  const stockData = [
    {
      id: 'ST 001',
      rawWeight: '7000 kg',
      date: '02/04/2024 08:15:12',
      productWeight: '6500 kg',
      productDate: '03/04/2024 08:45:12',
      status: 'Updated',
    },
    {
      id: 'ST 002',
      rawWeight: '6500 kg',
      date: '22/04/2024 09:20:00',
      productWeight: 'Pending',
      productDate: 'Pending',
      status: 'Pending',
    },
  ];

  return (
    <div className="stock-page p-4">
      <h3>STOCK</h3>
      <Table bordered hover>
        <thead>
          <tr>
            <th>Stock ID</th>
            <th>Raw Weight</th>
            <th>Date</th>
            <th>Product Weight</th>
            <th>Product Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {stockData.map((stock, index) => (
            <tr key={index}>
              <td>{stock.id}</td>
              <td>{stock.rawWeight}</td>
              <td>{stock.date}</td>
              <td>{stock.productWeight}</td>
              <td>{stock.productDate}</td>
              <td>
                <Button
                  variant={stock.status === 'Pending' ? 'warning' : 'light'}
                  disabled={stock.status !== 'Pending'}
                >
                  Update
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Stock;
