// DataTable.js

import React from 'react';
import './App.css';

const DataTable = ({ tableData, onDelete, deletedData, onClearDeletedData }) => {
  return (
    <div className='forms'>
      <div>
        <h2>Data Table</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.email}</td>
                <td>
                  <button onClick={() => onDelete(index)} className='btnone'>Delete</button>
                  <button className='btnsecond'>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h2>Retrive / Deleted Data</h2>
        <button onClick={onClearDeletedData} className='deleclearbtn'>Clear Deleted Data</button>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {deletedData.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;