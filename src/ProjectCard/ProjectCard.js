import './ProjectCard.css';
import React from 'react';


const ProjectCard = ({ project }) => {
  return (
    <section className="cardWrap" style={{backgroundImage: 'url(' + project.photo + ')' }}>
      <article className="card">
        <section className="infoWrap">
          <h2 className="cardTitle">{project.name}</h2>
          <h3 className="status">({project.status})</h3>
          <a href={project.repo} className="projectLinks">
            Repo Link
          </a>
          <a href={project.deploy} className="projectLinks">
            Deployed Link
          </a>
          <p className="cardDes">{project.long_des}</p>
          <section className="bullets">
            <h3 className="tools">Tools :: {project.tools}</h3>
            <h3 className="tools">Challenge :: {project.challenge}</h3>
            <h3 className="tools">Purpose :: {project.purpose}</h3>
            <h3 className="tools">Team :: {project.developers}</h3>
          </section>
        </section>
      </article>
    </section>
  )
}
export default ProjectCard


// <section className="imageWrap">
// <img title={`${project.name} app in use`} alt ={`${project.name} app in use`} src={project.gif} className="gif"/>
// </section>
