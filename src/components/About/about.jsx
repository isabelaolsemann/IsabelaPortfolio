import Skills from "./Skills/skills";
import Class from "../../img/class.jpg"
import "./about.css";

const About = () => {
    return (
        <section id="about">
            <div className="about-content">
                <div className="bg">
                    <div className="my-skills">
                        <h4>My skills</h4>
                        <div className="skills">
                            <div>
                                <button className="btn-hard-skills active" >Hard-skills</button>
                            </div>
                            <div>
                                <p>&</p>
                            </div>
                            <div>
                                <button className="btn-soft-skills">Soft skills</button>
                            </div>

                        </div>
                        <Skills />
                    </div>
                    <div className="resume">
                        <div>
                            <img src={Class} alt="my students" className="class"/>
                        </div>
                        <div>
                            <h4>What I achieve</h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus accusamus quia cupiditate, facere a illo molestias, iure commodi obcaecati aliquid minus tempora excepturi quos. Numquam iure atque odit quis aliquam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, corrupti ab facere omnis rem aliquid hic sunt, quasi laborum vero dolore ratione id voluptate quidem blanditiis excepturi. Quisquam, esse rerum?</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About;