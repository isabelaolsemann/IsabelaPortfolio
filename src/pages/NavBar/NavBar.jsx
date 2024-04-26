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
            <nav className="navbar">
                <div className="desktop-menu">
                    <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={-64} duration={500} className="desktopMenuListItem">Sobre</Link>
                    <Link activeClass="active" to="certifications" spy={true} smooth={true} offset={-60} duration={500} className="desktopMenuListItem">Formação</Link>
                    <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-55} duration={500} className="desktopMenuListItem">Projetos</Link>
                    <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-55} duration={500} className="desktopMenuListItem">Contato</Link>
                    {/* <i className="i-language i-web"> <MdLanguage /></i> */}
                </div>

                <i className="mobMenu" onClick={() => setMenuActive(!menuActive)}><HiOutlineMenuAlt3 /></i>
                <div className="mobile-menu" style={{display: menuActive? "flex":"none"}}>
                    <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500} className="list-item" onClick={() => setMenuActive(false)}>Home</Link>
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={-55} duration={500} className="list-item" onClick={() => setMenuActive(false)}>Sobre</Link>
                    <Link activeClass="active" to="certifications" spy={true} smooth={true} offset={-55} duration={500} className="list-item" onClick={() => setMenuActive(false)}>Formação</Link>
                    <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-55} duration={500} className="list-item" onClick={() => setMenuActive(false)}>Projetos</Link>
                    <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-55} duration={500} className="list-item" onClick={() => setMenuActive(false)}>Contato</Link>
                    {/* <i className="i-language" onClick={() => setMenuActive(!menuActive)}><MdLanguage /> En</i> */}
                </div>
            </nav>
        </header>
    )
}

export default NavBar;
