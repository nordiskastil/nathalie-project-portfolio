import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectLinks = ({ netlify, github }) => (
  <div className="project-links">
    <a
      href={netlify}
      target="_blank"
      rel="noopener noreferrer"
      className="project-links__button project-links__button--netlify">
      <FontAwesomeIcon icon={faGlobe} style={{ marginRight: '8px' }} />
      Live demo
    </a>

    <a
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      className="project-links__button project-links__button--github">
      <FontAwesomeIcon icon={faGithub} style={{ marginRight: '8px' }} />
      View code
    </a>
  </div>
);

export default ProjectLinks;
