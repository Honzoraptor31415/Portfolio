import { useEffect } from "react"

function Admin() {
  useEffect(() => {
    if (navigator.language === "cs" || navigator.language === "cs-CZ") {
      document.title = "Administrace"
    } else {
      document.title = "Admin panel"
    }
  }, [])

  // function deletePost(el: string) {
  //   console.log(el)
  // }

  return (
    <>
      <header className="error admin">
        <h2>{navigator.language === "cs" || navigator.language === "cs-CZ" ? "Stránka se dodělává" : "Dez page is currentely being made"}</h2>
      </header>
      {/* <main className="admin">
        <div className="admin-post-wrp">
          <div className="project">
            <div className="project-side">
              <a href="#">
                <img src={value.img} className="rounded" /> 
              </a>
            </div>
            <div className="project-side">
              <div className="project-top">
                <input type="text" value="Název. mmmhm" className="admin-text admin-heading" />
                <input className="admin-date admin-text" type="text" value={"06.09. 2420"} />
              </div>
              <textarea className="admin-text admin-textarea" defaultValue={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae optio odio molestias voluptates quod sunt neque inventore dolor. Provident nostrum incidunt recusandae tempore mollitia quasi eius itaque doloremque qui officia.Ducimus voluptatibus ut, ipsam odit exercitationem animi dolore consequuntur, numquam delectus laudantium provident debitis harum, sapiente iste! Explicabo itaque sequi corrupti qui cupiditate placeat odit perferendis, maiores nostrum magnam repellat."}></textarea>
              <div className="project-links">
                <a href="#">
                  <img src="/github-icon.svg" />
                </a>
                <a href="#">
                  <img src="/link-away.svg" />
                </a>
              </div>
              <div className="tags-wrp">
                <p>{navigator.language === "cs-CZ" || navigator.language === "cs" ? "Tagy:" : "Tags:"}</p>
                <div className="tags">
                  <p className="tag react-tag" >react</p>
                  <p className="tag supabase-tag">supabase</p>
                  <p className="tag javascript-tag">javascript</p>
                </div>
              </div>
            </div>
          </div>
          <div className="delete-btn-wrp">
            <button onClick={() => { deletePost("kasdjf") }} className="delete-btn">{navigator.language === "cs" || navigator.language === "cs-CZ" ? "Odstranit" : "Delete"}</button>
          </div>
        </div>
      </main > */}
    </>
  )
}

export default Admin