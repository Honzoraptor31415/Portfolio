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
              <img className="no-select" src="https://skillicons.dev/icons?i=html" alt="HTML" />
            </a>
            <a href="#html-css">
              <img className="no-select" src="https://skillicons.dev/icons?i=css" alt="CSS" />
            </a>
            <a href="#js">
              <img className="no-select" src="https://skillicons.dev/icons?i=js" alt="js" />
            </a>
            <a href="#ts">
              <img className="no-select" src="https://skillicons.dev/icons?i=ts" alt="ts" />
            </a>
            <a href="#react">
              <img className="no-select" src="https://skillicons.dev/icons?i=react" alt="React" />
            </a>
            <a href="#svelte">
              <img className="no-select" src="https://skillicons.dev/icons?i=svelte" alt="Svelte" />
            </a>
            <a href="#git">
              <img className="no-select" src="https://skillicons.dev/icons?i=git" alt="Git" />
            </a>
            <a href="#py">
              <img className="no-select" src="https://skillicons.dev/icons?i=py" alt="Python" />
            </a>
            <a href="#firebase">
              <img className="no-select" src="https://skillicons.dev/icons?i=firebase" alt="Firebase" />
            </a>
            <a href="#supabase">
              <img className="no-select" src="https://skillicons.dev/icons?i=supabase" alt="Supabase" />
            </a>
            {navigator.language === "cs-CZ" || navigator.language === "cs" ? (
              <p className="langs-tech-above">S čím umím <span className="pointer-finger">👆</span></p>
            ) : (
              <p className="langs-tech-above">What I know <span className="pointer-finger">👆</span></p>
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
                <img className="no-select" src="https://skillicons.dev/icons?i=html" alt="HTML icon" />
                <img className="no-select" src="https://skillicons.dev/icons?i=css" alt="CSS icon" />
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
                <img className="no-select" src="https://skillicons.dev/icons?i=js" alt="JS icon" />
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
                <img className="no-select" src="https://skillicons.dev/icons?i=py" alt="Python icon" />
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
                <img className="no-select" src="https://skillicons.dev/icons?i=firebase" alt="Firebase icon" />
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
                <img className="no-select" src="https://skillicons.dev/icons?i=ts" alt="TS icon" />
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
                <img className="no-select" src="https://skillicons.dev/icons?i=react" alt="React icon" />
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
                <img className="no-select" src="https://skillicons.dev/icons?i=git" alt="Git icon" />
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
                <img className="no-select" src="https://skillicons.dev/icons?i=svelte" alt="Svelte icon" />
              </div>
              <h3>SvelteKit</h3>
              {navigator.language === "cs-CZ" || navigator.language === "cs" ? (
                <p>Je často označovanej jako nejpříjemnější Javascriptová library (to jako knihovna idk). A chápu proč: když píšeš cokoliv ve Sveltu, cítíš se, jako bys psal nějaký vyboostovaný HTML, který umí dělat podmínkový renderování, renderování arrayí (nevim jak na to do češtiny, j. č. je array) a psát proměnný přímo do markup kódu. Je daleko lěhčí v porovnání s Reactem, ale komunita kolem něj není bohužel moc velká.</p>
              ) : (
                <p>Is commonly refered to as the most loved Javascript library. And I understand why: when writing Svelte code, you feel like you're writing some boosted HTML, that can do conditional component rendering, rendering arrays and writing down variables directly into the markup code. It's way easier to learn compared to React, but it's community isn't as big.</p>
              )}
            </section>
          </div>
          <div id="supabase" className="langs-sec-border hidden">
            <section className="langs-section">
              <div className="langs-icons">
                <img className="no-select" src="https://skillicons.dev/icons?i=supabase" alt="Supabase icon" />
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
        <section id="go-to-stack">
          <h2 className="hidden">{navigator.language === "cs" || navigator.language === "cs-CZ" ? "Moje go-to technologie" : "My go-to technologies"}</h2>
          <section id="webapps" className="go-to-section hidden">
            <div className="go-to-top">
              <h3>{navigator.language === "cs" || navigator.language === "cs-CZ" ? "Pro webovky" : "For webapps"} </h3>
              <div className="go-to-icons">
                <img className="no-select" title="React" src="https://skillicons.dev/icons?i=react" />
                <img className="no-select" title="Typescript" src="https://skillicons.dev/icons?i=ts" />
                <img className="no-select" title="CSS" src="https://skillicons.dev/icons?i=css" />
                <img className="no-select" title="Supabase" src="https://skillicons.dev/icons?i=supabase" />
              </div>
            </div>
            {navigator.language === "cs" || navigator.language === "cs-CZ" ? (
              <>
                <p>Když programuju webový aplikace, vždycky se zamyslím nad dvěma věcma: Potřebuju backend? Jak komplikovaná tahle Webovka bude?</p>

                <p>Obvykle když dělám komplikovanější věci, který mají složitej backend a hodně kódu, tak vyberu <span className="react">React</span> jako knihovnu, protože má hodně velkou komunitu, takže když se mi něco nezadaří, můžu se např. zeptat na Redditu/Discordu a někdo mi s tím poradí. Když je ta webovka ale míň komplikovaná a třeba ani nepotřebuje backend, použiju SvelteKit. Ani upřímně nevím proč používám Typescript, ale je to prostě takovej čistější zbůsob jak psát Javascript, tak asi proto. No a CSS je zatím jedinej stylovací jazyk, kterej znám, ale chtě, bych se ještě naučit <span className="sass">Sass</span>, abych byl trochu lepším developerem.</p>

                <p>No a pro backend (BaaS) obvykle použiju Supabase, protože má úžasnou dokumentaci a je hodně jednoduchá na použití (zkoušel jsem React používat s Firebase, ale vůbec to nešlo - nešlo to ani se SvelteKitem, proto pomalu přecházím na Supabase, možná později i <span className="appwrite">Appwrite</span> ). Supabase používám i na tomhle webu btw.</p>
              </>
            ) : (
              <>
                <p>When programming webapps, I always think about two things: do I need a backend? How complicated will this website be?</p>

                <p>Usually when making more complicated things, which have a huge backend and a lot of code I chose <span className="react">React</span> as a library, because it's community is really big, so whenever I'm stuck coding, I can just ask on Reddit/Discord and someone will help me. However if the webapp is less complicated and ex. doesn't requier a backend at all, I chose SvelteKit. Honestely, I don't even know why I use Typescript, but it's just a cleaner way to write Javascript, so that's propably why. Well and CSS is so far the only styling language that I know, but I want to learn <span className="sass">Sass</span> in the future, just so I'm a better dev.</p>

                <p>And for the backend (Bass) I usually use Supabase, because it's docs are amazing and it's really easy to learn and use (I tried using React with Firebase, but it didn't work whatsoever - it didn't even work with Sveltekit, therefor I'm slowly switching to Supabase, maybe <span className="appwrite">Appwrite</span> later). Btw, I use Supabase on this website.</p>
              </>
            )}
          </section>
          <section id="pc-apps" className="go-to-section hidden">
            <div className="go-to-top">
              <h3>{navigator.language === "cs" || navigator.language === "cs-CZ" ? "Pro programy na PC" : "For PC apps"} </h3>
              <div className="go-to-icons">
                <img className="no-select" title="Python" src="https://skillicons.dev/icons?i=py" />
                <img className="no-select" title="Firebase" src="https://skillicons.dev/icons?i=firebase" />
              </div>
            </div>
            {navigator.language === "cs" || navigator.language === "cs-CZ" ? (
              <>
                <p>Pro aplikace na PC a tím nemyslím jen klasické aplikace s GUI oknem, ale i různý scripty pro PC používám aktuálně hlavně Python. Aplikace i s backendem ale v pythonu nedělám, a kdybych dělal, vybral bych určitě <span className="firebase">Firebase</span> (já vím že je to BaaS, nech mě bejt pls), protože má pro python asi nejlepší dokumentaci.</p>

                <p>V budoucnu mám v plánu zkusit <span className="electron">Electron JS</span> nebo <span className="react">React Native</span> (a to nejen pro desktop ale i Android), protože poskytujou daleko lepší přehled a zážitek pro vývojáře a jejich komunita je větší než ta od Pythonu.</p>
              </>
            ) : (
              <>
                <p>For PC apps (and with that I mean not only apps with GUI, but also PC scripts and stuff) I mainly use Python. I don't do backend for apps that use Python, because it's just not the right way to do it, but if I had to, I'd go with <span className="firebase">Firebase</span> (I know that it's a BaaS, pls leave me alone), because it's docs for Python are better than for others imo. </p>
                <p>In the future I'm planning on making apps with <span className="electron">Electron JS</span> or <span className="react">React Native</span> (not only for desktop, but also Android), because those provide a better experience for the developer when coding and the community is bigger than for Python.</p>
              </>
            )}
          </section>
        </section>
        <section className="hidden" id="contact">
          <h2>{navigator.language === "cs-CZ" || navigator.language === "cs" ? "Kde mě najdeš" : "You can also find me here"}</h2>
          <div className="contact-socials-wrp">
            <a target="_blank" title={navigator.language === "cs-CZ" || navigator.language === "cs" ? "Nebo mi prostě napiš na instagramu" : "Or you can just DM me on instagram"} href="mailto:honzoraptor@gmail.com" className="socel-container hidden">
              <div className="socel-wrp">
                <img className="no-select" src="gmail-icon.svg" alt="Gmail icon" />
                <div className="socials-element">
                  <h3>Email</h3>
                  <p>Honzoraptor@gmail.com</p>
                </div>
              </div>
            </a>
            <a target="_blank" href="https://github.com/Honzoraptor31415" className="socel-container hidden">
              <div className="socel-wrp">
                <img className="no-select" src="github-icon.svg" alt="Github icon" />
                <div className="socials-element">
                  <h3>Github</h3>
                  <p title={navigator.language === "cs-CZ" || navigator.language === "cs" ? "Tady najdeš vše, co jsem kdy naprogramoval (ne tak docela)" : "Here you'll find everything I've ever coded (sort of)"}>Honzoraptor31415</p>
                </div>
              </div>
            </a>
            <a target="_blank" href="https://www.instagram.com/honzoraptor/" className="socel-container hidden">
              <div className="socel-wrp">
                <img className="no-select" src="instagram-icon.svg" alt="Instagram icon" />
                <div className="socials-element">
                  <h3>Instagram</h3>
                  <p title={navigator.language === "cs-CZ" || navigator.language === "cs" ? "Tady jsem zrovna začal postovat" : "I just started posting here"}>@honzoraptor</p>
                </div>
              </div>
            </a>
            <a target="_blank" title={navigator.language === "cs-CZ" || navigator.language === "cs" ? "Už moc hry nedělám (udělal jsem zatím jenom jednu xD)" : "I don't really make games anymore (I made just one in my life xD)"} href="https://honzoraptor.itch.io/" className="socel-container hidden">
              <div className="socel-wrp">
                <img className="no-select" src="itch-icon.svg" alt="Itch icon" />
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