// CSS
import "./footer.css";

// Icons
import { GrLinkedin } from "react-icons/gr";

import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="content">
                <div className="container-footer">
                    <div>
                        <p>&copy; 2024 Isabela Olsemann. All rights reserved.</p>
                    </div>
                    <div className="icons-contact">
                        <a href="https://www.linkedin.com/in/isabelaolsemann/" target="_blank"><GrLinkedin /></a>
                        <a href="https://github.com/isabelaolsemann" target="_blank"><FaGithub /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;