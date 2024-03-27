import "./home.css";
import Isa from "../../img/isabela.png";
import Cv from "./CV/cv";

const Home = () => {
    return (
        <section id="home">
            <div className="content">
                <div className="greeting">
                    <div className="hello">
                        <h1>Hello!</h1>
                    </div>
                    <h2>I'm Isabela, <br />
                    Front-end <span className="profission">Developer</span>!</h2>
                </div>
                
                <div className="photo-bg">
                    <img src={Isa} alt="Isabela's photo" className="isaphoto"/>
                    <div className="me"></div>
                </div>
                <Cv />
            </div>
        </section>
    )
}

export default Home;