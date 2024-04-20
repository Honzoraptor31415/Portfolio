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
        <div className="header-side header-left hidden">
          <h1>{navigator.language === "cs-CZ" || navigator.language === "cs" ? "Těpéro!" : "Hey there!"}</h1>
          {navigator.language === "cs-CZ" || navigator.language === "cs" ? (

            <p className="header-about">Tohle je malý portfolio od <a href="https://github.com/Honzoraptor31415" target="_blank" className="colored-text">Honzoraptora</a>. Kdykoliv něco naprogramuju, najdeš to tady.</p>
          ) : (
            <p className="header-about">This is a small portfolio website made by <a href="https://github.com/Honzoraptor31415" target="_blank" className="colored-text">Honzoraptor</a>. Whenever I code something, you'll find it here.</p>
          )}
          <div className="primary-btn-wrp">
            <a href="/projects" className="primary-btn span-move-btn">{navigator.language === "cs-CZ" || navigator.language === "cs" ? (
              <>
                Moje projekty <span>→</span>
              </>
            ) : (
              <>
                My projects <span>→</span>
              </>
            )}</a>
          </div>
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
            <a href="#nextjs">
              <img className="no-select" src="https://skillicons.dev/icons?i=nextjs" alt="NextJS" />
            </a>
            <a href="#sveltekit">
              <img className="no-select" src="https://skillicons.dev/icons?i=svelte" alt="SvelteKit" />
            </a>
            <a href="#git">
              <img className="no-select" src="https://skillicons.dev/icons?i=git" alt="Git" />
            </a>
            <a href="#py">
              <img className="no-select" src="https://skillicons.dev/icons?i=py" alt="Python" />
            </a>
            <a href="#supabase">
              <img className="no-select" src="https://skillicons.dev/icons?i=supabase" alt="Supabase" />
            </a>
            <a href="#appwrite">
              <img className="no-select" src="https://skillicons.dev/icons?i=appwrite" alt="Appwrite" />
            </a>
            {navigator.language === "cs-CZ" || navigator.language === "cs" ? (
              <p className="langs-tech-above flex-center-all">Skilly <span className="pointer-finger">👆</span></p>
            ) : (
              <p className="langs-tech-above flex-center-all">Skills <span className="pointer-finger">👆</span></p>
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
              <div className="langs-section-top">
                <h3>HTML <img className="no-select" src="https://skillicons.dev/icons?i=html" alt="HTML icon" />, CSS <img className="no-select" src="https://skillicons.dev/icons?i=css" alt="CSS icon" /></h3>
              </div>
              {navigator.language === "cs-CZ" || navigator.language === "cs" ? (
                <p>Jak už jsem řekl, tohle byly první jazyky, co jsem se naučil. Tenktrát jsem neuměl úplně designovat, takže všechno co jsem stvořil vypadalo otřesně. <span className="sarcasm">Bohužel</span> Naštěstí jsem si z těch dob nic nezachoval, takže ty odporný designy nikdo neuvidí.</p>
              ) : (
                <p>As I already mentioned, these were the first languages I learned. Back then I couldn't really design things, which resulted into terribly looking webpages. <span className="sarcasm">Un</span>fortunately I didn't save any of the creations from back then, so noone can see those terrible designs.</p>
              )}
            </section>
          </div>
          <div id="js" className="langs-sec-border hidden">
            <section className="langs-section">
              <div className="langs-section-top">
                <h3>JS <img className="no-select" src="https://skillicons.dev/icons?i=js" alt="JS icon" /></h3>
              </div>
              {navigator.language === "cs-CZ" || navigator.language === "cs" ? (
                <p>Tohle byl první opravdu programovací jazyk, kterej jsem se naučil. Zkoušel jsem s ním dělat i hry jako The scary maze game a myslím, že výsledek vypadal úctyhodně. Javascript je skvělej jazyk pro začátečníky i pokročilý, protože s ním jde dělat <span className="colored-text"><b>doslova</b></span> všechno: Programovat Full-stack webový aplikace, aplikace pro PC, servery a dokonce i hry!</p>
              ) : (
                <p>This was the first actual programming language that I learned. I tried making games like The scary maze game with Javascript and it turned out pretty good. Javascript is the best language for both beginners and advanced programmers, because you can do basicly anything with it: Build Full-stack webapps, desktop apps, servers and even games!</p>
              )}

            </section>
          </div>
          <div id="py" className="langs-sec-border hidden">
            <section className="langs-section">
              <div className="langs-section-top">

                <h3>Python <img className="no-select" src="https://skillicons.dev/icons?i=py" alt="Python icon" /></h3>
              </div>
              {navigator.language === "cs-CZ" || navigator.language === "cs" ? (
                <p>V tomhle bodě už mě programování začalo fakt bavit a chtěl jsem zkusit něco novýho. Moje první řádky Python kódu jsem napsal na webovým IDEčku na <a target="_blank" href="https://www.w3schools.com/python/trypython.asp?filename=demo_default">W3schools.com</a></p>
              ) : (
                <p>I started to be more interested in programming at this point and wanted to try something new. I wrote my first lines of Python code in a web-based IDE on <a target="_blank" href="https://www.w3schools.com/python/trypython.asp?filename=demo_default">W3schools.com</a></p>
              )}
            </section>
          </div>
          <div id="ts" className="langs-sec-border hidden">
            <section className="langs-section">
              <div className="langs-section-top">

                <h3>TS <img className="no-select" src="https://skillicons.dev/icons?i=ts" alt="TS icon" /></h3>
              </div>
              {navigator.language === "cs-CZ" || navigator.language === "cs" ? (
                <p>Ikdyž tenhle jazyk zrovna nemusim, protože má divnej syntax, kterej je vlastně jenom zmrvenej Javascript, začal jsem se ho učit asi v tu dobu, kdy jsem zjistil o Reactu a přišel jsem mu na kloub.</p>
              ) : (
                <p>Even tho I don't really like this language for it's weird syntax, that is basicly messed up Javascirpt, I started learning Typescript around the time I found out about React and I got used to it.</p>
              )}
            </section>
          </div>
          <div id="react" className="langs-sec-border hidden">
            <section className="langs-section">
              <div className="langs-section-top">

                <h3>React <img className="no-select" src="https://skillicons.dev/icons?i=react" alt="React icon" /></h3>
              </div>
              {navigator.language === "cs-CZ" || navigator.language === "cs" ? (
                <p>Když jsem udělal moje první Reactový webovky, cítil jsem tu sílu, kterou v sobě React má a když pominu problémy, který jsem měl když jsem poprvé používál useStaty a useEffecty, je to celkem fajn framework. Mimochodem jsem React použil na tuhle webovku.</p>
              ) : (
                <p>When I made my first React webapp, I felt the power of it and despite having troubles when first using useStates and useEffects, I like it. This website is built with React btw.</p>
              )}
            </section>
          </div>
          <div id="git" className="langs-sec-border hidden">
            <section className="langs-section">
              <div className="langs-section-top">

                <h3>Git <img className="no-select" src="https://skillicons.dev/icons?i=git" alt="Git icon" /></h3>
              </div>
              {navigator.language === "cs-CZ" || navigator.language === "cs" ? (
                <p>Další krok k tomu být lepší vývojář je se naučit záchazet s Gitem a Githubem (nebo GigLabem/BitBucketem, ale Github je nejpoužívanější). Začal jsem se s ním učit zacházet kolem listopadu 2023, což je podle mě docela pozdě. Každopádně, <a target="_blank" href="https://github.com/Honzoraptor31415">tady je můj Github</a>.</p>
              ) : (
                <p>Another step to being a good developer is to learn Git and Github (or GitLab/BitBucket, but Github is the most used one). I started learning Git just around November 2023, which is kinda late in my opinion. Anyways, <a target="_blank" href="https://github.com/Honzoraptor31415">here's my Github</a>.</p>
              )}
            </section>
          </div>
          <div id="sveltekit" className="langs-sec-border hidden">
            <section className="langs-section">
              <div className="langs-section-top">

                <h3>SvelteKit <img className="no-select" src="https://skillicons.dev/icons?i=svelte" alt="SvelteKit icon" /></h3>
              </div>
              {navigator.language === "cs-CZ" || navigator.language === "cs" ? (
                <p>Je často označovanej jako nejpříjemnější Javascriptová library (to jako knihovna idk). A chápu proč: když píšeš cokoliv ve Sveltu/SvelteKitu, cítíš se, jako bys psal nějaký vyboostovaný HTML, který umí dělat podmínkový renderování, renderování arrayí (nevim jak na to do češtiny, j. č. je array) a psát proměnný přímo do markup kódu. Je daleko lěhčí v porovnání s Reactem, ale komunita kolem něj není bohužel moc velká.</p>
              ) : (
                <p>Is commonly refered to as the most loved Javascript library. And I understand why: when writing Svelte/SvelteKit code, you feel like you're writing some boosted HTML, that can do conditional component rendering, rendering arrays and writing down variables directly into the markup code. It's way easier to learn compared to React, but it's community isn't as big.</p>
              )}
            </section>
          </div>
          <div id="supabase" className="langs-sec-border hidden">
            <section className="langs-section">
              <div className="langs-section-top">
                <h3>Supabase <img className="no-select" src="https://skillicons.dev/icons?i=supabase" alt="Supabase icon" /></h3>
              </div>
              {navigator.language === "cs-CZ" || navigator.language === "cs" ? (
                <p>Často používaná alternativa pro Firebase, kterou jsem začal používat kolem začátku ledna 2024, a to proto, abych mohl tenhle web připojit na nějakou databázi: nejdřív jsem zkusil Firebase, ale prostě to s Reactem nefungovalo, tak proto Supabase.</p>
              ) : (
                <p>A widely used Firebase alternative, which I sarted using at the beginning of January 2024, because I wanted to connect this website to a database: first I tried Firebase, but it didn't work out well with React, so that's why Supabase.</p>
              )}
            </section>
          </div>
          <div id="appwrite" className="langs-sec-border hidden">
            <section className="langs-section">
              <div className="langs-section-top">
                <h3>Appwrite <img className="no-select" src="https://skillicons.dev/icons?i=appwrite" alt="Appwrite icon" /></h3>
              </div>
              {navigator.language === "cs-CZ" || navigator.language === "cs" ? (
                <p>Protože umět s dvěma BaaSama (basama lol) není dost, začátkem března jsem se naučil zacházet i s Appwritem. Bylo to taky protože mi SvelteKit nefungoval s Firebase. No a když jsem SvelteKit zkusil s Appwritem, bylo to úžasný, jednoduchý a hlavně bez glitchů.</p>
              ) : (
                <p>Because <span className="sarcasm">mastering</span> knowing how to work with two BaaSes is not enough, in the beginning of March 2024 I learned to work with Appwrite. I also did it, because SvelteKit didn't work as good as it should with Firebase. And when I tried SvelteKit with Appwrite, it was wonderful, easy and mainly without any glitches.</p>
              )}
            </section>
          </div>
          <div id="nextjs" className="langs-sec-border hidden">
            <section className="langs-section">
              <div className="langs-section-top">

                <h3>NextJS <img className="no-select" src="https://skillicons.dev/icons?i=next" alt="NextJS icon" /></h3>
              </div>
              {navigator.language === "cs-CZ" || navigator.language === "cs" ? (
                <p>Framework pro react, se kterým jsem začal dělat koncem března 2024. Je v něm poznat, že je to něco víc než React třeba kvůli tomu, že má složkovej routing, SSR nebo třeba soubory jako <span className="code">page.js</span> nebo <span className="code">layout.js</span>, podobně jako je tomu ve SvelteKitu.</p>
              ) : (
                <p>A framework for React, that I started using at the end of March 2024. When using it, you can tell that it's better than React, because it has stuff like filesystem-based routing, SSR or files like <span className="code">page.js</span> or <span className="code">layout.js</span>, similarly how SvelteKit has.</p>
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

                <p>Obvykle když dělám komplikovanější věci, který mají složitej backend a hodně kódu, tak vyberu <span className="react">React</span> jako knihovnu, protože má hodně velkou komunitu, takže když se mi něco nezadaří, můžu se např. zeptat na Redditu/Discordu a někdo mi s tím poradí. SvelteKit je ale taky dobrá volba, a proto když mi něco fakt nefunguje s Reactem, použiju SvelteKit. Ani upřímně nevím proč používám Typescript, ale je to prostě takovej čistější zbůsob jak psát Javascript, tak asi proto. No a CSS je zatím jedinej stylovací jazyk, kterej znám, ale chtě, bych se ještě naučit <span className="sass">Sass</span>, abych byl trochu lepším developerem.</p>

                <p>No a pro backend (BaaS) obvykle použiju Supabase, protože má úžasnou dokumentaci a je hodně jednoduchá na použití (zkoušel jsem React používat s Firebase, ale vůbec to nešlo - nešlo to ani se SvelteKitem, proto pomalu přecházím na Supabase a <span className="appwrite">Appwrite</span>). Supabase používám i na tomhle webu btw.</p>
              </>
            ) : (
              <>
                <p>When programming webapps, I always think about two things: do I need a backend? How complicated will this website be?</p>

                <p>Usually when making more complicated things, which have a huge backend and a lot of code I chose <span className="react">React</span> as a library, because it's community is really big, so whenever I'm stuck coding, I can just ask on Reddit/Discord and someone will help me. However SvelteKit is also a great frakework, so when something really doesn't work with React, I use SvelteKit Honestely, I don't even know why I use Typescript, but it's just a cleaner way to write Javascript, so that's propably why. Well and CSS is so far the only styling language that I know, but I want to learn <span className="sass">Sass</span> in the future, just so I'm a better dev.</p>

                <p>And for the backend (Bass) I usually use Supabase, because it's docs are amazing and it's really easy to learn and use (I tried using React with Firebase, but it didn't work whatsoever - it didn't even work with SvelteKit, therefor I'm slowly switching to Supabase and <span className="appwrite">Appwrite</span>). Btw, I use Supabase on this website.</p>
              </>
            )}
          </section>
          <section id="pc-apps" className="go-to-section hidden">
            <div className="go-to-top">
              <h3>{navigator.language === "cs" || navigator.language === "cs-CZ" ? "Pro programy na PC" : "For PC apps"} </h3>
              <div className="go-to-icons">
                <img className="no-select" title="Python" src="https://skillicons.dev/icons?i=py" />
              </div>
            </div>
            {navigator.language === "cs" || navigator.language === "cs-CZ" ? (
              <>
                <p>Pro aplikace na PC a tím nemyslím jen klasické aplikace s GUI oknem, ale i různý scripty pro PC používám aktuálně hlavně Python. Aplikace i s backendem ale v pythonu nedělám, a kdybych dělal, vybral bych asi Supabase (já vím že je to BaaS, nech mě bejt pls), protože má pro python dobrou dokumentaci nebo bych naprogramoval opravdovej backend s např. <span className="mongodb">MongoDB</span>.</p>

                <p>V budoucnu mám v plánu zkusit <span className="electron">Electron JS</span> nebo <span className="react">React Native</span> (a to nejen pro desktop ale i Android), protože poskytujou daleko lepší přehled a zážitek pro vývojáře a jejich komunita je větší než ta od Pythonu.</p>
              </>
            ) : (
              <>
                <p>For PC apps (and with that I mean not only apps with GUI, but also PC scripts and stuff) I mainly use Python. I usually don't do backend for apps that use Python, but if I had to, I'd go with Supabase (I know that it's a BaaS, pls leave me alone), because it's docs for Python are good or I'd just code a real backend with something like <span className="mongodb">MongoDB</span>.</p>
                <p>In the future I'm planning on making apps with <span className="electron">Electron JS</span> or <span className="react">React Native</span> (not only for desktop, but also Android), because those provide a better experience for the developer when coding and the community is bigger than for Python.</p>
              </>
            )}
          </section>
        </section>
        <section className="hidden" id="contact">
          <h2>{navigator.language === "cs-CZ" || navigator.language === "cs" ? "Kde mě najdeš" : "You can also find me here"}</h2>
          <div className="contact-socials-wrp">
            <a target="_blank" title={navigator.language === "cs-CZ" || navigator.language === "cs" ? "Nebo mi prostě napiš na instagramu" : "Or you can just DM me on instagram"} href="mailto:honzoraptor@gmail.com" className="socel-container radial-blue hidden">
              <div className="socel-wrp">
                <img className="no-select" src="gmail-icon.svg" alt="Gmail icon" />
                <div className="socials-element">
                  <h3>Email</h3>
                  <p>Honzoraptor@gmail.com</p>
                </div>
              </div>
            </a>
            <a target="_blank" href="https://github.com/Honzoraptor31415" className="socel-container radial-white hidden">
              <div className="socel-wrp">
                <img className="no-select" src="github-icon.svg" alt="Github icon" />
                <div className="socials-element">
                  <h3>Github</h3>
                  <p title={navigator.language === "cs-CZ" || navigator.language === "cs" ? "Tady najdeš vše, co jsem kdy naprogramoval (ne tak docela)" : "Here you'll find everything I've ever coded (sort of)"}>Honzoraptor31415</p>
                </div>
              </div>
            </a>
            <a target="_blank" href="https://www.instagram.com/honzoraptor/" className="socel-container radial-pink hidden">
              <div className="socel-wrp">
                <img className="no-select" src="instagram-icon.svg" alt="Instagram icon" />
                <div className="socials-element">
                  <h3>Instagram</h3>
                  <p title={navigator.language === "cs-CZ" || navigator.language === "cs" ? "Tady jsem zrovna začal postovat" : "I just started posting here"}>@honzoraptor</p>
                </div>
              </div>
            </a>
            <a target="_blank" title={navigator.language === "cs-CZ" || navigator.language === "cs" ? "Už moc hry nedělám (udělal jsem zatím jenom jednu xD)" : "I don't really make games anymore (I made just one in my life xD)"} href="https://honzoraptor.itch.io/" className="socel-container radial-light-red hidden">
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