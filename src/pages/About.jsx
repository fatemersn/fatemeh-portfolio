import { Header, Footer } from "../components/Layout.jsx";

// Images are expected in /public/about (export them from the Figma frame).
const img = (name) => `${import.meta.env.BASE_URL}about/${name}`;

const skills = [
  {
    title: "Product design",
    image: "skill-product.png",
    text: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
  },
  {
    title: "UX Research",
    image: "skill-research.png",
    text: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
  },
  {
    title: "Service design",
    image: "skill-service.png",
    text: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
  },
];

const sections = [
  {
    title: "My experience",
    range: "01 — 08",
    cards: [
      { image: "card-eye.png", title: "Print-making by lino paper", subtitle: "University experience" },
      { image: "card-gradient.png", title: "UXW", subtitle: "work experience" },
      { image: "card-green.png", title: "You Really Got Me", subtitle: "The Kinks" },
      { image: "card-green.png", title: "You Really Got Me", subtitle: "The Kinks" },
    ],
  },
  {
    title: "Outside university",
    range: "01 — 04",
    cards: [
      { image: "card-eye.png", title: "My brand “Jaryan”" },
      { image: "card-gradient.png", title: "Visiting Art Galleries" },
      { image: "card-green.png", title: "Traveling" },
      { image: "card-green.png", title: "Running" },
    ],
  },
  {
    title: "My favorites",
    range: "01 — 04",
    emphasis: "favorites",
    cards: [
      { image: "fav-got.png", title: "Game of Thrones" },
      { image: "fav-crown.png", title: "The Crown" },
      { image: "fav-gambit.png", title: "Queen’s Gambit" },
      { image: "fav-potter.png", title: "Harry Potter movies" },
    ],
  },
];

function SectionTitle({ title, emphasis }) {
  if (!emphasis) return title;
  const [before, after] = title.split(emphasis);
  return (
    <>
      {before}
      <span className="strong">{emphasis}</span>
      {after}
    </>
  );
}

function WorkCard({ image, title, subtitle }) {
  return (
    <article className="card">
      <img
        className="card__image"
        src={img(image)}
        alt=""
        loading="lazy"
        onError={(e) => (e.currentTarget.style.visibility = "hidden")}
      />
      <div className="card__text">
        <h3 className="card__title">{title}</h3>
        {subtitle && <p className="card__subtitle">{subtitle}</p>}
      </div>
    </article>
  );
}

export default function About() {
  return (
    <div className="page">
      <Header compact />

      <section className="about-hero">
        <div className="about-hero__inner">
          <figure className="persona">
            <div className="persona__image" role="img" aria-label="Portrait of Fatemeh" />
            <figcaption className="persona__caption">It’s me :)</figcaption>
          </figure>
          <p className="about-hero__bio">
            I am a Product Designer with over 5 years of experience in crafting
            user-centric B2C and C2C products. Skilled in UX research,
            psychology, and product management. Passionate about creating
            intuitive experiences that delight users and drive business success.
          </p>
        </div>
      </section>

      <section className="skills" aria-label="Skills">
        {skills.map((s) => (
          <div className="skill" key={s.title}>
            <img
              className="skill__image"
              src={img(s.image)}
              alt=""
              onError={(e) => (e.currentTarget.style.visibility = "hidden")}
            />
            <div className="skill__text">
              <h3 className="skill__title">{s.title}</h3>
              <p className="skill__body">{s.text}</p>
            </div>
          </div>
        ))}
      </section>

      {sections.map((s) => (
        <section className="stripe" key={s.title}>
          <div className="stripe__heading">
            <h2>
              <SectionTitle title={s.title} emphasis={s.emphasis} />
            </h2>
            <p>{s.range}</p>
          </div>
          <div className="stripe__cards">
            {s.cards.map((c, i) => (
              <WorkCard key={`${c.title}-${i}`} {...c} />
            ))}
          </div>
        </section>
      ))}

      <Footer />
    </div>
  );
}
