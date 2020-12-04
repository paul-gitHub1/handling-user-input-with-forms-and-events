import React from "react";
import "./ImageList.css";
import ImageCard from './ImageCard';

const ImageList = (props) => {
  /*
  // before destructuring
  const images = props.images.map((image) => {
    return (
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        key={image.id}
      />
    );
  });
  */

  // after destructuring
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
