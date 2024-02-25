import { useEffect, useState } from "react"
import { supabase } from "../../supabaseClient"

function Projects() {
  const [data, setData] = useState<any[]>([])
  const [copied, setCopied] = useState(false)
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  useEffect(() => {
    if (navigator.language === "cs-CZ" || navigator.language === "cs") {
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

  const getData = async () => {
    const res: any = await supabase.from("Projects").select("*")
    /*  Date formating  */
    // res.data[0].date.split(".") = ex. ["10", "12", " 2023"]
    // res.data[0].date.split(".")[2].slice(1) = ex "2023" (cleans the whitespace)
    res.data.sort((a: any, b: any) => {
      try {
        return new Date(`${b.date.split(".")[0]} ${months[b.date.split(".")[1] - 1]}, ${b.date.split(".")[2].slice(1)}`).valueOf() - new Date(`${a.date.split(".")[0]} ${months[a.date.split(".")[1] - 1]}, ${a.date.split(".")[2].slice(1)}`).valueOf()
      } catch (error) {
        console.error('An error occured while sorting the projects:', error)
        return 0
      }
    })
    setData(res.data)
  }

  useEffect(() => {
    getData()
  }, [])

  async function clipboardWrite(url: string) {
    const type = "text/plain";
    const blob = new Blob([url], { type });
    const data = [new ClipboardItem({ [type]: blob })];
    await navigator.clipboard.write(data);
  }

  return (
    <>
      <main className="projects">
        {/* <div className="no-projects-wrp">
          <div className="no-projects">
            <h1>Currentely no projects</h1>
            <p>Working on them.</p>
          </div>
        </div> */}
        <h1>{navigator.language === "cs-CZ" || navigator.language === "cs" ? "Moje projekty" : "My projects"}</h1>
        <div className="projects-wrp">
          {data.map((value, index) => {
            return (
              <div onLoad={() => {
                if (location.hash !== "") {
                  document.getElementById(location.hash.slice(1))?.scrollIntoView()
                }
              }} key={index} className="project" id={value.titleEn.replaceAll(" ", "-")}>
                <div className="project-side">
                  <a target="_blank" href={value.github}>
                    <img src={value.img} className="rounded" />
                  </a>
                </div>
                <div className="project-side">
                  <div className="project-top">
                    <h3>{navigator.language === "cs" || navigator.language === "cs-CZ" ? value.titleCz : value.titleEn}</h3>
                    {/* value.date.split(".") = ex. ["10", "12", " 2023"] 

                    value.date.split(".")[2].slice(1) = ex "2023" (cleans the whitespace for the year) */}
                    <p className="date">{value.date.split(".")[0].length < 2 ? `0${value.date.split(".")[0]}` : value.date.split(".")[0]}.{value.date.split(".")[1].length < 2 ? `0${value.date.split(".")[1]}` : value.date.split(".")[1]}. {value.date.split(".")[2].slice(1)}</p>
                  </div>
                  {navigator.language === "cs-CZ" || navigator.language === "cs" ? (
                    <p>{value.textCz}</p>
                  ) : (
                    <p>{value.textEn}</p>
                  )}
                  <div className="project-links">
                    {value.web === "no" ? (
                      <a target="_blank" href={value.github}>
                        <img src="/github-icon.svg" />
                      </a>
                    ) : ("")}

                    {value.web === "yes" && value.link !== "no xD" ? (
                      <>
                        <a target="_blank" href={value.github}>
                          <img src="/github-icon.svg" />
                        </a>
                        <a target="_blank" href={value.link}>
                          <img src="/link-away.svg" />
                        </a>
                      </>
                    ) : (
                      <>
                        {value.web === "yes" ? (
                          <>
                            <a target="_blank" href={value.github}>
                              <img src="/github-icon.svg" />
                            </a>
                            <p className="no-demo">{navigator.language === "cs-CZ" || navigator.language === "cs" ? "Aplikace ještě není zveřejněná" : "App is not deployed yet"}</p>
                          </>
                        ) : ("")}
                      </>
                    )}

                  </div>
                  <div className="project-bottom-wrp">
                    <div className="tags-wrp">
                      <p>{navigator.language === "cs-CZ" || navigator.language === "cs" ? "Tagy:" : "Tags:"}</p>
                      <div className="tags">
                        {value.tags.split(" ").map((v: any, i: any) => {
                          return (
                            <p key={i} className={`tag ${v}-tag`} >{v}</p>
                          )
                        })}
                      </div>
                    </div>
                    <div className="popover-wrp">
                      <button id={`btn-${index}`} className="three-dots-btn popover-btn">
                        <img className="three-dots-vertical" src="/three-dots-vertical-icon.svg" alt="" />
                        <div id={`popover-${index}`} className="popover">
                          <a onClick={() => {
                            setCopied(true)
                            setTimeout(() => {
                              setCopied(false)
                              document.getElementById(`btn-${index}`)?.blur()
                            }, 1000)
                            clipboardWrite(`https://honzoraptor.vercel.app/projects#${value.titleEn.replaceAll(" ", "-")}`)
                          }} className="popover-link">
                            <img className="popover-icon" src="/copy-icon.svg" />
                            {copied ? (
                              <span className="success-text">{navigator.language === "cs" || navigator.language === "cs-CZ" ? "Zkopírováno!" : "Link copied!"}</span>
                            ) : (
                              <span>{navigator.language === "cs" || navigator.language === "cs-CZ" ? "Kopírovat odkaz" : "Copy link"}</span>
                            )}
                          </a>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </>
  )
}

export default Projects
