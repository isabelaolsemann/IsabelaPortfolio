import "./home.css";
import Isa from "../../assets/img/isabela.png";
import Cv from "../../components/CV/cv";

const Home = () => {
    return (
        <section id="home">
            <div className="home-content">
                <div className="greeting">
                    <h1>Olá!</h1>
                    <h2>Meu nome é Isabela, <br />
                    sou <span className="profession">desenvolvedora</span> front-end!</h2>
                </div>
                
                <div className="photo-bg">
                    <img src={Isa} alt="Foto de Isabela" className="isaphoto"/>
                    <div className="me"></div>
                    <Cv />
                </div>
            </div>
        </section>
    )
}

export default Home;