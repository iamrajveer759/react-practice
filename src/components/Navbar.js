import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"; // Make sure this file exists

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">My Website</div>

      {/* Hamburger Menu (Mobile) */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      {/* Navigation Links */}
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
          <NavLink to="/" className="nav-item" onClick={() => setIsOpen(false)}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-item" onClick={() => setIsOpen(false)}>About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-item" onClick={() => setIsOpen(false)}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
