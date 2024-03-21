import { supabase } from "../../supabaseClient"
import { ChangeEvent, useState } from "react";
import { useEffect } from "react";
import BlurryBackground from "../BlurryBackground";

function Login() {
  useEffect(() => {
    if (navigator.language === "cs" || navigator.language === "cs-CZ") {
      document.title = "Přihlášení"
    } else {
      document.title = "Login"
    }
  }, [])
  const [emailText, setEmailText] = useState("")
  const [pwdText, setPwdText] = useState("")
  const [err, setErr] = useState({ cz: "", en: "" })

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailText(e.target.value);
  }

  const handlePwdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPwdText(e.target.value);
  }

  async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: emailText,
      password: pwdText
    })

    console.log(data, error)

    if (!error) {
      location.href = "/new"
    } else {
      setErrElem("Údaje nesedí", "User cridentials don't match")
    }
  }

  function setErrElem(cz: string, en: string) {
    setEmailText("")
    setPwdText("")
    setErr({ cz: cz, en: en })
    setTimeout(() => {
      setErr({ cz: "", en: "" })
    }, 2000)
  }

  async function getUser() {
    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      console.log(user)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <header className="login-header">
      <BlurryBackground />
      <form onSubmit={(e) => {
        e.preventDefault()
        signInWithEmail()
      }} className="login-form" id="form">
        <h3>{navigator.language === "cs-CZ" || navigator.language === "cs" ? "Přihlásit se" : "Login"}</h3>
        {err.en !== "" &&
          <p className="login-error">{navigator.language === "cs" || navigator.language === "cs-CZ" ? err.cz : err.en}</p>}
        <input required type="email" id="email" placeholder="Email" onChange={handleEmailChange} value={emailText} />
        <input required type="password" id="password" placeholder={navigator.language === "cs" || navigator.language === "cs-CZ" ? "Heslo" : "Password"} onChange={handlePwdChange} value={pwdText} />
        <div className="form-btn-border">
          <input type="submit" id="submit" value={navigator.language === "cs-CZ" || navigator.language === "cs" ? "Přihlásit" : "Login"} />
        </div>
      </form>
    </header>
  )
}

export default Login