import React from "react";
import "./intro.css";
import Me from "../../img/me.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="i-intro">My Name is </h2>
          <h1 className="i-name">Narayan Panta</h1>
          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item">Web Developer</div>
              <div className="intro-title-item">UI/UX Designer</div>
              <div className="intro-title-item">Backend Developer</div>
              <div className="intro-title-item">Content Creator</div>
              <div className="intro-title-item">Writer</div>
            </div>
          </div>
          <div className="intro-desc">
            I design and develops services for customer of all sizes,
            specializing in creating stylish, modern websites, web services and
            online store.
          </div>
        </div>
      </div>
      <div className="intro-right">
        <div className="intro-bg"></div>
        <img src={Me} alt="" className="intro-image" />
      </div>
    </div>
  );
};

export default Intro;
