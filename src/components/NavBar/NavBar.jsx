import "./NavBar.css";
import logo from "../../img/logo.png"
import { MdLanguage } from "react-icons/md";

import { Link } from "react-scroll";


const NavBar = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <div className="desktop-menu">
                    <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                    <Link activeClass="active" to="about" spy={true} smooth={true} duration={500} className="desktopMenuListItem">About</Link>
                    <Link activeClass="active" to="certification" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Certification</Link>
                </div>

                <img src={logo} alt="logo" className="logo" />

                <div className="desktop-menu">
                    <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Projects</Link>
                    <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Contact</Link>
                </div>

                <button className="btn-language">
                    <MdLanguage />
                </button>
            </nav>
        </header>
    )
}

export default NavBar;
