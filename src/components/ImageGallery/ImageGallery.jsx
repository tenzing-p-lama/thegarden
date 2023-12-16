import React, { useState, useEffect } from "react";
import "./ImageGallery.scss";
import image1 from "../../assets/images/theGarden3.jpg";
import image2 from "../../assets/images/cottonbro-3338537.jpg";
import image3 from "../../assets/images/horizon-3763816.jpg";
import image4 from "../../assets/images/kae-ng-qjM403Kjw00.jpg";
import image5 from "../../assets/images/kyle-head-PW8K-W-Kni0.jpg";
import image6 from "../../assets/images/bon-vivant-qom5MPOER.jpg";

const images = [image1, image2, image3, image4, image5, image6];

const ImageGallery = () => {
  const [image, setimage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setimage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setimage((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setimage((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="cuisine-gallery">
      <button className="button button__left" onClick={handlePrev}>
        &lt;
      </button>
      <img
        className="cuisine-gallery__images"
        src={images[image]}
        alt={`Image ${image + 1}`}
      />
      <button className="button button__right" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default ImageGallery;
