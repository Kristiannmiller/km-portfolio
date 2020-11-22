import './WorkView.css';
import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard.js'
import projects from '../AppAssets/projectsData.js'

const WorkView = () => {
  const projectCards = projects.map(app => {
    return (
      <ProjectCard
      project={app}/>
    )
  })
  return (
    <section className="workWrap">
      <article className="introWrap">
        <h1 className="bigIntro" id="workIntro">Kristi Miller is a visually inspired front-end
        developer with a background in photojournalism. Based in Denver, Colorado.
        </h1>
        <h2 className="scrollPrompt">WORK SAMPLES ↓</h2>
      </article>
      <section className="projectCardWrap">
        {projectCards}
      </section>
    </section>
  )
}
export default WorkView
