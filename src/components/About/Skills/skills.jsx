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
                    <FaHtml5 />
                    <p>HTML</p>
                </div>
                <div className="skill">
                    <FaCss3Alt />
                    <p>CSS</p>
                </div>
                <div className="skill">
                    <IoLogoJavascript />
                    <p>JavaScript</p>
                </div>
                <div className="skill">
                    <FaReact />
                    <p>React</p>
                </div>
                <div className="skill">
                    <FaFigma />
                    <p>Figma</p>
                </div>
                <div className="skill">
                    <FaBootstrap />
                    <p>Bootstrap</p>
                </div>
                <div className="skill">
                    <FaGitAlt />
                    <p>Git</p>
                </div>
                <div className="skill">
                    <FaGithub />
                    <p>Github</p>
                </div>
                <div className="skill">
                    <TfiWrite />
                    <p>Reacher/Writings</p>
                </div>
                <div className="skill">
                    <FaChalkboardTeacher />
                    <p>Teach</p>
                </div>
        </div>

            <div className="soft-skills">

            </div>
    </div>
    )
}

export default Skills;