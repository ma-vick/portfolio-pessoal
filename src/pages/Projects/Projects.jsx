import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./Projects.css";

import pomodoro from '../../assets/imgs/pomodoro.svg';
import movick from '../../assets/imgs/movick.svg';
import india from '../../assets/imgs/india.svg';
import gatinhos from '../../assets/imgs/gatinhos.svg';
import carrinho from '../../assets/imgs/carrinho.svg';

export default function Projects() {
  const projects = [
    {
      id: 1,
      nameProject: "Pomodoro Timer",
      imgProject: pomodoro,
      link: 'https://ma-vick.github.io/pomodoro-timer/',
      tecnologias: ['HTML', 'CSS', 'JS'],
    },
    {
      id: 2,
      nameProject: "Movick",
      imgProject: movick,
      link: 'https://movick.netlify.app/',
      tecnologias:['ReactJS'],
    },
    {
      id: 3,
      nameProject: "India - CEI FAIR",
      imgProject: india,
      link: 'https://india-ceifair.netlify.app/',
      tecnologias: ['ReactJS'],
    },
    {
      id: 4,
      nameProject: "Gatinhos coloridos",
      imgProject: gatinhos,
      link: 'https://ma-vick.github.io/cats-change-color/',
      tecnologias: ['HTML', 'CSS', 'JS'],
    },
    {
      id: 5,
      nameProject: "Carrinho de compras",
      imgProject: carrinho,
      link: 'https://shopping-cart-mavick.netlify.app/',
      tecnologias: ['ReactJS'],
    },
    {
      id: 6,
      nameProject: '',
      imgProject: '',
      link: '',
      tecnologias: [],
    },
  ];

  return (
    <main className="container main-projects">
      <h1 className="title-projects">projetos</h1>
      <section className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard key={index} data={project} />
        ))}
      </section>
    </main>
  );
}
