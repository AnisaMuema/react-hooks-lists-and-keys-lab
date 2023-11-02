import React from "react";
import ProjectItem from "./ProjectItem";
import user from "../data/user";

function ProjectList({ projects, technologies }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        <ProjectItem projects={user.projects} key={user.id}/>
        <p>{technologies}</p>
      </div>
    </div>
  );
}

export default ProjectList;
