import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <main>
      <h1>Page introuvable</h1>
      <p>Cette page n’existe pas.</p>
      <Link to="/">Retour à l’accueil</Link>
    </main>
  );
}

export default NotFound;