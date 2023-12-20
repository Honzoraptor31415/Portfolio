import DesktopNav from "./DesktopNav"
import Footer from "./Footer"

function Projects() {
  return (
    <>
      <DesktopNav />
      <main className="projects">
        {/* <div className="no-projects-wrp">
          <div className="no-projects">
            <h1>Currentely no projects</h1>
            <p>Working on them.</p>
          </div>
        </div> */}
        <h1>My projects</h1>
        <div className="projects-wrp">
          <div className="project">
            <div className="project-side">
              <a href="https://github.com/Honzoraptor31415/CodeConnect">
                <img src="codeconnectapp-screenshot.png" alt="CodeConnect screenshot" />
              </a>
            </div>
            <div className="project-side">
              <h3>CodeConnect</h3>
              <p>CodeConnect is an app, that you can post requests for apps on. Any of the devs (role for the user) can view the post and make the app you described come to life.</p>
              <div className="project-links">
                <a href="https://github.com/Honzoraptor31415/CodeConnect">
                  <img src="github-icon.svg" alt="Github icon" />
                </a>
                <p className="no-demo">App is not deployed yet</p>
                {/* <a href="#">
                  <img src="link-away.svg" alt="Link away icon" />
                </a> */}
              </div>
              <div className="tags-wrp">
                <p>Tags:</p>
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