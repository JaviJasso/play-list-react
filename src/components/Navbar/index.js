import React from 'react';
import logo from '../../assets/logo.svg';
import './index.css';


const Navbar = () => (
  <div className="app-header">
    <img src={logo} className="app-logo" alt="logo" />
    <h2>Welcome to React</h2>
  </div>
)
export default Navbar
