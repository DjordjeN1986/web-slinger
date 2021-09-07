import React from "react";

import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Web Slingers Lounge</h1>
      <div className="links">
        <a href="/test">Test</a>
        <li>Test</li>
        <li>Test</li>
      </div>
    </nav>
  );
};

export default Navbar;
