// CSS
import "./certifications.css";

// ICONS
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'; // Importando os ícones do React-icons

// Timeline
import { TimelineElements } from "../../components/TimelineElements/TimelineElements";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Certifications = () => {
    let workIconStyles = { background: "rgba(17, 117, 104)" };
    let graduationIconStyles = { background: "rgb(191, 103, 103)" };

    return (
    <section id="certifications">
        <div className="content">
        <h2>Education & Experience</h2>
        <h4>Timeline</h4>
        <VerticalTimeline>
            {TimelineElements.map((element) => {
            let isWorkIcon = element.icon === "work";
            let showButton = 
                element.buttonText !== undefined &&
                element.buttonText !== null && 
                element.buttonText !== ""; 

            return (
                <VerticalTimelineElement
                key={element.id}
                date={element.date}
                dateClassName="date"
                iconStyle={element.icon === "work" ? workIconStyles : graduationIconStyles }
                // icon={<IconComponent />}
                icon={isWorkIcon ? <FaBriefcase /> : <FaGraduationCap />}
                >
                    <h3 className="vertical-timeline-element-title">{element.title}</h3>
                    <h5 className="vertical-timeline-element-subtitle">{element.location}</h5>
                    <p id="description">{element.description}</p>
                    {showButton && (<a className={`button ${isWorkIcon ? "workButton" : "graduationButton"}`} href="/">{element.buttonText}</a>)}
                </ VerticalTimelineElement >
            )

            })}
            
        </VerticalTimeline>
        </div>
    </section>
    )
}

export default Certifications;