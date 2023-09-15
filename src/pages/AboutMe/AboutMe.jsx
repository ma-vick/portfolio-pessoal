import { Link } from "react-router-dom";
import img from "../../assets/imgs/me.jpg";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <main className="container">
      <div className="img-container">
        <img src={img} alt="Victória Almeida" />
      </div>
      <section className="info">
        <h1 className="name">Victória Almeida</h1>
        <h2 className="position">Frontend Developer</h2>
        <p className="description-me">
          Aos quinze anos me interessei pela programação, me encantei pela
          possibilidade de criação, inovação e de criar ferramentas para
          auxiliar e melhorar a vida das pessoas. Desde então, venho estudando
          da maneira que posso, com vídeos e materiais gratuitos na internet. Em
          junho de 2022 iniciei um curso de desenvolvimento web, me empenhei
          bastante e adquiri conhecimento em algumas linguagens e tecnologias,
          como HTML, CSS, JS (ReactJS), PHP e MySQL. Busco saber sempre mais e
          melhorar meus conhecimentos atuais.
        </p>
        <button className="btn-projects">
          <Link to="projects">veja meus projetos</Link>
        </button>
      </section>
    </main>
  );
}
