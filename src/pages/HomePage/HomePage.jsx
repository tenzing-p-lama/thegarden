import "./HomePage.scss";
import interiorimg from "../../assets/images/theGarden2.jpg";

export default function HomePage() {
  return (
    <header className="App-header">
      <div className="hero-title">
        <p className="hero-title__content">The Garden at Ditmas, Brooklyn</p>
      </div>

      <div className="hero-img">
        <img className="hero-image" src={interiorimg} alt="interior" />
      </div>
    </header>
  );
}
