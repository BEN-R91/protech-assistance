import { Link } from "react-router-dom";
import "./CtaBanner.css";

function CtaBanner({ title, text, buttonText, buttonLink }) {
  return (
    <section className="cta-banner">
      <div className="cta-banner__content">
        <div>
          <h2 className="cta-banner__title">{title}</h2>
          {text && <p className="cta-banner__text">{text}</p>}
        </div>

        {buttonText && buttonLink && (
          <Link className="cta-banner__button" to={buttonLink}>
            {buttonText}
          </Link>
        )}
      </div>
    </section>
  );
}

export default CtaBanner;