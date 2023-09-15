import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./Projects.css";

export default function Projects() {
  const projects = {
    nameProject: "Pomodoro Timer",
    imgProject: "../../assets/imgs/pomodoro.svg",
  };

  return (
    <main className="container">
      <h1 className="title-projects">projetos</h1>
      <section className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.nameProject}
            img={project.imgProject}
          />
        ))}
      </section>
    </main>
  );
}
