export function Header({ compact = false }) {
  const goToContact = (e) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={compact ? "header header--compact" : "header"}>
      <a className="header__logo" href="#home">F—R</a>
      <nav className="header__nav" aria-label="Primary">
        <a href="#home">Work</a>
        <a href="#about">About</a>
        <a href="#contact" onClick={goToContact}>Contact</a>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <p>
        Fatemeh Rashno
        <br />
        Product Designer
      </p>
      <p>
        Portfolio
        <br />
        Selected work
      </p>
    </footer>
  );
}
