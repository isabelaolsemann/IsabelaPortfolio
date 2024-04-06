// Icons
import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaFigma, FaBootstrap } from "react-icons/fa6";

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.image} alt="card image" />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <div className="icons-dev">
                <i>
                    {/* Mapeamento do array icon */}
                    {props.icon.map((item, index) => {
                        // Switch para renderizar os ícones correspondentes
                        switch (item) {
                            case "html":
                                return <FaHtml5 key={index} className="html icon-project"/>;
                            case "css":
                                return <FaCss3Alt key={index} className="css icon-project"/>;
                            case "react":
                                return <FaReact key={index} className="react icon-project"/>;
                            case "js":
                                return <IoLogoJavascript className="js icon-project"/>
                            case "figma":
                                return <FaFigma className="figma icon-project"/>
                            case "bootstrap":
                                return <FaBootstrap className="bootstrap icon-project" />
                            default:
                                return null;
                        }
                    })}
                </i>
            </div>
            <div className="links-card">
                {/* Links para deploy e código */}
                <a href={props.deploy} target="_blank" rel="noopener noreferrer" className="deploy">Deploy</a>
                <a href={props.code} target="_blank" rel="noopener noreferrer" className="deploy">Code</a>
            </div>
        </div>
    );
};

export default Card;