import Nav from "./Nav"

function Home() {
  return (
    <>
      <Nav />
      <header>
        <div className="header-side">
          <h1>Hey there!</h1>
          <p className="header-about">This is a small portfolio website made by <a href="https://github.com/Honzoraptor31415" className="colored-text">Honzoraptor</a>. Whenever I code something, you'll find it here.</p>
        </div>
        <div className="header-side">
          <div className="langs-tech">
            <a href="#html">
              <img src="https://skillicons.dev/icons?i=html" alt="HTML" />
            </a>
            <a href="#css">
              <img src="https://skillicons.dev/icons?i=css" alt="CSS" />
            </a>
            <a href="#js">
              <img src="https://skillicons.dev/icons?i=js" alt="js" />
            </a>
            <a href="#ts">
              <img src="https://skillicons.dev/icons?i=ts" alt="ts" />
            </a>
            <a href="#react">
              <img src="https://skillicons.dev/icons?i=react" alt="React" />
            </a>
            <a href="#svelte">
              <img src="https://skillicons.dev/icons?i=svelte" alt="Svelte" />
            </a>
            <a href="#git">
              <img src="https://skillicons.dev/icons?i=git" alt="Git" />
            </a>
            <a href="#py">
              <img src="https://skillicons.dev/icons?i=py" alt="Python" />
            </a>
            <a href="#firebase">
              <img src="https://skillicons.dev/icons?i=firebase" alt="Firebase" />
            </a>
            <p className="langs-tech-above">What I use <span style={{ fontSize: "16pt" }}>👆</span></p>
          </div>
        </div>
      </header>
      <main>
        <section id="about">
          <h2>About me</h2>
          <p className="about-text">
            I'm a random guy in east of Czechia in Europe. I started learning to code in the beginning of the year 2023. I started with <span className="html">HTML</span> and <span className="css">CSS</span> and later learned other languages, frameworks and technologies. More on that later, <span className="colored-text">keep scrolling</span>!
          </p>
        </section>
        <section id="contact">
          <h2>Contact & socials</h2>
          <div className="contact-socials-wrp">
            <div className="socel-wrp">
              <img src="gmail-icon.svg" alt="Gmail icon" />
              <div className="socials-element">
                <h3>Email</h3>
                <a href="mailto:honzoraptor@gmail.com">Honzoraptor@gmail.com</a>
              </div>
            </div>
            <div className="socel-wrp">
              <img src="github-icon.svg" alt="Hithub icon" />
              <div className="socials-element">
                <h3>Github</h3>
                <a href="https://github.com/Honzoraptor31415">Honzoraptor31415</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home