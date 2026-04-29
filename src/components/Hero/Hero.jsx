import { Link } from "react-router-dom";
import "./Hero.css";

function Hero({ eyebrow, title, text, buttonText, buttonLink }) {
  return (
    <section className="hero">
      <div className="hero__content">
        {eyebrow && <p className="hero__eyebrow">{eyebrow}</p>}

        <h1 className="hero__title">{title}</h1>

        {text && <p className="hero__text">{text}</p>}

        {buttonText && buttonLink && (
          <Link className="hero__button" to={buttonLink}>
            {buttonText}
          </Link>
        )}
      </div>
    </section>
  );
}

export default Hero;