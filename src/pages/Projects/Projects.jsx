import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./Projects.css";

import { useContext } from "react";
import AppContext from "../../context/AppContext";

export default function Projects() {
  const projects = useContext(AppContext);

  return (
    <main className="container main-projects">
      <h1 className="title-projects">projetos</h1>
      <section className="projects-container">
        {projects.projects.map((project, index) => (
          <ProjectCard key={index} data={project} />
        ))}
      </section>
    </main>
  );
}
