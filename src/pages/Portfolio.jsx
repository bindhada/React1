import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

export default function Portfolio() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [search, setSearch] = useState("");

    const projects = [
        {
            name: "First webpage",
            repo: "https://github.com/bindhada/webpage1.git",
            techStack: ['HTML'],
            writeup: "Creating a simple webpage using HTML to write a headline and paragraph and also upload images.",
            learned: "First time creating a webpage with HTML and get into the basics of web development.",
            role: "Developer",
            challenges: "To understand the basics of HTML and web development and understanding how GitHub works.",
            image : "../../img.png"
        },
        {
            name: "Second webpage",
            repo: "https://github.com/bindhada/Lesson07.git",
            techStack: ['HTML', 'CSS', 'FIGMA'],
            writeup: "creating a webpage from a figma file. The figma file is webdesigned page. to make into a webpage by coding",
            learned: "Learning how to use figma. Coding from a figma file to html and css.",
            role: "Developer",
            challenges: "Understanding the function of figma and coding it with html and css",
            image : "../../img_1.png"
        },
        {
            name: "Introduction to JS",
            repo: "https://github.com/bindhada/JS01.git",
            techStack: ['JAVASCRIPT'],
            writeup: "Using JavaScript to add functionality to your website.",
            learned: "Learning the language of vanilla JavaScript and its function.",
            role: "Developer",
            challenges: "To code with JavaScript together with HTML and CSS. Using new variables and Data " +
                "Type and also simple calculations such as addition, subtraction and multiplication.",
            image : "../../img_2.png"
        }
    ];

    // 🔥 FILTER LOGIC
    const filteredProjects = projects.filter((project) =>
        project.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="page">
            <h1>Portfolio</h1>

            {/* 🔍 SEARCH BAR */}
            <input
                type="text"
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ padding: "10px", marginBottom: "20px", width: "100%" }}
            />

            <div className="projectGrid">
                {filteredProjects.map((p, i) => (
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