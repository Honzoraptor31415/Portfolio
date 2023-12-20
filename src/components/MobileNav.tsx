import { useState } from "react"

function MobileNav() {
  const [navState, setNavState] = useState(-100)

  return (
    <>
      <nav>
        <a href="https://github.com/Honzoraptor31415">
          <img src="github-icon.svg" alt="Github icon" />
        </a>
        <a href="/" className="logo-text">HonzoRaptor's</a>
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
          <a onClick={() => { setNavState(-100) }} href="/#about">About</a>
          <a onClick={() => { setNavState(-100) }} href="/#contact">Contact</a>
          <a onClick={() => { setNavState(-100) }} href="/projects">Projects</a>
        </div>
      </nav>
    </>
  )
}

export default MobileNav