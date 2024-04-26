// css
import "./skills.css";

// Icons 
import { FaComment, FaHandHoldingHeart, FaLightbulb, FaExchangeAlt, FaHourglassHalf, FaCogs, FaUsers, FaShieldAlt } from "react-icons/fa";


const SoftSkills = () => {
    return (
        <div className="skills-content">
            <div className="soft-skills">
                <div className="skill">
                    <FaComment className="communication soft-skill-icon"/>
                    <p>Comunicação</p>
                </div>
                <div className="skill">
                    <FaHandHoldingHeart className="empathy soft-skill-icon"/>
                    <p>Empatia</p>
                </div>
                <div className="skill">
                    <FaLightbulb className="creativity soft-skill-icon"/>
                    <p>Criatividade</p>
                </div>
                <div className="skill">
                    <FaExchangeAlt className="adaptability soft-skill-icon"/>
                    <p>Adaptability</p>
                </div>
                <div className="skill">
                    <FaHourglassHalf className="patience soft-skill-icon"/>
                    <p>Pontualidade</p>
                </div>
                <div className="skill">
                    <FaCogs className="solving soft-skill-icon"/>
                    <p>Problem Solving</p>
                </div>
                <div className="skill">
                    <FaUsers className="teamwork soft-skill-icon"/>
                    <p>Teamwork</p>
                </div>
                <div className="skill">
                    <FaShieldAlt className="resilience soft-skill-icon"/>
                    <p>Resiliência</p>
                </div>
            </div>
        </div>
    )
}

export default SoftSkills;