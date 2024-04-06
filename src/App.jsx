// Components
import NavBar from "./pages/NavBar/NavBar";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Certifications from "./pages/Certifications/certifications";
import Projects from "./pages/Projects/projects";
import Contact from "./pages/Contact/contact";
import Footer from "./pages/Footer/footer";

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
      <Footer></Footer>
    </>
  )
}

export default App;
