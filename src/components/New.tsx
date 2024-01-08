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
  const [download, setDownload] = useState("")
  const [CZText, setCZText] = useState("")
  const [ENText, setENText] = useState("")
  const [tags, setTags] = useState("")

  const handleCZTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCZTitle(e.target.value)
  };

  const handleENTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setENTitle(e.target.value)
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value)
  }; const handleImgUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    setImgUrl(e.target.value)
  }; const handleGithubLinkChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGithubLink(e.target.value);
  }; const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value)
  }; const handleDownloadChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDownload(e.target.value);
  };

  const handleCZTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCZText(e.target.value)
  };

  const handleENTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setENText(e.target.value)
  };
  const handleTagsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTags(e.target.value)
  }

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
          download: download ? download : "no xD",
          text: `{"cz":"${CZText}","en":"${ENText}"}`,
          tags: tags
        }).select("*").single()
      console.log(res)
    }
  }

  return (
    <>
      <header className="new">
        <div style={{ position: "fixed", left: "50%", top: "50%", transform: "translate(-50%, -50%)", zIndex: "10" }}>
          <BlurryBackground />
        </div>
        <div className="post-form">
          {/* <h2 style={{ textAlign: "center" }}>{navigator.language === "cs" || navigator.language === "cs-CZ" ? "Tahle stránka se teprve dodělává, vypadni" : "This page is currentely being made, pls fck off"}</h2> */}
          <h3>{navigator.language === "cs" || navigator.language === "cs-CZ" ? "Nový projekt" : "New project"}</h3>
          <div className="titles">
            <div className="title">
              <label htmlFor="title">Titulek</label>
              <input required type="text" placeholder="Title" id="title" onChange={handleCZTitleChange} value={CZtitle} />
            </div>
            <div className="title">
              <label htmlFor="title">Title</label>
              <input required type="text" placeholder="Title" id="title" onChange={handleENTitleChange} value={ENTitle} />
            </div>
          </div>

          <div className="title">
            <label htmlFor="date">Date</label>
            <input type="text" id="date" placeholder="Date" onChange={handleDateChange} value={date} />
          </div>

          <div className="links">
            <div className="title">
              <label htmlFor="img-url">Image URL</label>
              <input placeholder="Image URL" required type="url" id="img-url" onChange={handleImgUrlChange} value={imgUrl} />
            </div>

            <div className="title">
              <label htmlFor="github">Github link</label>
              <input required placeholder="Github repo URL" type="url" id="github" onChange={handleGithubLinkChange} value={githubLink} />
            </div>

            <div className="title">
              <label htmlFor="url">Deployment link</label>
              <input placeholder="Deployment link" type="url" id="url" onChange={handleUrlChange} value={url} />
            </div>

            <div className="title">
              <label htmlFor="download">Download link</label>
              <input placeholder="Download link" type="text" id="download" onChange={handleDownloadChange} value={download} />
            </div>
          </div>

          <div className="text-title">
            <label htmlFor="text">Text (CZ)</label>
            <textarea placeholder="CZ text" required id="text" onChange={handleCZTextChange} value={CZText} ></textarea>
          </div>

          <div className="text-title">
            <label htmlFor="text">Text (EN)</label>
            <textarea placeholder="EN Text" required id="text" onChange={handleENTextChange} value={ENText} ></textarea>
          </div>

          <label htmlFor="tags">Tags</label>
          <input placeholder="Tags" required type="text" id="tags" onChange={handleTagsChange} value={tags} />

          <div className="submit-wrp">
            <button onClick={handleSubmit} id="submit">Submit</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default New