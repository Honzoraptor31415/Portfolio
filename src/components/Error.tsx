import { useEffect } from "react"

function Error() {
  useEffect(() => { document.title = "Error" }, [])

  return (
    <>
      <header className="error">
        <div className="error-wrp">
          <h1>{navigator.language === "cs-CZ" || navigator.language === "cs" ? "Tahle stránka neexistuje" : "This page doesn't exist"}</h1>
          <p>¯\_(ツ)_/¯</p>
          <a href="/">{navigator.language === "cs-CZ" || navigator.language === "cs" ? "Domovská stránka" : "Homepage"}</a>
        </div>
      </header>
    </>
  )
}

export default Error