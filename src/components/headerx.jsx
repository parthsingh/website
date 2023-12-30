// Header.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation
import '../styles/Index.css'; // Import your stylesheetcl
import ThemedButton from './theme';

const Headerx = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50 mb-10">
      <div className="navbar-start">
        <a href='/' className="btn btn-ghost text-xl">parthsingh.</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href='/about'>About</a></li>
          <li>
            <a href='/projects'>Projects</a>
          </li>
          <li><a href='/coursework'>Coursework</a></li>
        </ul>
      </div>
      

      <div className="navbar-end">
      <ThemedButton />
        <a href='/contact' className="ml-5 btn btn-lg btn-outline">Contact Me</a>
      </div>
    </div>
  );
};

export default Headerx;
