import { Link } from "react-router-dom";
import "./OfferCard.css";

function OfferCard({ title, subtitle, price, text, features, link }) {
  return (
    <article className="offer-card">
      {subtitle && <p className="offer-card__subtitle">{subtitle}</p>}

      <h3 className="offer-card__title">{title}</h3>

      {price && <p className="offer-card__price">{price}</p>}

      {text && <p className="offer-card__text">{text}</p>}

      {features && (
        <ul className="offer-card__list">
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      )}

      {link && (
        <Link className="offer-card__link" to={link}>
          Demander cette offre
        </Link>
      )}
    </article>
  );
}

export default OfferCard;