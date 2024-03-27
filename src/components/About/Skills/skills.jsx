// Icons 
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub, FaChalkboardTeacher} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaFigma, FaBootstrap } from "react-icons/fa6";
import { TfiWrite } from "react-icons/tfi";

// css
import "./skills.css";

const Skills = () => {
    return (
        <div className="skills-content">
            <div className="hard-skills">
                <div className="skill">
                    <FaHtml5 className="icon"/>
                    <p>HTML</p>
                </div>
                <div className="skill">
                    <FaCss3Alt className="icon"/>
                    <p>CSS</p>
                </div>
                <div className="skill">
                    <IoLogoJavascript className="icon"/>
                    <p>JavaScript</p>
                </div>
                <div className="skill">
                    <FaReact className="icon" />
                    <p>React</p>
                </div>
                <div className="skill">
                    <FaFigma className="icon" />
                    <p>Figma</p>
                </div>
                <div className="skill">
                    <FaBootstrap className="icon" />
                    <p>Bootstrap</p>
                </div>
                <div className="skill">
                    <FaGitAlt className="icon" />
                    <p>Git</p>
                </div>
                <div className="skill">
                    <FaGithub className="icon" />
                    <p>Github</p>
                </div>
                <div className="skill">
                    <TfiWrite className="icon" />
                    <p>Writings</p>
                </div>
                <div className="skill">
                    <FaChalkboardTeacher className="icon" />
                    <p>Teaching</p>
                </div>
        </div>

            <div className="soft-skills">

            </div>
        </div>
    )
}

export default Skills;