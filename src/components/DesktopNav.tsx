function DesktopNav() {
  return (
    <nav>
      <div className="nav-side">
        <a href="/" className="logo-text">{navigator.language === "cs-CZ" ? "Honzovo" : "HonzoRaptor's"}</a>
      </div>
      <div className="nav-side desktop-menu">
        <a href="/#about">{navigator.language === "cs-CZ" ? "O mně" : "About"}</a>
        <a href="/#contact">{navigator.language === "cs-CZ" ? "Kontakt" : "Contact"}</a>
        <a href="/projects">{navigator.language === "cs-CZ" ? "Projekty" : "Projects"}</a>
        <a href="https://github.com/Honzoraptor31415">
          <img src="github-icon.svg" alt="Github icon" />
        </a>
      </div>
    </nav>
  )
}

export default DesktopNav