import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "./HomePage.scss";
import interiorimg from "../../assets/images/theGarden2.jpg";
import barimg from "../../assets/images/raphael-8980827.jpg";
import FoodGallery from "../../components/FoodGallery/FoodGallery";
import GoogleMap from "../../components/GoogleMap/GoogleMap";

export default function HomePage() {
  useEffect(() => {
    Aos.init({
      duration: 600,
      offset: 80,
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <header className="App-header">
      <div className="hero">
        <img className="hero-image" src={interiorimg} alt="interior" />
        <p className="hero__content">The Garden at Ditmas, Brooklyn</p>
      </div>

      <div className="hero-logo" data-aos="fade-up">
        <h1 className="hero-logo__jap logo-jap">庭</h1>
        <h2 className="hero-logo__eng logo-name" data-aos="fade-up">
          the garden
        </h2>
      </div>

      <section className="section" data-aos="fade-up">
        <div className="desc" data-aos="fade-up">
          <h2 className="desc__title">CUISINE</h2>

          <p className="desc__text" data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vero
            modi harum nostrum corrupti omnis fugit illo reiciendis natus quo.
            Ea quam ipsam cupiditate quisquam quos incidunt, vero illo maiores.
          </p>
        </div>

        <FoodGallery className="gallery" />
      </section>

      <section className="section" data-aos="fade-up">
        <div className="desc" data-aos="fade-up">
          <h2 className="desc__title">BAR</h2>

          <p className="desc__text" data-aos="fade-up">
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

      <section className="section" data-aos="fade-up">
        <div className="desc" data-aos="fade-up">
          <h2 className="desc__title">ACCESS</h2>

          <div className="desc__text" data-aos="fade-up">
            <div className="desc__text-section">
              <p className="desc__text-title">Address</p>
              <p className="dec__text-content">
                1108 Cortelyou Rd, Brooklyn, NY 11218, USA
              </p>
            </div>

            <div className="desc__text-section">
              <p className="desc__text-title">Tel</p>
              <p className="dec__text-content">+13473652968</p>
            </div>

            <div className="desc__text-section">
              <p className="desc__text-title">Hours</p>

              <div className="desc__text-group">
                <div className="desc__text-hours">
                  <p className="desc__text-hours_day">Monday</p>
                  <p className="dec__text-content">Closed</p>
                </div>

                <div className="desc__text-hours">
                  <p className="desc__text-hours_day">Tuesday</p>
                  <p className="dec__text-content">12pm - 10pm</p>
                </div>

                <div className="desc__text-hours">
                  <p className="desc__text-hours_day">Wednesday</p>
                  <p className="dec__text-content">12pm - 10pm</p>
                </div>

                <div className="desc__text-hours">
                  <p className="desc__text-hours_day">Thursday</p>
                  <p className="dec__text-content">12pm - 10pm</p>
                </div>

                <div className="desc__text-hours">
                  <p className="desc__text-hours_day">Friday</p>
                  <p className="dec__text-content">12pm - 10pm</p>
                </div>

                <div className="desc__text-hours">
                  <p className="desc__text-hours_day">Saturday</p>
                  <p className="dec__text-content">12pm - 10pm</p>
                </div>

                <div className="desc__text-hours">
                  <p className="desc__text-hours_day">Sunday</p>
                  <p className="dec__text-content">12pm - 10pm</p>
                </div>
              </div>
            </div>

            <div className="desc__text-section">
              <p className="desc__text-title">Parking</p>
              <p className="dec__text-content">
                Street parking is available along Cortelyou Rd, as well as on
                the intersecting Stratford Rd and Westminster Rd
              </p>
            </div>
          </div>
        </div>

        <div className="gallery">
          <GoogleMap />
        </div>
      </section>
    </header>
  );
}
