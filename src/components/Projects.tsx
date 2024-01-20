import { useEffect, useState } from "react"
import { supabase } from "../supabaseClient"

function Projects() {
  const [data, setData] = useState<any[]>([])
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
              <div key={index} className="project">
                <div className="project-side">
                  <a href={value.github}>
                    <img src={value.img} className="rounded" />
                  </a>
                </div>
                <div className="project-side">
                  <div className="project-top">
                    <h3>{navigator.language === "cs" || navigator.language === "cs-CZ" ? JSON.parse(value.title).cz : JSON.parse(value.title).en}</h3>
                    {/* value.date.split(".") = ex. ["10", "12", " 2023"] 

                    value.date.split(".")[2].slice(1) = ex "2023" (cleans the whitespace for the year) */}
                    <p className="date">{value.date.split(".")[0].length < 2 ? `0${value.date.split(".")[0]}` : value.date.split(".")[0]}.{value.date.split(".")[1].length < 2 ? `0${value.date.split(".")[1]}` : value.date.split(".")[1]}. {value.date.split(".")[2].slice(1)}</p>
                  </div>
                  {navigator.language === "cs-CZ" || navigator.language === "cs" ? (
                    <p>{JSON.parse(value.text).cz}</p>
                  ) : (
                    <p>{JSON.parse(value.text).en}</p>
                  )}
                  <div className="project-links">

                    {value.web === "no" ? (
                      <a href={value.github}>
                        <img src="/github-icon.svg" />
                      </a>
                    ) : ("")}

                    {value.web === "yes" && value.link !== "no xD" ? (
                      <>
                        <a href={value.github}>
                          <img src="/github-icon.svg" />
                        </a>
                        <a href={value.link}>
                          <img src="/link-away.svg" />
                        </a>
                      </>
                    ) : (
                      <>
                        {value.web === "yes" ? (
                          <>
                            <a href={value.github}>
                              <img src="/github-icon.svg" />
                            </a>
                            <p className="no-demo">{navigator.language === "cs-CZ" || navigator.language === "cs" ? "Aplikace ještě není zveřejněná" : "App is not deployed yet"}</p>
                          </>
                        ) : ("")}
                      </>
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
