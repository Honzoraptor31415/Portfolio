function Nav() {
  return (
    <nav>
      <div className="nav-side">
        <a href="/" className="logo-text">HonzoRaptor's</a>
      </div>
      <div className="nav-side">
        <a href="/#about">About</a>
        <a href="/#contact">Contact</a>
        <a href="/projects">Projects</a>
        <a href="https://github.com/Honzoraptor31415">
          <img src="github-icon.svg" alt="Github icon" />
        </a>
      </div>
    </nav>
  )
}

export default Nav