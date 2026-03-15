import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: "First webpage",
      repo: "https://github.com/bindhada/webpage1.git",
      techStack: ['HTML'],
      writeup: "short write",
      desc: "Creating a simple webpage using HTML to write a headline and paragraph and also upload images.",
      learned: "First time creating a webpage with HTML and get into the basics of web development.",
      role: "Full Stack Developer",
      challenges: "To understand the basics of HTML and web development and understanding how GitHub works."
    }
  ];

  return (
    <div className="page">
      <h1>Portfolio</h1>

      <div className="projectGrid">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} onOpen={setSelectedProject} />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
