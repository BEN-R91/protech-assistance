import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Link className="header__logo" to="/" aria-label="Accueil Protech Assistance">
        <span className="header__logo-main">Protech</span>
        <span className="header__logo-accent">Assistance</span>
        <span className="header__logo-tm">™</span>
      </Link>

      <nav className="header__nav" aria-label="Navigation principale">
        <Link to="/">Accueil</Link>
        <Link to="/prestations">Prestations</Link>
        <Link to="/offres">Offres</Link>
        <Link to="/prevention">Prévention</Link>
        <Link to="/a-propos">À propos</Link>
      </nav>

      <Link className="header__cta" to="/contact">Contact</Link>
    </header>
  );
}

export default Header;