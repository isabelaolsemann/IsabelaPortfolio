import "./NavBar.css";
import logo from "../../assets/img/logo.png"
import { MdLanguage } from "react-icons/md";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from "react-scroll";
import { useState } from "react";


const NavBar = () => {
    const [menuActive, setMenuActive] = useState(false);
    return (
        <header className="header">
            <nav className="navbar-desktop">
                <div className="desktop-menu">
                    <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={-64} duration={500} className="desktopMenuListItem">About</Link>
                    <Link activeClass="active" to="certifications" spy={true} smooth={true} offset={-60} duration={500} className="desktopMenuListItem">Education</Link>
                </div>

                <img src={logo} alt="logo" className="logo" />

                <div className="desktop-menu">
                    <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-55} duration={500} className="desktopMenuListItem">Projects</Link>
                    <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-55} duration={500} className="desktopMenuListItem">Contact</Link>
                    <i className="i-language i-web"> <MdLanguage /></i>
                </div>

                <i className="mobMenu" onClick={() => setMenuActive(!menuActive)}><HiOutlineMenuAlt3 /></i>
                <div className="mobile-menu" style={{display: menuActive? "flex":"none"}}>
                    <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500} className="list-item" onClick={() => setMenuActive(false)}>Home</Link>
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={-55} duration={500} className="list-item" onClick={() => setMenuActive(false)}>About</Link>
                    <Link activeClass="active" to="certifications" spy={true} smooth={true} offset={-55} duration={500} className="list-item" onClick={() => setMenuActive(false)}>Certifications</Link>
                    <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-55} duration={500} className="list-item" onClick={() => setMenuActive(false)}>Projects</Link>
                    <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-55} duration={500} className="list-item" onClick={() => setMenuActive(false)}>Contact</Link>
                    <i className="i-language" onClick={() => setMenuActive(!menuActive)}><MdLanguage /> En</i>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;
