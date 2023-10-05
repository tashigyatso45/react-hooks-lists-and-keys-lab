import React from "react";

function ProjectItem(props) {
  console.log(props)
  const techElement = props.technologies.map((techObj) => {
    return <span key={techObj}>{techObj}</span>
  })
  return (
    <div className="project-item">
      <h3>{props.name}</h3>
      <p>{props.about}</p>
      <div className="technologies">
        {techElement}
      </div>
    </div>
  );
}

export default ProjectItem;
