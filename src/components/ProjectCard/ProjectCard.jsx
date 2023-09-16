import Technology from "../Technology/Technology";
import "./ProjectCard.css";

import imgPlaceholder from "../../assets/imgs/em-breve.svg";

export default function ProjectCard({ data }) {
  return (
    <div className="card">
      <div className="img-project-card">
        <img
          src={data.imgProject ? data.imgProject : imgPlaceholder}
          alt={data.nameProject}
          className={data.imgProject ? "soon" : ""}
        />
      </div>
      {data.nameProject != '' && (
        <div className="info-project-card">
          <h2 className="name-project-card">{data.nameProject}</h2>
          <span className="tecnologies">
            {data.tecnologias.map((tec) => (
              <Technology name={tec} />
            ))}
          </span>
        </div>
      )}
    </div>
  );
}
