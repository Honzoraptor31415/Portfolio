import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"
import Footer from "./Footer"
import { useEffect } from "react"

function Projects() {
  useEffect(() => {
    if (navigator.language === "cs-CZ") {
      document.title = "Projekty"
    } else {
      document.title = "Projects"
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show")
        } else {
          entry.target.classList.remove("show")
        }
      })
    })
    const hiddenElements = document.querySelectorAll(".hidden")

    hiddenElements.forEach((el) => observer.observe(el))
  }, [])

  return (
    <>
      {self.innerWidth >= 1000 ? <DesktopNav /> : <MobileNav />}
      <main className="projects">
        {/* <div className="no-projects-wrp">
          <div className="no-projects">
            <h1>Currentely no projects</h1>
            <p>Working on them.</p>
          </div>
        </div> */}
        <h1>{navigator.language === "cs-CZ" ? "Moje projekty" : "My projects"}</h1>
        <div className="projects-wrp">
          <div className="project hidden">
            <div className="project-side">
              <a href="https://github.com/Honzoraptor31415/CodeConnect">
                <img src="codeconnectapp-screenshot.png" alt="CodeConnect screenshot" />
              </a>
            </div>
            <div className="project-side">
              <h3>CodeConnect</h3>
              {navigator.language === "cs-CZ" ? (
                <p>CodeConnect je aplikace, která uživatelům umožní zveřejnit dotaz na aplikaci, kterou v dotazu popíšou a kdokoliv z vývojářů (role uživatele) tu aplikaci může pro toho člověka naprogramovat.</p>
              ) : (
                <p>CodeConnect is an app, that you can post requests for apps on. Any of the devs (role for the user) can view the post and code the app that the person described.</p>
              )}
              <div className="project-links">
                <a href="https://github.com/Honzoraptor31415/CodeConnect">
                  <img src="github-icon.svg" alt="Github icon" />
                </a>
                <p className="no-demo">{navigator.language === "cs-CZ" ? "Aplikace ještě není zveřejněná" : "App is not deployed yet"}</p>
                {/* <a href="#">
                  <img src="link-away.svg" alt="Link away icon" />
                </a> */}
              </div>
              <div className="tags-wrp">
                <p>{navigator.language === "cs-CZ" ? "Tagy:" : "Tags:"}</p>
                <div className="tags">
                  <p className="tag svelte-tag">svelte</p>
                  <p className="tag firebase-tag">firebase</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Projects
