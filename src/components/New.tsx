import { ChangeEvent, useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

function New() {
  useEffect(() => {
    if (navigator.language === "cs" || navigator.language === "cs-CZ") {
      document.title = "Novej projekt"
    } else {
      document.title = "New project"
    }
  }, [])
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  const [imgUrl, setImgUrl] = useState("")
  const [githubLink, setGithubLink] = useState("")
  const [url, setUrl] = useState("")
  const [download, setDownload] = useState("")
  const [text, setText] = useState("")
  const [tags, setTags] = useState("")

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }; const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value)
  }; const handleImgUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    setImgUrl(e.target.value)
  }; const handleGithubLinkChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGithubLink(e.target.value);
  }; const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value)
  }; const handleDownloadChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDownload(e.target.value);
  }; const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }; const handleTagsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTags(e.target.value)
  }

  const handleSubmit = async () => {
    const res = await supabase.from("Projects").insert(
      {
        title: title,
        date: date ? date : `${new Date().getDay()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}`,
        img: imgUrl,
        github: githubLink,
        link: url ? url : "no xD",
        download: download ? download : "no xD",
        text: text,
        tags: tags
      }).select("*").single()
    console.log(res)
  }

  return (
    <>
      <header className="new">

        <div className="post-form">
          <h2 style={{ textAlign: "center" }}>{navigator.language === "cs" || navigator.language === "cs-CZ" ? "Tahle stránka se teprve dodělává, vypadni" : "This page is currentely being made, pls fck off"}</h2>
          <h3>New project</h3>
          <label htmlFor="title">Title</label>
          <input required type="text" placeholder="Title" id="title" onChange={handleTitleChange} value={title} />

          <label htmlFor="date">Date</label>
          <input type="text" id="date" placeholder="Date" onChange={handleDateChange} value={date} />

          <label htmlFor="img-url">Image URL</label>
          <input required type="url" id="img-url" onChange={handleImgUrlChange} value={imgUrl} />

          <label htmlFor="github">Github link</label>
          <input required type="url" id="github" onChange={handleGithubLinkChange} value={githubLink} />

          <label htmlFor="url">Deployment link</label>
          <input type="url" id="url" onChange={handleUrlChange} value={url} />

          <label htmlFor="download">Download link</label>
          <input type="text" id="download" onChange={handleDownloadChange} value={download} />

          <label htmlFor="text">Text</label>
          <textarea required id="text" onChange={handleTextChange} value={text} ></textarea>

          <label htmlFor="tags">Tags</label>
          <input required type="text" id="tags" onChange={handleTagsChange} value={tags} />

          <button onClick={handleSubmit} id="submit">Submit</button>
        </div>
      </header>
    </>
  )
}

export default New