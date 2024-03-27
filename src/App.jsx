// Components
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Certifications from "./components/Certifications/certifications";
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/contact";

// CSS
import "./App.css";

function App() {

  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Certifications />
      <Projects />
      <Contact />
    </>
  )
}

export default App;
