// Inputs.js

import React, { useState } from 'react';
import './App.css';


const Inputs = ({ onAddData }) => {
  const [inputValues, setInputValues] = useState({ name: '', age: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = () => {
    if (inputValues.name && inputValues.age && inputValues.email) {
      onAddData(inputValues);
      setInputValues({ name: '', age: '', email: '' });
    }
  };

  return (
    <div className='forms'>
    <div className='inputsdis'>
      <input type="text" name="name" value={inputValues.name} onChange={handleChange} placeholder="Name" />
      <input type="number" name="age" value={inputValues.age} onChange={handleChange} placeholder="Age" />
      <input type="email" name="email" value={inputValues.email} onChange={handleChange} placeholder="Email" />
      <button onClick={handleSubmit} className='sumbitbtn'>Submit</button>
      <button onClick={() => setInputValues({ name: '', age: '', email: '' })} className='clearbtn'>Clear</button>
    </div>
    </div>
  );
};

export default Inputs;