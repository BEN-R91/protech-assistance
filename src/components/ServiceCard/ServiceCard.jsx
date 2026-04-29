import { Link } from "react-router-dom";
import "./ServiceCard.css";

function ServiceCard({ title, text, link }) {
  return (
    <article className="service-card">
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__text">{text}</p>

      {link && (
        <Link className="service-card__link" to={link}>
          En savoir plus
        </Link>
      )}
    </article>
  );
}

export default ServiceCard;