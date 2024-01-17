import { useState } from "react"

function Nav() {
  const [navState, setNavState] = useState(-100)
  return (
    <>
      <nav id="desktop">
        <div className="nav-side">
          <a href="/" className="logo-text" data-title={navigator.language === "cs-CZ" || navigator.language === "cs" ? "Honzovo" : "HonzoRaptor's"}>{navigator.language === "cs-CZ" || navigator.language === "cs" ? "Honzovo" : "HonzoRaptor's"}</a>
        </div>
        <div className="nav-side desktop-menu">
          <div className="link-wrp">
            <a href="/#about">{navigator.language === "cs-CZ" || navigator.language === "cs" ? "O mně" : "About"}</a>
          </div>
          <div className="link-wrp">
            <a href="/#contact">{navigator.language === "cs-CZ" || navigator.language === "cs" ? "Kontakt" : "Contact"}</a>
          </div>
          <div className="link-wrp">
            <a href="/projects">{navigator.language === "cs-CZ" || navigator.language === "cs" ? "Projekty" : "Projects"}</a>
          </div>
          <a href="https://github.com/Honzoraptor31415">
            <img src="/github-icon.svg" alt="Github icon" />
          </a>
        </div>
      </nav>
      <div id="mobile">
        <nav>
          <a href="https://github.com/Honzoraptor31415">
            <img src="/github-icon.svg" alt="Github icon" />
          </a>
          <a href="/" className="logo-text" data-title={navigator.language === "cs-CZ" || navigator.language === "cs" ? "Honzovo" : "HonzoRaptor's"}>{navigator.language === "cs-CZ" || navigator.language === "cs" ? "Honzovo" : "HonzoRaptor's"}</a>
          <button onClick={() => { setNavState(0) }}>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
          </button>
        </nav>
        <nav style={{ right: `${navState}%` }} className="expanded">
          <div className="expanded-top">
            <button onClick={() => { setNavState(-100) }}>
              <div className="menu-line cross-line"></div>
              <div className="menu-line cross-line"></div>
            </button>
          </div>
          <div className="menu">
            <a onClick={() => { setNavState(-100) }} href="/#about">{navigator.language === "cs-CZ" ? "O mně" : "About"}</a>
            <a onClick={() => { setNavState(-100) }} href="/#contact">{navigator.language === "cs-CZ" ? "Kontakt" : "Contact"}</a>
            <a onClick={() => { setNavState(-100) }} href="/projects">{navigator.language === "cs-CZ" ? "Projekty" : "Projects"}</a>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Nav