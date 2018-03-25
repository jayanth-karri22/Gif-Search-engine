import React from "react";
import GifItem from "./GifItem";

const GifList = props => {
  const gifitems = props.gifs.map(image => {
    return <GifItem key={image.id} gif={image} onGifSelect={props.onGifSelect}/>;
  });

  return <div className="gif-list">{gifitems}</div>;
};

export default GifList;
