import React, { useEffect, useState } from "react";
import axios from "axios";

import { Articles } from "./Articles";
import "./css/Featured.css";

export const Featured = () => {
  const [images, setImages] = useState([]);
  const handleSubmit = () => {
    let image = "wildlife";
    const url =
      `https://api.unsplash.com/search/photos?page=3&query=` +
      image +
      `&client_id=` +
      process.env.REACT_APP_ACCESS_KEY;
    axios.get(url).then((response) => {
      console.log(response.data);
      setImages(response.data.results);
    });
  };
  useEffect(() => {
    if (images.length === 0) {
      handleSubmit();
    }
  }, []);
  return (
    <>
      <div className="featured" id="featured">
        <div className="main_container">
          <div className="featured_container">
            <div className="featured">
              <div className="heading">FEATURED SPOTLIGHTS</div>
            </div>
            <div className="articles">
              {images.map((image, idx) => (
                <Articles
                  imageData={image}
                  image={image.urls.raw}
                  heading="VIDEO"
                  subheading="MARC KASOWITZ"
                  maindesc="Founding partner Marc E. Kasowitz speaks about Kasowitz Benson Torres LLP."
                  btn_name="Marc E. Kasowitz"
                  playbtn="PLAY MERC'S VIDEO"
                />
              ))}
         
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
