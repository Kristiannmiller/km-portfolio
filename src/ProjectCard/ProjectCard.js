import './ProjectCard.css';
import React from 'react';


const ProjectCard = ({ project }) => {
  const projectInfo = () => {
    if (project.video) {
      return (
        <section className="infoWrap">
          <iframe className="projectVideo"
            src={project.video}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </section>

      )
    } else {
      return (
        <section className="infoWrap">
          <section className="projectDetails">
            <p className="cardDes">{project.long_des}</p>
            <section className="bullets">
              <h3 className="tools">Tools :: {project.tools}</h3>
              <h3 className="tools">Team :: {project.developers}</h3>
            </section>
          </section>
        </section>
      )
    }
  }
  return (
    <section data-testid="cardWrap" className="cardWrap" style={{backgroundImage: 'url(' + project.photo + ')' }}>
      <article className="card">
        <section className="projectIntro">
          <h2 className="cardTitle">{project.name}</h2>
          <h3 className="status">({project.status})</h3>
          <section className="buttons">
            <a href={project.repo} className="projectLinks">
              Repo Link
            </a>
            <a href={project.deploy} className="projectLinks">
              Deployed Link
            </a>
          </section>
        </section>
        { projectInfo() }
      </article>
    </section>
  )
}
export default ProjectCard
