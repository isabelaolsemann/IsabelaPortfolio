// css
import "./skills.css";

// Icons 
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub, FaChalkboardTeacher} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaFigma, FaBootstrap } from "react-icons/fa6";
import { TfiWrite } from "react-icons/tfi";


const HardSkills = () => {
    return (
        <div className="skills-content">
            <div className="hard-skills">
                <div className="skill">
                    <FaHtml5 className="html icon-dev"/>
                    <p>HTML</p>
                </div>
                <div className="skill">
                    <FaCss3Alt className="css icon-dev"/>
                    <p>CSS</p>
                </div>
                <div className="skill">
                    <IoLogoJavascript className="js icon-dev"/>
                    <p>JavaScript</p>
                </div>
                <div className="skill">
                    <FaReact className="react icon-dev" />
                    <p>React</p>
                </div>
                <div className="skill">
                    <FaFigma className="figma icon-dev" />
                    <p>Figma</p>
                </div>
                <div className="skill">
                    <FaBootstrap className="bootstrap icon-dev" />
                    <p>Bootstrap</p>
                </div>
                <div className="skill">
                    <FaGitAlt className="git icon-dev" />
                    <p>Git</p>
                </div>
                <div className="skill">
                    <FaGithub className="github icon-dev" />
                    <p>Github</p>
                </div>
                <div className="skill">
                    <TfiWrite className="writing icon-dev" />
                    <p>Writings</p>
                </div>
                <div className="skill">
                    <FaChalkboardTeacher className="teaching icon-dev" />
                    <p>Teaching</p>
                </div>
            </div>
        </div>
    )
}

export default HardSkills;