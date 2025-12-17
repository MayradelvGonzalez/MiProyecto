import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import HomePage from './components/HomePage';


import './App.css';

function App() {
  return (
    <div className="App-container">
      <Routes>
        <Route path="/" element={<HomePage />} /> 
      </Routes>
    </div>
  );
}

export default App;