import { supabase } from "../supabaseClient"
import { ChangeEvent, useState } from "react";
import { useEffect } from "react";
import BlurryBackground from "./BlurryBackground";

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
      <div className="login-form" id="form">
        <h3>{navigator.language === "cs-CZ" || navigator.language === "cs" ? "Přihlásit se" : "Login"}</h3>
        <input type="email" id="email" placeholder="Email" onChange={handleEmailChange} value={emailText} />
        <input type="password" id="password" placeholder={navigator.language === "cs" || navigator.language === "cs-CZ" ? "Heslo" : "Password"} onChange={handlePwdChange} value={pwdText} />
        <div className="form-btn-border">
          <button onClick={() => { signInWithEmail() }} id="submit">{navigator.language === "cs-CZ" || navigator.language === "cs" ? "Přihlásit" : "Login"}</button>
        </div>
      </div>
    </header>
  )
}

export default Login