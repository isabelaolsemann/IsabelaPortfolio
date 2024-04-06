import { useState } from "react";
import "./contact.css";

// importa a biblioteca e-mail JS

// Icons
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";



const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    function sendEmail(e) {
        e.preventDefault();

        if(name === "" || email ==="" || subject ==="" || message === ""){
            return;
        }

        const templateParams = {
            from_name: name,
            from_message: message,
            email: email
        }
        
        // emailjs.send("site-emailserverdosite", "site-templateID", "site-APIkey", templateParams - https://www.emailjs.com/)
        // .then(response) => {
        //     console.log("Email enviado", response.status, response.text)
        //     setName("");
        //     setEmail("");
        //     setMessage("");
        //     setSubject("");

        // }, (err) => {
        //     console.log("Erro: ", err);
        // }
    }

    return (
        <section id="contact">
            <div className="content">
                <div className="container-contact">
                    <div className="contact-form">
                        <h2>Contact me</h2>
                        <p>For more information about me or my projects, feel free to get in touch - I'd love to hear from you!</p>
                        <form className="form">
                            <div className="input">
                                <input 
                                    type="text"
                                    className="name"
                                    placeholder="Name"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    required
                                />
                                
                                <input 
                                    type="email"
                                    className="email"
                                    placeholder="Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    required
                                />
                            </div>

                            <input 
                                type="text"
                                className="subject"
                                placeholder="Subject"
                                onChange={(e) => setSubject(e.target.value)}
                                value={subject}
                            />

                            <textarea 
                                name="message" 
                                id="message" 
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                                required
                            >Message</textarea>

                            <button className="btn-form-contact">Send</button>
                        </form>
                    </div>

                    <div className="contact-info-social-media">
                        <h2>Let's talk</h2>
                        <div>
                            <a href="https://wa.me/5541996505356" target="_blank"><FaWhatsapp /></a>
                            <a href="https://www.linkedin.com/in/isabelaolsemann/" target="_blank"><CiLinkedin /></a>
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