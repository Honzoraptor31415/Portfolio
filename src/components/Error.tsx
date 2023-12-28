import { useEffect } from "react"

function Error() {
  useEffect(() => { document.title = "Error" }, [])

  return (
    <>
      <header className="error">
        <div className="error-wrp">
          <h1>This page doesn't exist</h1>
          <p>¯\_(ツ)_/¯</p>
          <a href="/">Homepage</a>
        </div>
      </header>
    </>
  )
}

export default Error