import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({projects}) {
  const projectElement = projects.map((projObj) => {
    return <ProjectItem key={projObj.id} name ={projObj.name} 
    about={projObj.about}
    technologies={projObj.technologies}/>

  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list"> {projectElement} </div>
      {/* <ProjectItem technologies={props.technologies}{}/> */}
        
    </div>
  );
}

export default ProjectList;
