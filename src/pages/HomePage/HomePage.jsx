import React from "react";

import "./HomePage.scss";
import interiorimg from "../../assets/images/theGarden2.jpg";
import barimg from "../../assets/images/raphael-8980827.jpg";
import FoodGallery from "../../components/FoodGallery/FoodGallery";

export default function HomePage() {
  return (
    <header className="App-header">
      <div className="hero">
        <img className="hero-image" src={interiorimg} alt="interior" />
        <p className="hero__content">The Garden at Ditmas, Brooklyn</p>
      </div>

      <div className="logo-jap">庭</div>

      {/* <div className="image-gallery">textbox with images</div> */}

      <section className="section">
        <div className="desc">
          <h3 className="desc__title">CUISINE</h3>

          <p className="desc__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vero
            modi harum nostrum corrupti omnis fugit illo reiciendis natus quo.
            Ea quam ipsam cupiditate quisquam quos incidunt, vero illo maiores.
          </p>
        </div>

        <FoodGallery className="gallery" />
      </section>

      <section className="section">
        <div className="desc">
          <h3 className="desc__title">BAR</h3>

          <p className="desc__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            velit asperiores accusamus eius quo temporibus non quam
            consequuntur, voluptate iure ad deleniti optio aperiam cumque quos
            odio magni, perspiciatis expedita?
          </p>
        </div>

        <div className="gallery">
          <img className="gallery__image" src={barimg} alt="bar" />
        </div>
      </section>

      <section className="map">
        location map with some text and google map link
      </section>
    </header>
  );
}
