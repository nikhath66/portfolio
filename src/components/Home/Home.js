import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home-page">
      <div className="Home-container">
        <div className="Home-heading">
          Hi, I am John, <br />
          Creative Technologist
        </div>
        <div className="Home-description">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </div>
        <button className="Home-button">Download Resume</button>
      </div>
      <img className="Home-image" src="./images/Ellipse 1.png" />
    </div>
  );
};

export default Home;
