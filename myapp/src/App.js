import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';

import Home from '../src/pages/Home'
import About from '../src/pages/About'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      </Routes>
      
     
    </div>
  );
}

export default App;
