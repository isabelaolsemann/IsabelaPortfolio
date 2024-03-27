import "./cv.css";
import CV from "../../../assets/bio-ireland.pdf";

const Cv = () => {
    return (
        <div id="cv" className="cv-content">
            <a href={CV} download className="btn-cv">Download CV</a>
            <a href="#contact" className="btn-contact">Hire me</a>
        </div>
    )
}

export default Cv;