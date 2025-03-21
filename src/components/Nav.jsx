import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">| Home | </Link></li>
        <li><Link to="/myJobEvents">| MyJob |</Link></li>
        <li><Link to="/profile">| Profile |</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;