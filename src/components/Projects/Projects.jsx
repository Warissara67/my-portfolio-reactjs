import { useMemo, useState } from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";

// ✅ import รูปจาก src/assets
import project1 from "../../assets/image/E-commerce.png"; 
import project2 from "../../assets/image/Portfolio_website_shop.png";
import project3 from "../../assets/image/My_Weather_app.png";

const PROJECTS = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A full-featured online store built with React and Node.js",
    image: project1,  // ใช้ตัวแปรที่ import มา
    technologies: ["React", "Vite", "CSS"],
    category: "E-commerce",
    demoUrl: "https://htmlpreview.github.io/?https://github.com/Warissara67/mini-ecommerce-collaboration./blob/main/mini-ecommerce/index.html",
    githubUrl: "https://github.com/Warissara67/mini-ecommerce-collaboration.",
  },
  {
    id: 2,
    title: "Portfolio_website_shop",
    description: "Simple store with cart & checkout.",
    image: project2,
    technologies: ["React", "Node.js", "MongoDB"],
    category: "Portfolio_website_shop",
    demoUrl: "https://warissara67.github.io/portfolio-website/",
    githubUrl: "https://github.com/Warissara67/portfolio-website",
  },
  {
    id: 3,
    title: "My_Weather_app",
    description: "Real-time weather application with location-based forecasts",
    image: project3,
    technologies: ["JavaScript", "Canvas"],
    category: "Weather App",
    demoUrl: "https://warissara67.github.io/my-weather-app/",
    githubUrl: "https://github.com/Warissara67/my-weather-app",
  },
];

function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(PROJECTS.map(p => p.category)))],
    []
  );

  const filtered = useMemo(
    () => (filter === "All" ? PROJECTS : PROJECTS.filter(p => p.category === filter)),
    [filter]
  );

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Here are some of the projects I've worked on recently.</p>

        <div className="filter-buttons">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;