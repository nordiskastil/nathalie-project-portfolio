import ProjectName from "./ProjectName";
import ProjectImage from "./ProjectImage";
import ProjectInfo from "./ProjectInfo";
import ProjectTags from "./ProjectTags";
import ProjectLinks from "./ProjectLinks";

const Project = ({ project }) => {
  const { name, image, description, tags, netlify, github } = project;

  return (
    <article className="project">
      <div className="project-image-container">
        <img src={project.image} alt={project.name} />
      </div>
      <div className="project-content">
        <h2 className="project-name">{project.name}</h2>
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
        <p>{project.description}</p>
        <ProjectLinks netlify={project.netlify} github={project.github} />
      </div>
    </article>
  );
};

export default Project;


