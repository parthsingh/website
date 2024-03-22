import React from 'react';
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom'; // Change HashRouter to BrowserRouter
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Courses from './pages/courses';
import Contact from './pages/contact';

const App = () => {
  return (
    <Router basename='/'> {/* Change HashRouter to BrowserRouter */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/coursework" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        {/* ... add routes for other pages */}
      </Routes>
    </Router> 
  );
};

export default App;
