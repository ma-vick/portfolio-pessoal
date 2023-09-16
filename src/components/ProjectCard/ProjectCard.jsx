import "./ProjectCard.css";

export default function ProjectCard({ data }) {
  return (
    <div className="card">
      <img
        src={data.imgProject}
        alt={data.nameProject}
        className="img-project-card"
      />
      <h2>{data.nameProject}</h2>
    </div>
  );
}
