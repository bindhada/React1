export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>{project.name}</h2>

        <div className="images">
            <img key={'p_img'} src={project.image} />
        </div>

        <p><strong>Description:</strong> {project.writeup}</p>

        <p><strong>Tech Stack:</strong> {project.techStack.join(", ")}</p>
        <p><strong>Role:</strong> {project.role}</p>
        <p><strong>Challenges:</strong> {project.challenges}</p>
        <p><strong>What I Learned:</strong> {project.learned}</p>

        <a href={project.repo} target="_blank">Repo Link</a>
        <br/>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
