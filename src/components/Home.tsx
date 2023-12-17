import Nav from "./Nav"

function Home() {
  return (
    <>
      <Nav />
      <header>
        <div className="header-side">
          <h1>Hey there!</h1>
          <p className="header-about">This is a small portfolio website made by <a href="https://github.com/Honzoraptor31415">Honzoraptor</a>. Whenever I code something, you'll find it here.</p>
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
            <p className="langs-tech-above">What I use ↑</p>
          </div>
        </div>
      </header>
      <main>
        <section id="about">
          <h2>About me</h2>
        </section>
        <section id="contact">
          <h2>Contact</h2>
        </section>
      </main>
    </>
  )
}

export default Home