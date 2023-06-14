import React from 'react';
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import './App.css';

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import NavbarMenu from './components/NavbarMenu';

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarMenu />
        <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contact />} />
      </Routes>
      </Router>
      
     
    </div>
  );
}

export default App;
