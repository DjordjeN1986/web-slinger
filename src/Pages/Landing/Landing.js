import React from "react";
import { Link } from "react-router-dom";

import "./landing.scss";

export default function Landing() {
  return (
    <div className="container">
      <h2>The Web Slingers Lounge</h2>
      <Link to="/home" className="btn-grad">
        Proceed
      </Link>
    </div>
  );
}
