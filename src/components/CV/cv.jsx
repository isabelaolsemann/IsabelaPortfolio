import "./cv.css";
import CV from "../../assets/Isabela - Desenvolvedora.pdf";
import { FaDownload } from "react-icons/fa6";

const Cv = () => {
    return (
        <div id="cv" className="cv-content">
            <a href={CV} download className="btn-cv">
                <span><FaDownload /></span>
                <span>CV</span>
            </a>
            <a href="#contact" className="btn-contact">Contato</a>
        </div>
    )
}

export default Cv;