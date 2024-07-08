import React from 'react'

import './index.css'

const Navbar = () => (
  <div className="navbar-container">
    <nav className="navbar">
      <a className="navbar-header" href="#">
        Andrew Dillon
      </a>
      <div className="navbar-links">
        <a className="navbar-link" href="#about">
          About
        </a>
        <a className="navbar-link" href="#career">
          Career
        </a>
        <a className="navbar-link" href="#hire">
          Hire
        </a>
        <a className="navbar-link" href="#projects">
          Projects
        </a>
      </div>
    </nav>
  </div>
)

export default Navbar
