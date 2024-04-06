import React, { useState } from "react";
import HardSkills from "../../components/Skills/HardSkills";
import SoftSkills from "../../components/Skills/SoftSkills";
import Class from "../../assets/img/class.jpg";
import "./about.css";

const About = () => {
    const [activeButton, setActiveButton] = useState("hard");

    return (
        <section id="about">
            <div className="content">
                <div className="resume">
                    <div className="description">
                        <h4>About me</h4>
                        <p>
                        Durante minha graduação em Ciências Biológicas e no Mestrado em Ciências e Tecnologia na UTFPR, tive meu primeiro contato com programação através do curso de 
                        bioinformática. Até então, não havia percebido as possibilidades de uso e de carreira nessa área. Logo, foi durante o meu intercâmbio de língua 
                        inglesa que decidi repensar minha trajetória e fazer a transição para a área de tecnologia, buscando oportunidades alinhadas aos meus interesses. Ao longo dessa 
                        jornada, aprendi conceitos fundamentais para o desenvolvimento front-end e atualmente estou aprofundando meus conhecimentos por meio de trabalhos freelancer, 
                        enquanto também inicio meus estudos em MongoDB e Node.js.
                        </p>
                    </div>
                    <div>
                        <img src={Class} alt="my students" className="class" />
                    </div>
                </div>
                <div className="my-skills">
                    <div className="skills">
                        <div>
                            <button
                            className={activeButton === "hard" ? "active" : ""}
                            onClick={() => setActiveButton("hard")}
                            >
                            Hard-skills
                            </button>
                        </div>
                        <div>
                            <p>&</p>
                        </div>
                        <div>
                            <button
                            className={activeButton === "soft" ? "active" : ""}
                            onClick={() => setActiveButton("soft")}
                            >
                            Soft skills
                            </button>
                        </div>
                        </div>
                        <div className="show-skills">
                        {activeButton === "hard" ? <HardSkills /> : <SoftSkills />}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;