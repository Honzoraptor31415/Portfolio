import { useEffect } from "react"

function Admin() {
  useEffect(() => {
    if (navigator.language === "cs" || navigator.language === "cs-CZ") {
      document.title = "Administrace"
    } else {
      document.title = "Admin panel"
    }
  }, [])

  return (
    <>
      <header className="admin">
        <h3 style={{ textAlign: "center" }}>{navigator.language === "cs" || navigator.language === "cs-CZ" ? "Tahle stránka se teprve dodělává" : "This page is currentely being made."}</h3>
      </header>
    </>
  )
}

export default Admin