import { useEffect, useState } from "react"
import { supabase } from "../supabaseClient"

function Projects() {
  const [data, setData] = useState<any[]>([])
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

    setData(res.data)

  }

  useEffect(() => {
    getData()
  }, [])

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
          {data.reverse().map((value, index) => {
            return (
              <div key={index} className="project">
                <div className="project-side">
                  <a href={value.github}>
                    <img src={value.img} className="rounded" />
                  </a>
                </div>
                <div className="project-side">
                  <div className="project-top">
                    <h3>{navigator.language === "cs" || navigator.language === "cs-CZ" ? JSON.parse(value.title).cz : JSON.parse(value.title).en}</h3>
                    <p className="date">{value.date}</p>
                  </div>
                  {navigator.language === "cs-CZ" || navigator.language === "cs" ? (
                    <p>{JSON.parse(value.text).cz}</p>
                  ) : (
                    <p>{JSON.parse(value.text).en}</p>
                  )}
                  <div className="project-links">
                    <a href={value.github}>
                      <img src="/github-icon.svg" />
                    </a>
                    {value.download !== "no xD" && value.link === "no xD" ? (
                      <a download={value.title} href={value.download}>
                        <img src="/download-icon.svg" />
                      </a>
                    ) : ("")}

                    {value.download === "no xD" && value.link === "no xD" ? (
                      <p className="no-demo">{navigator.language === "cs-CZ" || navigator.language === "cs" ? "Aplikace ještě není zveřejněná" : "App is not deployed yet"}</p>
                    ) : (
                      <a href={value.link}>
                        <img src="/link-away.svg" />
                      </a>
                    )}

                  </div>
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
