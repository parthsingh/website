// App.js or your route configuration file

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Courses from './pages/courses';
import Contact from './pages/contact';
// ... import other pages

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path ="/projects" element={<Projects/>}/>
        <Route path = "/coursework" element={<Courses/>}/>
        <Route path = "/contact" element={<Contact/>}/>
        {/* ... add routes for other pages */}
      </Routes>
    </Router>
  );
};

export default App;