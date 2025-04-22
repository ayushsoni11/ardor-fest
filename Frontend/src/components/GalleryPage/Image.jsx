import React from 'react'
import "./Image.css";
import { ImLigature } from 'react-icons/im';

const Image = ({image}) => {
  return (
    <>
      <img src={image.src} alt={image.caption}/>
      <figcaption>{image.caption}</figcaption>
      <figcaption>{image.date}</figcaption>
    </>
  )
}

export default Image
