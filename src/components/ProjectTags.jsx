const ProjectTags = ({ tags }) => (
  <div className="project-tags">
    {tags.map((tag, index) => (
      <span
        key={index}
        className="project-tag"
      >
        {tag}
      </span>
    ))}
  </div>
);

export default ProjectTags;