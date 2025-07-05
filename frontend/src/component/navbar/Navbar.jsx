import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeLine } from "react-icons/ri";
import logo from '../../assets/logo.png';
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Optional: close menu when a link is clicked (for better UX)
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar${menuOpen ? " open" : ""}`}>
      <div className="navbar-left">
        <img
          src={logo}
          alt="Logo"
          className="navbar-logo"
        />
      </div>
      <button
        className={`hamburger${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? <RiCloseLargeLine /> : <GiHamburgerMenu />}
      </button>
      <div className={`navbar-menu-wrapper${menuOpen ? " open" : ""}`}>
        <ul className="navbar-links" onClick={handleLinkClick}>
          <li>Learn</li>
          <li>Product</li>
          <li>Pricing</li>
          <li>Support</li>
          <li>Company</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="navbar-right" onClick={handleLinkClick}>
        <button className="navbar-login">Log in</button>
        <button className="navbar-signup">Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;