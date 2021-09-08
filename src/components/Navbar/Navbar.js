import React from "react";
import { Link } from "react-router-dom";

import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/home" className="home-link nav-link">
        Web Slingers Lounge
      </Link>
      <div className="links">
        <Link className="text-link" to="/test">
          About
        </Link>
        <Link className="text-link" to="/projects">
          Projects
        </Link>
        <Link className="text-link" to="/test">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
