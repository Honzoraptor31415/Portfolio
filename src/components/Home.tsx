import Nav from "./Nav"
import Footer from "./Footer"

function Home() {
  return (
    <>
      <Nav />
      <header>
        <div className="header-side">
          <h1>Hey there!</h1>
          <p className="header-about">This is a small portfolio website made by <a href="https://github.com/Honzoraptor31415" target="_blank" className="colored-text">Honzoraptor</a>. Whenever I code something, you'll find it here.</p>
        </div>
        <div className="header-side">
          <div className="langs-tech">
            <a href="#html-css">
              <img src="https://skillicons.dev/icons?i=html" alt="HTML" />
            </a>
            <a href="#html-css">
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
        <section>
          <h2 id="about">About me</h2>
          <p className="about-text">
            I'm a random guy in the east of Czechia in Europe. I started learning to code in the beginning of the year 2023. I started with <span className="html">HTML</span> and <span className="css">CSS</span> and later learned other languages, frameworks and technologies. More on that later, <a className="colored-text" href="#langs-techs">keep scrolling</a>!
          </p>
        </section>
        <section>
          <h2 id="langs-techs">Languages and technogolies</h2>
          <section className="langs-section">
            <div className="langs-icons">
              <img src="https://skillicons.dev/icons?i=html" alt="HTML icon" />
              <img src="https://skillicons.dev/icons?i=css" alt="CSS icon" />
            </div>
            <h3 id="html-css">HTML, CSS</h3>
            <p>As I already mentioned, these were the first languages I learned. Back then I couldn't really design things, which resulted into terrible looking webpages. <span className="sarcasm">Un</span>fortunately I didn't save any of the creations from back then.</p>
          </section>
          <section className="langs-section">
            <div className="langs-icons">
              <img src="https://skillicons.dev/icons?i=js" alt="JS icon" />
            </div>
            <h3 id="js">JS</h3>
            <p>This was the first actual programming language that I learned. I tried making games like The scary maze game with Javascript and it turned out pretty good. Javascript is the best language for both beginners and advanced programmers, because you can do basicly anything with it: Build Full-stack webapps, desktop apps, servers, even games!</p>
          </section>
          <section className="langs-section">
            <div className="langs-icons">
              <img src="https://skillicons.dev/icons?i=py" alt="Python icon" />
            </div>
            <h3 id="py">Python</h3>
            <p>I started to be more interested in programming at this point and wanted to try something new. I wrote my first lines of Python code in a web-based IDE on <a href="https://www.w3schools.com/python/trypython.asp?filename=demo_default">W3schools.com</a></p>
          </section>
          <section className="langs-section">
            <div className="langs-icons">
              <img src="https://skillicons.dev/icons?i=firebase" alt="Firebase icon" />
            </div>
            <h3 id="firebase">Firebase</h3>
            <p>I first wanted to learn PHP and MySQL, but those are kind of old and unused technologies, that are also harder to setup than Firebase. I used Firebase's Real-time DB for my previous portfolio website, that is written in HTML. No framework was used for that.</p>
          </section>
          <section className="langs-section">
            <div className="langs-icons">
              <img src="https://skillicons.dev/icons?i=ts" alt="TS icon" />
            </div>
            <h3 id="ts">TS</h3>
            <p>Even tho I don't really like this language for it's weird syntax, that is basicly messed up Javascirpt, I started learning Typescript around the time I found out about React and I got used to it.</p>
          </section>
          <section className="langs-section">
            <div className="langs-icons">
              <img src="https://skillicons.dev/icons?i=react" alt="React icon" />
            </div>
            <h3 id="react">React</h3>
            <p>When I made my first React webapp, I felt the power of it and despite having troubles when first using useStates and useEffects, I like it. This website is built with React btw.</p>
          </section>
          <section className="langs-section">
            <div className="langs-icons">
              <img src="https://skillicons.dev/icons?i=git" alt="Git icon" />
            </div>
            <h3 id="git">Git</h3>
            <p>Another step to being a good developer is to learn Git and Github (or GitLab/BitBucket, but Github is the most widely used one). I started learning Git just around October 2023, which is kinda late in my opinion. Anyway, <a href="https://github.com/Honzoraptor31415">here's my Github</a>.</p>
          </section>
          <section className="langs-section">
            <div className="langs-icons">
              <img src="https://skillicons.dev/icons?i=svelte" alt="Svelte icon" />
            </div>
            <h3 id="svelte">Svelte</h3>
            <p>Is commonly refered to as the most loved Javascript library. And I understand why: when writing Svelte code, you feel like you're writing some boosted HTML, that can do conditional component rendering, rendering lists and writing down variables directly into the markup code. It's way easier to learn compared to React, but it's community isn't as big. I'm currentely building <a href="https://github.com/Honzoraptor31415/CodeConnect">CodeConnect</a> with Svelte.</p>
          </section>
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
      <Footer />
    </>
  )
}

export default Home