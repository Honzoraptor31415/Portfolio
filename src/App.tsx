import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/pages/Home"
import Projects from "./components/pages/Projects"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Error from "./components/pages/Error"
import Login from "./components/pages/Login"
import Admin from "./components/pages/Admin"
import New from "./components/pages/New"

function App() {
  const navLocations = ["", "projects", "admin"]
  const pathname = location.pathname.replaceAll("/", "")

  onload = () => {
    console.log(`%c


                                                                                                                            
  88        88                                                                                                            
  88        88                                                                               ,d                           
  88        88                                                                               88                           
  88aaaaaaaa88   adPPYba   8IdPPYb  888888888  ,adPPYba,  8b,dPPYba, ,adPPYYba, 8b,dPPYba, MM88MMM ,adPPYba,  8b,dPPYba,  
  88zzzzzzzz88 a8       8a 88P   8a     a8P   a8       8a 88P     Y8         Y8 88P'    "8a  88   a8"      8a 88P     Y8  
  88        88 8b       d8 88    88   ,d8P    8b       d8 88         ,adPPPPP88 88       d8  88   8b       d8 88          
  88        88  8a     a8  88    88 ,d8"      "8a,   ,a8" 88         88,    ,88 88b,   ,a8"  88,  "8a,   ,a8  88          
  88        88    YbbdP    88    88 888888888   "YbbdP"'  88          "8bbdP"Y8 88 YbbdP"'    Y888   YbbdP    88          
                                                                                88
                                                                                88                                        

`, "-webkit-background-clip:text;background-image:-webkit-linear-gradient(40deg,#5C6AFF, #00FFFF);-webkit-text-fill-color:transparent;font-weight:000")
  }
  return (
    <>
      {navLocations.includes(pathname) && (<Nav />)}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/new" element={<New />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      {navLocations.includes(pathname) && (<Footer />)}
    </>
  )
}

export default App