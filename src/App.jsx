import './index.css';
import React from "react";
import data from "./data.json"; // data is an object with a "projects" property
import Project from "./components/Project";

const App = () => {
  const projects = data.projects;

  if (!Array.isArray(projects)) {
    return <p>Error: data.projects is not an array.</p>;
  }

  return (
    <div className="app-container">
      <header className="header">
        <div className="text-content">
          <h1 className="page-title">I am Nathalie de Groot</h1>
          <h2 className="page-subtitle">Front End developer</h2>
        </div>
        <img
          src="./assets/Portrait-Nathalie.png"
          alt="Nathalie de Groot"
          className="portrait"
        />
      </header>
      <div className="skills-container">
        <h3 className="skills-heading">Skills</h3>
        <div className="skills-columns">
          <div className="skills-column">
            <h4>Development</h4>
            <ul className="border-right">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>GitHub</li>
            </ul>
          </div>
          <div className="skills-column">
            <h4>Design</h4>
            <ul className="border-right">
              <li>Adobe Illustrator</li>
              <li>Adobe Photoshop</li>
              <li>Adobe InDesign</li>
              <li>Figma</li>
              <li>WordPress</li>
            </ul>
          </div>
          <div className="skills-column">
            <h4>More</h4>
            <ul>
              <li>Graphic design</li>
              <li>Logo & Branding</li>
              <li>Digital marketing</li>
              <li>Social media</li>
              <li>Content creation</li>
            </ul>
          </div>
        </div>
      </div>

      <main className="portfolio-container">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </main>
    </div>
  );
};

export default App;
