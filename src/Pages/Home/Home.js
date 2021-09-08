import React from "react";
import Navbar from "../../components/Navbar/Navbar";

import laptop from "../../assets/laptop.jpg";
import "./home.scss";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="home-content">
          <div className="design-description">
            <h2>Design</h2>
            <p>
              Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum
              Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem
              Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor
              Lorem Ipsum Dolor
            </p>
          </div>
          <div className="develop-description">
            <h3>Develop</h3>
            <p>ReactJS developer based in Belgrade</p>
            <p>ReactJS developer based in Belgrade</p>
            <p>ReactJS developer based in Belgrade</p>
            <p>ReactJS developer based in Belgrade</p>
            <p>ReactJS developer based in Belgrade</p>
          </div>
        </div>
        <img src={laptop} alt="alt-text" />
      </div>
    </>
  );
}
