import { useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

// importa a biblioteca e-mail JS

// Icons
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";



const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    function sendEmail(e) {
        e.preventDefault();

        if(name === "" || email === "" || subject === "" || message === ""){
            return;
        }

        const templateParams = {
            from_name: name,
            subject: subject,
            message: message,
            email: email,
        }
        
        emailjs.send("service_3ogh7qs", "template_7s8ol6d", templateParams, "LVstvVqAGwKjFrnfu")
        .then((response) => {
                console.log("Email enviado", response.status, response.text)
                setName("");
                setEmail("");
                setMessage("");
                setSubject("");
    
            }), (err) => {
            console.log("Erro: ", err);
        }
    }

    return (
        <section id="contact">
            <div className="content">
                <div className="container-contact">
                    <div className="contact-form">
                        <h2>Contate-me</h2>
                        <p>Para obter mais informações sobre mim ou meus projetos, por favor, sinta-se à vontade para entrar em contato!</p>
                        <form className="form">
                            <div className="input">
                                <input 
                                    type="text"
                                    className="name"
                                    placeholder="Nome"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    required
                                />
                                
                                <input 
                                    type="email"
                                    className="email"
                                    placeholder="E-mail"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    required
                                />
                            </div>

                            <input 
                                type="text"
                                className="subject"
                                placeholder="Assunto"
                                onChange={(e) => setSubject(e.target.value)}
                                value={subject}
                            />

                            <textarea 
                                name="message" 
                                id="message" 
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                                required
                            >Mensagem</textarea>

                            <button className="btn-form-contact" onClick={sendEmail}>Enviar</button>
                        </form>
                    </div>

                    <div className="contact-info-social-media">
                        <div>
                            <a href="https://wa.me/5541996505356" target="_blank"><FaWhatsapp /></a>
                            <a href="https://www.linkedin.com/in/isabelaolsemann/" target="_blank"><CiLinkedin /></a>
                            <a href="https://github.com/isabelaolsemann" target="_blank"><FaGithub /></a>
                        </div>
                        <h3>Isabela Olsemann</h3>
                        <h4>Front-end & UI Designer</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;