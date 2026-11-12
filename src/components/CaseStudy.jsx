import { Header } from "./Layout.jsx";

const asset = (path) => `${import.meta.env.BASE_URL}cases/${path}`;
const hideBroken = (e) => (e.currentTarget.style.visibility = "hidden");

// "**text**" -> emphasised span
function Rich({ text }) {
  return text.split("**").map((part, i) =>
    i % 2 ? (
      <span className="em" key={i}>
        {part}
      </span>
    ) : (
      part
    )
  );
}

const lines = (value) =>
  (Array.isArray(value) ? value : [value]).flatMap((line, i, all) =>
    i < all.length - 1 ? [line, <br key={i} />] : [line]
  );

function Insight({ label, title, body, pre, list, className = "" }) {
  return (
    <div className={`insight ${className}`}>
      <p className="insight__label">{label}</p>
      <p className="insight__title">{title}</p>
      {body && <p className={pre ? "insight__body insight__body--pre" : "insight__body"}>{body}</p>}
      {list && (
        <ul className="insight__list">
          {list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Metric({ label, value, body, accent, wide }) {
  return (
    <div className={wide ? "metric metric--wide" : "metric"}>
      <p className="metric__label">{label}</p>
      <p className={accent ? "metric__value metric__value--accent" : "metric__value"}>{value}</p>
      <p className="metric__body">{body}</p>
    </div>
  );
}

function Img({ src, ratio, crop, className = "", style }) {
  return (
    <div className={`img ${className}`} style={{ aspectRatio: ratio, ...style }}>
      <img
        src={asset(src)}
        alt=""
        loading="lazy"
        onError={hideBroken}
        style={crop ? { position: "absolute", maxWidth: "none", ...crop } : undefined}
        className={crop ? "img__crop" : "img__fill"}
      />
    </div>
  );
}

function Concept() {
  const steps = [
    ["01 / CONDITION", ["First order from your store", "Suggested minimum basket · Custom value available"]],
    ["02 / REWARD", ["Choose a discount, free product or free delivery", "Preset values with editable inputs"]],
    ["03 / VALIDITY", ["Choose start and end dates", "Review completed sections at any time"]],
  ];
  return (
    <figure className="concept-wrap">
      <div className="concept">
        <p className="concept__eyebrow">BEFORE / FOUR-STEP WIZARD</p>
        <p className="concept__flow">Condition → Reward → Date → Review</p>
        <p className="concept__eyebrow">AFTER / ONE GUIDED PAGE</p>
        <div className="concept__body">
          <div className="concept__form">
            <p className="concept__form-title">Create a coupon</p>
            {steps.map(([label, text]) => (
              <div className="concept__step" key={label}>
                <p className="concept__step-label">{label}</p>
                <p>{lines(text)}</p>
              </div>
            ))}
          </div>
          <div className="concept__side">
            <div className="concept__purpose">
              <p className="concept__step-label">04 / Purpose</p>
              <p>Choose purpose based on their needs</p>
            </div>
            <div className="concept__preview">
              <p className="concept__step-label">LIVE PREVIEW</p>
              <p className="concept__preview-title">{lines(["Your offer,", "as customers see it."])}</p>
              <p className="concept__preview-detail">{lines(["Reward", "Eligibility · Your store", "Validity dates"])}</p>
              <p className="concept__step-label">
                {lines(["Updates as the vendor changes the form.", "Illustrative content; no production values."])}
              </p>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="note">
        Conceptual flow illustration / Editable English reconstruction of the proposal’s interaction model; not a production screen.
      </figcaption>
    </figure>
  );
}

function Block({ b }) {
  switch (b.t) {
    case "p":
      return (
        <p className="body">
          <Rich text={b.text} />
        </p>
      );
    case "note":
      return <p className="note">{b.text}</p>;
    case "subheading":
      return <h3 className="subheading">{b.text}</h3>;
    case "divider":
      return <hr className="rule" />;
    case "callout":
      return (
        <div className={`callout callout--${b.size}`}>
          <p>{b.lines ? lines(b.lines) : <Rich text={b.text} />}</p>
        </div>
      );
    case "profile":
      return (
        <div className="profile">
          <p className="insight__label">{b.label}</p>
          <p className="profile__text">{b.text}</p>
          <p className="insight__label">{b.note}</p>
        </div>
      );
    case "insight":
      return <Insight {...b} />;
    case "metric":
      return <Metric {...b} wide />;
    case "steps":
      return (
        <div className="steps">
          {b.items.map((item) => (
            <Insight key={item.label} {...item} />
          ))}
        </div>
      );
    case "rows":
      return (
        <div className={b.tinted ? "rows rows--tinted" : "rows"}>
          {b.items.map((item, i) => (
            <div className="rows__item" key={item.label}>
              <Insight {...item} className={b.tinted ? "insight--tinted" : ""} />
              {i < b.items.length - 1 && <hr className="rule" />}
            </div>
          ))}
        </div>
      );
    case "tinted-insights":
      return (
        <div className="tinted-list">
          {b.items.map((item) => (
            <Insight key={item.label} {...item} className="insight--tinted" />
          ))}
        </div>
      );
    case "image":
      return <Img src={b.src} ratio={b.ratio} crop={b.crop} style={b.width ? { width: b.width, maxWidth: "100%" } : undefined} />;
    case "phones":
      return (
        <div className="phones">
          {b.items.map((p) => (
            <div className="phone" key={p.src} style={{ height: p.height }}>
              <img
                src={asset(p.src)}
                alt=""
                loading="lazy"
                onError={hideBroken}
                style={{ position: "absolute", maxWidth: "none", ...p.crop }}
              />
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
}

function After({ b }) {
  switch (b.t) {
    case "figure":
      return (
        <figure className="figure">
          <Img src={b.src} ratio={b.ratio || "1344 / 820.262"} className="img--contain" />
          <figcaption className="note">{b.caption}</figcaption>
        </figure>
      );
    case "offset-insight":
      return (
        <div className="offset">
          <Insight {...b} />
        </div>
      );
    case "insight-pair":
      return (
        <div className="pair">
          {b.items.map((item) => (
            <Insight key={item.label} {...item} />
          ))}
        </div>
      );
    case "concept":
      return <Concept />;
    default:
      return null;
  }
}

function Section({ s }) {
  const cls = ["case-section", s.tight && "case-section--tight", s.noTop && "case-section--no-top"]
    .filter(Boolean)
    .join(" ");
  return (
    <section className={cls}>
      {!s.noDivider && <hr className="rule" />}
      <div className="case-section__layout">
        <p className="case-section__label">{s.label}</p>
        <div className={s.panel ? "case-section__narrative case-section__narrative--panel" : "case-section__narrative"}>
          <h2 className="case-h2">{lines(s.title)}</h2>
          {s.blocks.map((b, i) => (
            <Block b={b} key={i} />
          ))}
        </div>
      </div>
      {s.after?.map((b, i) => (
        <After b={b} key={i} />
      ))}
    </section>
  );
}

export default function CaseStudy({ data }) {
  const { intro, sections, glance, theme, footerRight } = data;
  return (
    <div className={`page case case--${theme}${data.mutedValues ? " case--muted-values" : ""}`}>
      <Header compact />

      <section className="case-intro">
        <p className="case-intro__eyebrow">{intro.eyebrow}</p>
        <h1 className="case-intro__title">{lines(intro.title)}</h1>
        <p className="case-intro__lead">{intro.lead}</p>
        <hr className="rule" />
        <dl className="details">
          {intro.details.map((d) => (
            <div className="details__item" key={d.label}>
              <dt>{d.label}</dt>
              <dd className={d.status ? "details__status" : undefined}>{lines(d.value)}</dd>
            </div>
          ))}
        </dl>
      </section>

      {sections.map((s) => (
        <Section s={s} key={s.label} />
      ))}

      <section className="glance">
        {glance.heading && <p className="glance__heading">{glance.heading}</p>}
        <div className="glance__metrics">
          {glance.metrics.map((m) => (
            <Metric key={m.label} {...m} />
          ))}
        </div>
      </section>

      <footer className="case-footer" id="contact">
        <p>F—R / Selected work</p>
        <p>{footerRight}</p>
      </footer>
    </div>
  );
}
