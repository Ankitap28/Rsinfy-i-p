import React from "react";
import Aboutimage from "./asserts/images/Aboutimage.jpg"
import "./css/About.css";
const About = () => {
  return (
    <>
    <h2 className="about-heading">ABOUT</h2>
      <div className="about" id="about"> 
        <div className="about-section">
          <div className="about-heading">
            <h4>WILDLIFE PHOTOGRAPHER</h4>
            <h4>&</h4>
            <h4>CREATIVE DESIGNER</h4>
            <h5 className="aboutme">ABOUT ME</h5>
          </div>
          <p className="about-para">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum by
            injected humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum
          </p>
          <p className="about-para">
            There isn't anything embarrassing hidden in the middle of text. All
            the Lorem Ipsum generators on the Internet tend to repeat predefined
            chunks as necessary you need to be sure
          </p>
        </div>
        
        <div className="row">
          <div className="column">
            <div className="card">
              <img src={Aboutimage} alt="img" height="400px" width="420px" />
              <div className="container">
                <h2>KIM THOMAS</h2>
                <p className="title">PROFESSIONAL PHOTOGRAPHER</p>
                <p>
                  I AM PASSIONATE WILDLIFE PHOTOGRAPHER AND A CREATIVE DESIGNER.
                </p>
                <p>kimthomas@example.com</p>
                <p>
                  <label className="label">
                    YOURS NEXT FAVOURITE PHOTOGRAPHER{" "}
                  </label>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
