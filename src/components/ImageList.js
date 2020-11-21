import React from "react";

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
  const images = props.images.map(({ alt_description, id, urls }) => {
    return <img src={urls.regular} alt={alt_description} key={id} />;
  });

  return <div>{images}</div>;
};

export default ImageList;
