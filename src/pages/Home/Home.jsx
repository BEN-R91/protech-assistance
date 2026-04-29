import Hero from "../../components/Hero/Hero.jsx";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import ServiceCard from "../../components/ServiceCard/ServiceCard.jsx";
import OfferCard from "../../components/OfferCard/OfferCard.jsx";
import CtaBanner from "../../components/CtaBanner/CtaBanner.jsx";
import { services } from "../../data/services.js";
import { offers } from "../../data/offers.js";
import "./Home.css";

function Home() {
  return (
    <main className="home">
      <Hero
        eyebrow="Vigilance, prévention & sérénité numérique"
        title="Quand le numérique devient suspect, Protech vous aide à y voir juste."
        text="Protech Assistance vous aide à vérifier, comprendre et réagir face aux messages suspects, liens douteux et arnaques en ligne, tout en vous accompagnant vers un environnement numérique plus propre, plus sûr et plus fluide."
        buttonText="Demander de l’aide"
        buttonLink="/contact"
      />

      <section className="home__section">
        <div className="container">
          <SectionTitle
            eyebrow="Pourquoi Protech Assistance ?"
            title="Parce qu’un simple doute peut vite devenir un vrai problème"
            text="Un mail étrange, un SMS pressant, un lien qui paraît louche, un compte qui semble compromis : dans ces moments-là, l’important est de ne pas agir seul ni trop vite."
          />

          <div className="home__highlight">
            <p>
              Protech Assistance vous apporte un regard extérieur, simple et
              rassurant pour évaluer la situation, limiter les risques et savoir
              quoi faire ensuite.
            </p>
          </div>
        </div>
      </section>

      <section className="home__section home__section--soft">
        <div className="container">
          <SectionTitle
            eyebrow="Prestations"
            title="Une aide concrète pour les situations du quotidien"
            text="Des services pensés pour répondre aux doutes numériques les plus fréquents, avec une approche claire, humaine et pédagogique."
          />

          <div className="home__grid">
            {services.slice(0, 3).map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                text={service.text}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="home__section">
        <div className="container">
          <SectionTitle
            eyebrow="Offres"
            title="Des solutions adaptées à votre besoin"
            text="Que vous ayez besoin d’une aide ponctuelle ou d’un accompagnement régulier, Protech Assistance vous propose une solution simple."
          />

          <div className="home__grid">
            {offers.map((offer) => (
              <OfferCard
                key={offer.id}
                title={offer.title}
                subtitle={offer.subtitle}
                price={offer.price}
                text={offer.text}
                features={offer.features}
                link={offer.link}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="home__section home__section--soft">
        <div className="container">
          <SectionTitle
            eyebrow="La méthode"
            title="Comprendre avant d’agir"
            text="L’objectif n’est pas seulement de régler un problème, mais aussi de vous aider à reconnaître les signaux d’alerte pour les prochaines fois."
          />

          <div className="home__steps">
            <article className="home__step">
              <span className="home__step-number">1</span>
              <h3>Vous expliquez la situation</h3>
              <p>
                Message suspect, lien douteux, compte étrange, demande urgente :
                on part de ce que vous avez sous les yeux.
              </p>
            </article>

            <article className="home__step">
              <span className="home__step-number">2</span>
              <h3>On analyse le risque</h3>
              <p>
                On vérifie les indices importants et on distingue ce qui est
                rassurant de ce qui doit vous alerter.
              </p>
            </article>

            <article className="home__step">
              <span className="home__step-number">3</span>
              <h3>Vous savez quoi faire</h3>
              <p>
                Vous repartez avec des actions simples, compréhensibles et
                adaptées à votre situation.
              </p>
            </article>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Quelque chose vous semble anormal ?"
        text="Ne cliquez pas dans le doute. Faites vérifier la situation avant de prendre un risque inutile."
        buttonText="Contacter Protech Assistance"
        buttonLink="/contact"
      />
    </main>
  );
}

export default Home;