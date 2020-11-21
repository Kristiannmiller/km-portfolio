import './ProjectCard.css';
import React from 'react';


const ProjectCard = ({ project }) => {
  return (
    <section className="cardWrap" style={{backgroundImage: 'url(' + project.photo + ')' }}>
      <article className="card">
        <section className="imageWrap">
          <img className="gif1" title={`${project.name} app in use`} alt ={`${project.name} app in use`} src={project.gif} className="gif"/>
          <img className="gif2" title={`${project.name} app in use`} alt ={`${project.name} app in use`} src={project.gif} className="gif"/>
        </section>
        <section className="infoWrap">
          <h1 className="cardTitle">{project.name}</h1>
          <a href={project.repo} className="projectLinks">
            Repo Link
          </a>
          <a href={project.deploy} className="projectLinks">
            Deployed Link
          </a>
          <p className="cardDes">{project.long_des}</p>
        </section>
      </article>
    </section>
  )
}
export default ProjectCard
