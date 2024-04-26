import "./projects.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../../components/Card/Card.jsx";
import { cardData, responsive } from "../../components/Card/data.jsx";

export default function Projects() {
    // Mapeamento do array cardData
    const cards = cardData.map((item) => (
        <Card
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            icon={item.icon}
            deploy={item.deploy}
            code={item.code}
        />
    ));
    
    return (
        <section id="projects">
            <div className="content">
                <h2>Websites desenvolvidos</h2>
                {/* Renderização do Carousel */}
                <Carousel showDots={true} responsive={responsive} className="carousel">
                    {cards}
                </Carousel>
            </div>
        </section>
    );
};