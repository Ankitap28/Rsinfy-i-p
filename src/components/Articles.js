import React from "react";
import "./css/Featured.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MyImage = ({ image }) => (
  <div>
    {console.log(image)}
    <LazyLoadImage
      alt={image?.alt_description}
      height={image.height}
      src={image?.urls?.raw} // use normal <img> attributes as props
      width={image.width}
    />
  </div>
);

export const Articles = ({
  image,
  imageData,
  heading,
  subheading,
  maindesc,
  desc,
  btn_name,
  playbtn,
}) => {
  return (
    <div className="card">
      
      <img src={image} className="card-img-top" alt="umage" />
      </div>
      
  );
};
