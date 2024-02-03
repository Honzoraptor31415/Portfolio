import { useEffect } from "react"
import BlurryBackground from "../BlurryBackground"

function Home() {
  useEffect(() => {
    if (navigator.language === "cs-CZ" || navigator.language === "cs") {
      document.title = "HonzoRaptorovo portfolio!"
    } else {
      document.title = "Honzoraptor's portfolio!"
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
    if (location.hash !== "") {
      document.getElementById(location.hash.slice(1))?.scrollIntoView()
    }
  }, [])

  return (
    <>
      <header>
        <BlurryBackground />
        <div className="header-side hidden">
          <h1>{navigator.language === "cs-CZ" || navigator.language === "cs" ? "Těpéro!" : "Hey there!"}</h1>
          {navigator.language === "cs-CZ" || navigator.language === "cs" ? (

            <p className="header-about">Tohle je malý portfolio od <a href="https://github.com/Honzoraptor31415" target="_blank" className="colored-text">Honzoraptora</a>. Kdykoliv něco naprogramuju, najdeš to tady.</p>
          ) : (
            <p className="header-about">This is a small portfolio website made by <a href="https://github.com/Honzoraptor31415" target="_blank" className="colored-text">Honzoraptor</a>. Whenever I code something, you'll find it here.</p>
          )}
        </div>
        <div className="header-side hidden">
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
            <a href="#supabase">
              <img src="https://skillicons.dev/icons?i=supabase" alt="Supabase" />
            </a>
            {navigator.language === "cs-CZ" || navigator.language === "cs" ? (
              <p className="langs-tech-above">Co používám <span className="pointer-finger">👆</span></p>
            ) : (
              <p className="langs-tech-above">What I use <span className="pointer-finger">👆</span></p>
            )}
          </div>
        </div>
      </header>
      <main>
        <section className="hidden">
          <h2 id="about">{navigator.language === "cs-CZ" || navigator.language === "cs" ? "O mně (egoistický)" : "About me"}</h2>
          {navigator.language === "cs-CZ" || navigator.language === "cs" ? (
            <p className="about-text">
              Jsem náhodnej týpek z východu Česka. Začal jsem programovat kolem začátku roku 2023 a to  s <span className="html">HTML</span> a <span className="css">CSS</span> a později se naučil zacházet s jinejma jazykama, frameworkama a technologiema. Na ty se podíváme níže, <a className="colored-text" href="#langs-techs">scrolluj dál</a>!
            </p>
          ) : (
            <p className="about-text">
              I'm a random guy in the east of Czechia in Europe. I started learning to code in the beginning of the year 2023. I started with <span className="html">HTML</span> and <span className="css">CSS</span> and later learned other languages, frameworks and technologies. More on that later, <a className="colored-text" href="#langs-techs">keep scrolling</a>!
            </p>
          )}
        </section>
        <section>
          <h2 className="hidden" id="langs-techs">{navigator.language === "cs-CZ" || navigator.language === "cs" ? "Jazyky a technologie" : "Languages and technologies"}</h2>
          <div id="html-css" className="langs-sec-border hidden">
            <section className="langs-section">
              <div className="langs-icons">
                <img src="https://skillicons.dev/icons?i=html" alt="HTML icon" />
                <img src="https://skillicons.dev/icons?i=css" alt="CSS icon" />
              </div>
              <h3>HTML, CSS</h3>
              {navigator.language === "cs-CZ" || navigator.language === "cs" ? (
                <p>Jak už jsem řekl, tohle byly první jazyky, co jsem se naučil. Tenktrát jsem neuměl úplně designovat, takže všechno co jsem stvořil vypadalo otřesně. <span className="sarcasm">Bohužel</span> Naštěstí jsem si z těch dob nic nezachoval, takže ty odporný designy nikdo neuvidí.</p>
              ) : (
                <p>As I already mentioned, these were the first languages I learned. Back then I couldn't really design things, which resulted into terribly looking webpages. <span className="sarcasm">Un</span>fortunately I didn't save any of the creations from back then, so noone can see those terrible designs.</p>
              )}
            </section>
          </div>
          <div id="js" className="langs-sec-border hidden">
            <section className="langs-section">
              <div className="langs-icons">
                <img src="https://skillicons.dev/icons?i=js" alt="JS icon" />
              </div>
              <h3>JS</h3>
              {navigator.language === "cs-CZ" || navigator.language === "cs" ? (
                <p>Tohle byl první opravdu programovací jazyk, kterej jsem se naučil. Zkoušel jsem s ním dělat i hry jako The scary maze game a myslím, že výsledek vypadal úctyhodně. Javascript je skvělej jazyk pro začátečníky i pokročilý, protože s ním jde dělat <span className="colored-text"><b>doslova</b></span> všechno: Programovat Full-stack webový aplikace, aplikace pro PC, servery a dokonce i hry!</p>
              ) : (
                <p>This was the first actual programming language that I learned. I tried making games like The scary maze game with Javascript and it turned out pretty good. Javascript is the best language for both beginners and advanced programmers, because you can do basicly anything with it: Build Full-stack webapps, desktop apps, servers and even games!</p>
              )}

            </section>
          </div>
          <div id="py" className="langs-sec-border hidden">
            <section className="langs-section">
              <div className="langs-icons">
                <img src="https://skillicons.dev/icons?i=py" alt="Python icon" />
              </div>
              <h3>Python</h3>
              {navigator.language === "cs-CZ" || navigator.language === "cs" ? (
                <p>V tomhle bodě už mě programování začalo fakt bavit a chtěl jsem zkusit něco novýho. Moje první řádky Python kódu jsem napsal na webovým IDEčku na <a target="_blank" href="https://www.w3schools.com/python/trypython.asp?filename=demo_default">W3schools.com</a></p>
              ) : (
                <p>I started to be more interested in programming at this point and wanted to try something new. I wrote my first lines of Python code in a web-based IDE on <a target="_blank" href="https://www.w3schools.com/python/trypython.asp?filename=demo_default">W3schools.com</a></p>
              )}
            </section>
          </div>
          <div id="firebase" className="langs-sec-border hidden">
            <section className="langs-section">
              <div className="langs-icons">
                <img src="https://skillicons.dev/icons?i=firebase" alt="Firebase icon" />
              </div>
              <h3>Firebase</h3>
              {navigator.language === "cs-CZ" || navigator.language === "cs" ? (
                <p>Nejdřív jsem se chtěl naučit PHP a MySQL, ale to jsou starý a nepoužívaný technologie, který jsou i těžší na používání než Firebase. Mimo jiné jsem Firebase Real-time databázi použil na mým starším webu, kterej byl jenom ve vanilla HTML, bez jakejchkoliv frameworků.</p>
              ) : (
                <p>I first wanted to learn PHP and MySQL, but those are kind of old and unused technologies, that are also harder to setup than Firebase. One of the websites that I first used Firebase on is my older portfolio website, that is written in HTML. No framework was used for it.</p>
              )}
            </section>
          </div>
          <div id="ts" className="langs-sec-border hidden">
            <section className="langs-section">
              <div className="langs-icons">
                <img src="https://skillicons.dev/icons?i=ts" alt="TS icon" />
              </div>
              <h3>TS</h3>
              {navigator.language === "cs-CZ" || navigator.language === "cs" ? (
                <p>Ikdyž tenhle jazyk zrovna nemusim, protože má divnej syntax, kterej je vlastně jenom zmrvenej Javascript, začal jsem se ho učit asi v tu dobu, kdy jsem zjistil o Reactu a přišel jsem mu na kloub.</p>
              ) : (
                <p>Even tho I don't really like this language for it's weird syntax, that is basicly messed up Javascirpt, I started learning Typescript around the time I found out about React and I got used to it.</p>
              )}
            </section>
          </div>
          <div id="react" className="langs-sec-border hidden">
            <section className="langs-section">
              <div className="langs-icons">
                <img src="https://skillicons.dev/icons?i=react" alt="React icon" />
              </div>
              <h3>React</h3>
              {navigator.language === "cs-CZ" || navigator.language === "cs" ? (
                <p>Když jsem udělal moje první Reactový webovky, cítil jsem tu sílu, kterou v sobě React má a když pominu problémy, který jsem měl když jsem poprvé používál useStaty a useEffecty, je to celkem fajn framework. Mimochodem jsem React použil na tuhle webovku.</p>
              ) : (
                <p>When I made my first React webapp, I felt the power of it and despite having troubles when first using useStates and useEffects, I like it. This website is built with React btw.</p>
              )}
            </section>
          </div>
          <div id="git" className="langs-sec-border hidden">
            <section className="langs-section">
              <div className="langs-icons">
                <img src="https://skillicons.dev/icons?i=git" alt="Git icon" />
              </div>
              <h3>Git</h3>
              {navigator.language === "cs-CZ" || navigator.language === "cs" ? (
                <p>Další krok k tomu být lepší vývojář je se naučit záchazet s Gitem a Githubem (nebo GigLabem/BitBucketem, ale Github je nejpoužívanější). Začal jsem se s ním učit zacházet kolem listopadu 2023, což je podle mě docela pozdě. Každopádně, <a target="_blank" href="https://github.com/Honzoraptor31415">tady je můj Github</a>.</p>
              ) : (
                <p>Another step to being a good developer is to learn Git and Github (or GitLab/BitBucket, but Github is the most used one). I started learning Git just around November 2023, which is kinda late in my opinion. Anyways, <a target="_blank" href="https://github.com/Honzoraptor31415">here's my Github</a>.</p>
              )}
            </section>
          </div>
          <div id="svelte" className="langs-sec-border hidden">
            <section className="langs-section">
              <div className="langs-icons">
                <img src="https://skillicons.dev/icons?i=svelte" alt="Svelte icon" />
              </div>
              <h3>SvelteKit</h3>
              {navigator.language === "cs-CZ" || navigator.language === "cs" ? (
                <p>Je často označovanej jako nejpříjemnější Javascriptová library (to jako knihovna idk). A chápu proč: když píšeš cokoliv ve Sveltu, cítíš se, jako bys psal nějaký vyboostovaný HTML, který umí dělat podmínkový renderování, renderování arrayí (nevim jak na to do češtiny, j. č. je array) a psát proměnný přímo do markup kódu. Je daleko lěhčí v porovnání s Reactem, ale komunita kolem něj není bohužel moc velká. Zrovna teď pracuju na <a target="_blank" href="https://github.com/Honzoraptor31415/CodeConnect">CodeConnectu</a> na kterej používám SvelteKit.</p>
              ) : (
                <p>Is commonly refered to as the most loved Javascript library. And I understand why: when writing Svelte code, you feel like you're writing some boosted HTML, that can do conditional component rendering, rendering arrays and writing down variables directly into the markup code. It's way easier to learn compared to React, but it's community isn't as big. I'm currentely building <a target="_blank" href="https://github.com/Honzoraptor31415/CodeConnect">CodeConnect</a> with SvelteKit.</p>
              )}
            </section>
          </div>
          <div id="supabase" className="langs-sec-border hidden">
            <section className="langs-section">
              <div className="langs-icons">
                <img src="https://skillicons.dev/icons?i=supabase" alt="Supabase icon" />
              </div>
              <h3>Supabase</h3>
              {navigator.language === "cs-CZ" || navigator.language === "cs" ? (
                <p>Často používaná alternativa pro Firebase, kterou jsem začal používat kolem začátku ledna 2024, a to proto, abych mohl tenhle web připojit na nějakou databázi: nejdřív jsem zkusil Firebase, ale prostě to s Reactem nefungovalo, tak proto Supabase.</p>
              ) : (
                <p>A widely used Firebase alternative, which I sarted using at the beginning of January 2024, because I wanted to connect this website to a database: first I tried Firebase, but it didn't work out well with React, so that's why Supabase.</p>
              )}
            </section>
          </div>
        </section>
        <section className="hidden" id="contact">
          <h2>{navigator.language === "cs-CZ" || navigator.language === "cs" ? "Kde mě najdeš" : "You can also find me here"}</h2>
          <div className="contact-socials-wrp">
            <a target="_blank" title={navigator.language === "cs-CZ" || navigator.language === "cs" ? "Nebo mi prostě napiš na instagramu" : "Or you can just DM me on instagram"} href="mailto:honzoraptor@gmail.com" className="socel-container hidden">
              <div className="socel-wrp">
                <img src="gmail-icon.svg" alt="Gmail icon" />
                <div className="socials-element">
                  <h3>Email</h3>
                  <p>Honzoraptor@gmail.com</p>
                </div>
              </div>
            </a>
            <a target="_blank" href="https://github.com/Honzoraptor31415" className="socel-container hidden">
              <div className="socel-wrp">
                <img src="github-icon.svg" alt="Github icon" />
                <div className="socials-element">
                  <h3>Github</h3>
                  <p title={navigator.language === "cs-CZ" || navigator.language === "cs" ? "Tady najdeš vše, co jsem kdy naprogramoval (ne tak docela)" : "Here you'll find everything I've ever coded (sort of)"}>Honzoraptor31415</p>
                </div>
              </div>
            </a>
            <a target="_blank" href="https://www.instagram.com/honzoraptor/" className="socel-container hidden">
              <div className="socel-wrp">
                <img src="instagram-icon.svg" alt="Instagram icon" />
                <div className="socials-element">
                  <h3>Instagram</h3>
                  <p title={navigator.language === "cs-CZ" || navigator.language === "cs" ? "Tady jsem zrovna začal postovat" : "I just started posting here"}>@honzoraptor</p>
                </div>
              </div>
            </a>
            <a target="_blank" title={navigator.language === "cs-CZ" || navigator.language === "cs" ? "Už moc hry nedělám (udělal jsem zatím jenom jednu xD)" : "I don't really make games anymore (I made just one in my life xD)"} href="https://honzoraptor.itch.io/" className="socel-container hidden">
              <div className="socel-wrp">
                <img src="itch-icon.svg" alt="Itch icon" />
                <div className="socials-element">
                  <h3>Itch.io</h3>
                  <p>honzoraptor.itch.io</p>
                </div>
              </div>
            </a>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home