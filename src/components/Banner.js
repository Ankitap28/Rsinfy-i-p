import React from "react";
import introimage from "./asserts/images/introimage.jpg";
import image1 from "./asserts/images/image1.jpg";
import image2 from "./asserts/images/image2.jpg";
import image3 from "./asserts/images/image3.jpg";
import image4 from "./asserts/images/image4.jpg";

import "./css/Banner.css";

export const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="banner_container">
          <div className="intro_container">
            <div className="intro_image">
              <img src={introimage} alt="..." width="1161px" height="750px" />
              <div className="intro_content white_text">
                <h2 className="intro_inner_content">
                  <h1 className="intro_title">I AM KIM THOMAS </h1>
                  <br />
                  WILDLIFE PHOTOGRAPHER.
                  <br />
                  &
                  <br />
                  CREATIVE DESIGNER.
                </h2>
              </div>
            </div>
          </div>
          <div className="banner" id="banner">
            <div className="image_slider">
              <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                    style={{
                      width: "15px",
                      height: "15px",
                      borderRadius: "50%",
                      backgroundColor: "white",
                    }}
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                    style={{
                      width: "15px",
                      height: "15px",
                      borderRadius: "50%",
                    }}
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                    style={{
                      width: "15px",
                      height: "15px",
                      borderRadius: "50%",
                    }}
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="3"
                    aria-label="Slide 3"
                    style={{
                      width: "15px",
                      height: "15px",
                      borderRadius: "50%",
                    }}
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active image">
                    <img
                      src={image1}
                      className="d-block w-100 image1"
                      alt="..."
                      width="100%"
                    />
                    <div className="slider_content white_text">
                      <h1 className="inner_content">
                        Creative.
                        <br />
                        Aggressive.
                        <br />
                        Relentless.
                      </h1>
                     
                    </div>
                  </div>
                  <div className="carousel-item image">
                    <img
                      src={image2}
                      className="d-block w-100 image2"
                      alt="..."
                    />
                    <div className="slider_content">
                      <h1 className="inner_content">
                        This
                        <br />
                        is Who
                        <br />
                        We Are.
                      </h1>
                    
                    </div>
                  </div>
                  <div className="carousel-item image">
                    <img
                      src={image3}
                      className="d-block w-100 image3"
                      alt="..."
                    />
                    <div className="slider_content">
                      <h1 className="inner_content">
                        Foil your
                        <br />
                        Opponent
                      </h1>
                    
                  </div>
                  <div className="carousel-item image">
                    <img
                      src={image4}
                      className="d-block w-100 image4"
                      alt="..."
                      height="2000px"
                    />
                    <div className="slider_content">
                      <h1 className="inner_content">
                        Primed
                        <br />
                        And
                        <br />
                        Ready.
                      </h1>
                      
                    </div>
                  </div>
                </div>
                <div className="changing">
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="name">
            
            <div className="welcome">PICTURES SAYS IT ALL</div>
            <div className="welcome_desc">
              
              A creative, aggressive and relentless in achieving the very best
              results of work.{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
