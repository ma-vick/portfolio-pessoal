import { GrPrevious, GrNext } from "react-icons/gr";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

import imgPlaceholder from "../../assets/imgs/em-breve.svg";
import "./Project.css";
import Technology from "../../components/Technology/Technology";

export default function Project() {
  const { projectId } = useParams();
  const projects = useContext(AppContext);

  console.log(projectId, projects.projects);

  return (
    <main className="container container-project">
      {projectId != 1 && (
        <Link
          to={`/project/${Number.parseInt(projectId) - 1}`}
          className="arrow"
        >
          <GrPrevious />
        </Link>
      )}
      <div className="content-project">
        <img
          src={
            projects.projects[projectId - 1].imgProject
              ? projects.projects[projectId - 1].imgProject
              : imgPlaceholder
          }
          alt={projects.projects[projectId - 1].nameProject}
          className="img-project-page"
        />
        <div className="info-project">
          <h1>
            {projects.projects[projectId - 1].nameProject
              ? projects.projects[projectId - 1].nameProject
              : "em breve"}
          </h1>
          <div className="tech-icon-pp">
            {projects.projects[projectId - 1].tecnologias.map((tec) => (
              <Technology name={tec} />
            ))}
          </div>
          <p className="description-project">
            {projects.projects[projectId - 1].description}
          </p>
          <a href={projects.projects[projectId - 1].link} target="_blank">
            <button>acesse o projeto</button>
          </a>
        </div>
      </div>
      {Number.parseInt(projectId) != projects.projects.length - 1 && (
        <Link
          to={`/project/${Number.parseInt(projectId) + 1}`}
          className="arrow"
        >
          <GrNext />
        </Link>
      )}
    </main>
  );
}
