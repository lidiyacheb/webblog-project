import {Routes, Route} from "react-router-dom";
import './App.css'
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

function App() {

  return (
      <>
          <Routes>

              <Route path="/"
                     element={
                         <>
                             <Header/>
                             <Home/>
                         </>
                     }
              />
              <Route path="/about"
                     element={
                         <>
                             <Header/>
                             <About/>
                         </>
                     }
              />
              <Route path="/contact"
                     element={
                         <>
                             <Header/>
                             <Contact/>
                         </>
                     }
              />
              <Route path="/login"
                     element={
                         <>
                             <Header/>
                             <Login/>
                         </>
                     }
              />
              <Route path="/register"
                     element={
                         <>
                             <Header/>
                             <Register/>
                         </>
                     }
              />


          </Routes>
    </>
  )
}

export default App
