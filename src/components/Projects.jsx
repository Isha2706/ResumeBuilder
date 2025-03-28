import React from "react";

const Projects = ({ projectData }) => {
  // projectData = [{title: "",  description: ["", "", ],}, {title: "",  description: ["", "",],},]
  return (
    <section>
      <h3>Projects</h3>
      {projectData.map((project, index) => (
        <div key={index}>
          <p className="title">
            <strong>{project.title}</strong>
          </p>
          <ul>
            {project.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Projects;
