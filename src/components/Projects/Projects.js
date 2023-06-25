import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
function Projects() {
  return (
    <>
      <div className="ProjectWrapper" id="projects">

          <h2 class="hr-lines" style={{marginBottom: '70px', marginTop: '200px'}}> 
          <p style={{fontSize: '30px'}}>Projects</p>
          </h2>
        <div className="Container">
          <ProjectCard />
        </div>
      </div>
    </>
  );
}

export default Projects;
