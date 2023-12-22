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
            Indulge in the artistry of authentic Japanese cuisine at our
            restaurant, where every dish is a harmonious blend of precision,
            tradition, and the freshest ingredients. Immerse yourself in the
            rich flavors of Japan, from meticulously crafted sushi and sashimi
            to savory ramen and delectable tempura. Our chefs, masters of their
            craft, bring the essence of Japanese culinary artistry to your
            table, inviting you to savor each bite as a journey through the
            diverse and exquisite tastes of Japan. Whether you're a connoisseur
            or a newcomer to Japanese cuisine, our menu promises an
            unforgettable dining experience that captures the true spirit of
            Japan's gastronomic heritage.
          </p>
        </div>

        <FoodGallery className="gallery" />
      </section>

      <section className="section" data-aos="fade-up">
        <div className="desc" data-aos="fade-up">
          <h2 className="desc__title">BAR</h2>

          <p className="desc__text" data-aos="fade-up">
            Step into our Japanese bar and embark on a spirited journey through
            the art of mixology and the refined world of Japanese spirits. Our
            bar is a haven where traditional craftsmanship meets contemporary
            innovation, offering an extensive selection of premium sake, shochu,
            and expertly crafted cocktails. Immerse yourself in the intimate
            ambiance as our skilled bartenders showcase their expertise,
            creating signature drinks that reflect the sophistication and depth
            of Japanese libations. Whether you're savoring a meticulously
            crafted cocktail or exploring the nuanced profiles of rare Japanese
            whiskies, our bar is a sanctuary for those seeking a refined and
            social drinking experience. Elevate your evening as we invite you to
            unwind, celebrate, and indulge in the distinctive allure of our
            Japanese bar.
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
