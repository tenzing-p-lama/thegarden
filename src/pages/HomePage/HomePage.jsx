import "./HomePage.scss";
import interiorimg from "../../assets/images/theGarden2.jpg";

export default function HomePage() {
  return (
    <header className="App-header">
      <div className="hero">
        <img className="hero-image" src={interiorimg} alt="interior" />
        <p className="hero__content">The Garden at Ditmas, Brooklyn</p>
      </div>

      <div className="logo">庭</div>

      <div className="image-gallery">textbox with images</div>

      <section className="cuisine">more images of food with text</section>

      <section className="bar">bar images with text</section>

      <section className="map">
        location map with some text and google map link
      </section>
    </header>
  );
}
