import { Header, Footer } from "../components/Layout.jsx";

const projects = [
  { index: "01", title: "Product Iteration for Smart invest", href: "#smart-invest" },
  { index: "02", title: "Redesign coupon creation flow", href: "#coupon-creation" },
  { index: "03", title: "Making subscription value easier to understand", href: "#foodpro" },
];

function ProjectPreview({ index, title, href }) {
  return (
    <a className="project" href={href}>
      <div className="project__cover">
        <p className="project__index">{index}</p>
        <p className="project__label">PROJECT IMAGE</p>
      </div>
      <div className="project__caption">
        <div className="project__info">
          <p className="project__title">{title}</p>
          <p className="project__meta">UX + Product Design</p>
        </div>
        <span className="project__arrow" aria-hidden="true">↗</span>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <div className="page">
      <Header />

      <section className="intro">
        <h1 className="intro__title">
          Hi, I’m <span className="intro__name">Fatemeh</span>.
          <br />
          A Designer and researcher shaping
          <br />
          thoughtful digital experiences.
        </h1>
        <p className="intro__lead">
          I turn complex problems into clear, useful experiences from the first
          question to the final detail.
        </p>
      </section>

      <main className="work">
        <hr className="work__divider" />
        <div className="work__heading">
          <h2>Selected work</h2>
          <p>01 — 03</p>
        </div>
        <div className="work__grid">
          {projects.map((p) => (
            <ProjectPreview key={p.index} {...p} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
