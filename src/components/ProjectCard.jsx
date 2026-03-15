export default function ProjectCard({ project, onOpen }) {
  return (
    <div className="projectCard" onClick={() => onOpen(project)}>
      <h3>{project.name}</h3>
      <p>{project.desc}</p>
    </div>
  );
}
