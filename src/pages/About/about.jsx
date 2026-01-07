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
                        <h4>Sobre mim</h4>
                        <p>
                            Estudante de Análise e Desenvolvimento de Sistemas em transição de carreira, com background em Ciências. Iniciei minha jornada na tecnologia na Bioinformática, utilizando Python, o que despertou meu interesse pela programação e me levou a desenvolver projetos práticos e atuar como desenvolvedora freelancer na Coraltech, criando soluções digitais com HTML, CSS, JavaScript, WordPress/WooCommerce e Figma. Atualmente curso TADS no IFPR e busco oportunidades como desenvolvedora front-end (CLT, PJ ou freelancer), colaborando em equipes que valorizem aprendizado contínuo, organização e design centrado no usuário.
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