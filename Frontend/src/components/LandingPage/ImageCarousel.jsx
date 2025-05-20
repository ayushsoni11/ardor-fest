import React, { useEffect, useState } from "react";
import "./ImageCarousel.css";

const images = [
  "https://cdn.pixabay.com/photo/2016/11/29/08/58/hands-1868562_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/09/09/19/23/hiphop-2733136_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/12/12/09/26/cricket-8444899_1280.jpg",
  "https://cdn.pixabay.com/photo/2019/05/27/04/19/guitar-4231782_1280.jpg",
  // Add more images if needed
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false); // Start fade-out
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setFade(true); // Start fade-in
      }, 200); // Wait for fade-out before changing image
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="carousel-container">
        <div className="box-for-opacity"></div>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className={`carousel-image ${fade ? "fade-in" : "fade-out"}`}
      />
    </div>
  );
};

export default ImageCarousel;
