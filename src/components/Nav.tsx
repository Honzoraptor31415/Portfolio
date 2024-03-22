import { useState, useEffect } from "react"
import { supabase } from "../supabaseClient"

function Nav() {
  const [navState, setNavState] = useState(-100)
  const [user, setUser] = useState<any>()

  async function getUser() {
    const { data: { user } } = await supabase.auth.getUser()
    setUser(user)
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut()
    console.log(error)
    setUser(null)
    if (!error) {
      location.href = location.href
    }
  }

  useEffect(() => {
    getUser()
  }, [])

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
            <img className="no-select" src="/github-icon.svg" alt="Github icon" />
          </a>
          {user && <>
            <button className="outline-btn" onClick={signOut}>Sign out</button>
          </>}
        </div>
      </nav>
      <div id="mobile">
        <nav>
          <a href="https://github.com/Honzoraptor31415" className="nav-side">
            <img className="no-select" src="/github-icon.svg" alt="Github icon" />
          </a>
          <a href="/" className="logo-text" data-title={navigator.language === "cs-CZ" || navigator.language === "cs" ? "Honzovo" : "HonzoRaptor's"}>{navigator.language === "cs-CZ" || navigator.language === "cs" ? "Honzovo" : "HonzoRaptor's"}</a>
          <div className="grid-wrp nav-side">
            <button className="nav-menu-button" onClick={() => { setNavState(0) }}>
              <div className="menu-line"></div>
              <div className="menu-line"></div>
              <div className="menu-line"></div>
            </button>
          </div>
        </nav>
        <nav style={{ right: `${navState}%` }} className="expanded">
          <div className="expanded-top">
            {user && <>
              <button className="signout-btn flex-center-verticall" onClick={signOut}>
                <img src="signout-icon.svg" className="no-select signout-icon" />
              </button>
            </>}
            <button onClick={() => { setNavState(-100) }}>
              <img src="cross-icon.svg" className="no-select" />
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