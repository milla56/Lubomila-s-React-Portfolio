import React, { useState } from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import './App.css';

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import NavbarMenu from './components/NavbarMenu';
import Footer from './components/Footer'
import ProjectView from './components/ProjectView'

function App() {
  
  return (
    <div className="App">
      <Router  basename={process.env.PUBLIC_URL}>
        <NavbarMenu />
        <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/project/:id" element={<ProjectView />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      </Router>
      
     
    </div>
  );
}

export default App;
