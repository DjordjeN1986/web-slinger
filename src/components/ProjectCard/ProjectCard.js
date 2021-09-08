import React from "react";

import "./project-card.scss";

export const ProjectCard = ({ projects }) => {
  return (
    <div className="projects-wrapper">
      {projects &&
        projects.map((p) => (
            <div className="content" key={p.id}>
                    <img className='project-image' src={p.image} alt='alternate-image'/>
                <div className="project-descriptions">
              <p className="project-information">Author: {p.author}</p>
              <p className="project-information">Title: {p.title}</p>
              <p className="project-information">Stack: {p.stack}</p>
            <a className="project-link-to" href={p.url}>Link: {p.title}</a>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProjectCard;
