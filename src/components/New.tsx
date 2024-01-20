import { ChangeEvent, useState, useEffect } from "react";
import BlurryBackground from "./BlurryBackground";
import { supabase } from "../supabaseClient";

function New() {
  useEffect(() => {
    if (navigator.language === "cs" || navigator.language === "cs-CZ") {
      document.title = "Novej projekt"
    } else {
      document.title = "New project"
    }
  }, [])
  const [CZtitle, setCZTitle] = useState("")
  const [ENTitle, setENTitle] = useState("")
  const [date, setDate] = useState("")
  const [imgUrl, setImgUrl] = useState("")
  const [githubLink, setGithubLink] = useState("")
  const [url, setUrl] = useState("")
  const [CZText, setCZText] = useState("")
  const [ENText, setENText] = useState("")
  const [tags, setTags] = useState("")
  const [isWeb, setIsWeb] = useState("")

  const handleCZTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCZTitle(e.target.value)
  }; const handleENTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setENTitle(e.target.value)
  }; const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value)
  }; const handleImgUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    setImgUrl(e.target.value)
  }; const handleGithubLinkChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGithubLink(e.target.value);
  }; const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value)
  }; const handleCZTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCZText(e.target.value)
  }; const handleENTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setENText(e.target.value)
  }; const handleTagsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTags(e.target.value)
  }; const handleIsWebChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setIsWeb(e.target.value)
  };

  const handleSubmit = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      const res = await supabase.from("Projects").insert(
        {
          title: `{"cz":"${CZtitle}","en":"${ENTitle}"}`,
          date: date ? date : `${new Date().getDay()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}`,
          img: imgUrl,
          github: githubLink,
          link: url ? url : "no xD",
          text: `{"cz":"${CZText}","en":"${ENText}"}`,
          tags: tags,
          web: isWeb
        }).select("*").single()
      console.log(res)
    }
  }

  return (
    <>
      <header className="new">
        <div style={{ position: "fixed", left: "50%", top: "50%", transform: "translate(-50%, -50%)", zIndex: "10", width: "200px", height: "200px" }}>
          <BlurryBackground />
        </div>
        <div className="post-form">
          <h3>{navigator.language === "cs" || navigator.language === "cs-CZ" ? "Nový projekt" : "New project"}</h3>
          <div className="titles">
            <div className="title">
              <label htmlFor="CZTitle">{navigator.language === "cs" || navigator.language === "cs-CZ" ? "Titulek (CZ)" : "Title (CZ)"}</label>
              <input required type="text" placeholder={navigator.language === "cs" || navigator.language === "cs-CZ" ? "Titulek (CZ)" : "Title (CZ)"} id="CZTitle" onChange={handleCZTitleChange} value={CZtitle} />
            </div>
            <div className="title">
              <label htmlFor="ENTitle">{navigator.language === "cs" || navigator.language === "cs-CZ" ? "Titulek (EN)" : "Title (EN)"}</label>
              <input required type="text" placeholder={navigator.language === "cs" || navigator.language === "cs-CZ" ? "Titulek (EN)" : "Title (EN)"} id="ENTitle" onChange={handleENTitleChange} value={ENTitle} />
            </div>
          </div>

          <div className="links">
            <div className="title">
              <label htmlFor="date">{navigator.language === "cs" || navigator.language === "cs-CZ" ? "Datum" : "Date"}</label>
              <input type="text" id="date" placeholder={navigator.language === "cs" || navigator.language === "cs-CZ" ? "Datum" : "Date"} onChange={handleDateChange} value={date} />
            </div>
            <div className="title">
              <label htmlFor="web">{navigator.language === "cs" || navigator.language === "cs-CZ" ? "Web" : "Web"}</label>
              <select id="web" onChange={handleIsWebChange} value={isWeb}>
                <option value="yes">{navigator.language === "cs" || navigator.language === "cs-CZ" ? "Jop" : "Yes"}</option>
                <option value="no">{navigator.language === "cs" || navigator.language === "cs-CZ" ? "Ne" : "No"}</option>
              </select>
            </div>
          </div>

          <div className="links">
            <div className="title">
              <label htmlFor="img-url">{navigator.language === "cs" || navigator.language === "cs-CZ" ? "URL obrázku" : "Image URL"}</label>
              <input placeholder={navigator.language === "cs" || navigator.language === "cs-CZ" ? "URL obrázku" : "Image URL"} required type="url" id="img-url" onChange={handleImgUrlChange} value={imgUrl} />
            </div>

            <div className="title">
              <label htmlFor="github">{navigator.language === "cs" || "cs-CZ" ? "Odkaz na Github" : "Github link"}</label>
              <input required placeholder={navigator.language === "cs" || navigator.language === "cs-CZ" ? "Odkaz na Github repo" : "Github repo URL"} type="url" id="github" onChange={handleGithubLinkChange} value={githubLink} />
            </div>

            <div className="title">
              <label htmlFor="url">{navigator.language === "cs" || navigator.language === "cs-CZ" ? "Odkaz na web" : "Deployment link"}</label>
              <input placeholder={navigator.language === "cs" || navigator.language === "cs-CZ" ? "Odkaz na web" : "Deployment link"} type="url" id="url" onChange={handleUrlChange} value={url} />
            </div>
          </div>

          <div className="text-title">
            <label htmlFor="CZText">{navigator.language === "cs" || navigator.language === "cs-CZ" ? "Text (CZ)" : "Text (CZ)"}</label>
            <textarea placeholder={navigator.language === "cs" || navigator.language === "cs-CZ" ? "Text (CZ)" : "Text (CZ)"} required id="CZText" onChange={handleCZTextChange} value={CZText} ></textarea>
          </div>

          <div className="text-title">
            <label htmlFor="ENText">{navigator.language === "cs" || navigator.language === "cs-CZ" ? "Text (EN)" : "Text (EN)"}</label>
            <textarea placeholder={navigator.language === "cs" || navigator.language === "cs-CZ" ? "Text (EN)" : "Text (EN)"} required id="ENText" onChange={handleENTextChange} value={ENText} ></textarea>
          </div>

          <label htmlFor="tags">{navigator.language === "cs" || navigator.language === "cs-CZ" ? "Tagy" : "Tags"}</label>
          <input placeholder={navigator.language === "cs" || navigator.language === "cs-CZ" ? "Tagy" : "Tags"} required type="text" id="tags" onChange={handleTagsChange} value={tags} />

          <div className="submit-wrp">
            <button onClick={handleSubmit} id="submit">{navigator.language === "cs" || navigator.language === "cs-CZ" ? "Odeslat" : "Submit"}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default New