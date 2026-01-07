import { useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

// importa a biblioteca e-mail JS

// Icons
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";



const Contact = () => {
    return (
        <section id="contact">
            <div className="contact-info-social-media">
                <h2>Contate-me</h2>
                <p>Para obter mais informações sobre mim ou sobre meus projetos, <br/> sinta-se à vontade para entrar em contato.</p>
                <div>
                    <a href="https://wa.me/5541996505356" target="_blank"><FaWhatsapp /></a>
                    <a href="https://www.linkedin.com/in/isabelaolsemann/" target="_blank"><CiLinkedin /></a>
                    <a href="https://github.com/isabelaolsemann" target="_blank"><FaGithub /></a>
                </div>
                <h3>Isabela Olsemann</h3>
                <h4>Desenvolvedora Web</h4>
            </div>
        </section>
    )
}

export default Contact;