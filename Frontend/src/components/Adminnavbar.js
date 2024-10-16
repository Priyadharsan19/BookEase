//frontend/src/components/navbar.js

import React from 'react';
import logo from './logo.png';
import './Adminnavbar.css';
import { useNavigate } from 'react-router-dom';
function Navbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/login');
  };
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="nav-links">
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}
export default Navbar;
