import React from "react";
import Navbar from "../Navbar/Navbar";

import laptop from "../../assets/laptop.jpg";
import "./home.scss";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="content">
          <h2>Design</h2>
          <h3>Develop</h3>
          <p>ReactJS developer based in Belgrade</p>
        </div>
        <img src={laptop} alt="alt-text" />
      </div>
    </>
  );
}
