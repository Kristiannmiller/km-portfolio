import { render, screen } from '@testing-library/react';
import projects from '../AppAssets/projectsData.js';
import ProjectCard from './ProjectCard';


describe('ProjectView', () => {
  describe('Unit Tests', () => {
    it('Should render a ProjectCard', () => {
      render (
        <ProjectCard
        project={projects[0]}
        />
      )
      const cardWrap = screen.getByTestId('cardWrap');
      expect(cardWrap).toBeInTheDocument();
    })
    it('Should display a project title', () => {
      render (
        <ProjectCard
        project={projects[0]}
        />
      )
      const projectTitle = screen.getByText(`${projects[0].name}`);
      expect(projectTitle).toBeInTheDocument();
    })
    it('Should display links to project repo and deployed site', () => {
      render (
        <ProjectCard
        project={projects[0]}
        />
      )
      const projectRepo = screen.getByText('Repo Link');
      const projectDeploy = screen.getByText('Deployed Link');
      expect(projectRepo).toBeInTheDocument();
      expect(projectDeploy).toBeInTheDocument();
    })
    it('Should redirect to the project repo link and deploy link', () => {
      render (
        <ProjectCard
        project={projects[0]}
        />
      )
      const projectRepo = screen.getByText('Repo Link');
      const projectDeploy = screen.getByText('Deployed Link');
      expect(projectRepo).toBeInTheDocument();
      expect(projectDeploy).toBeInTheDocument();
      expect(projectRepo).toHaveAttribute('href', `${projects[0].repo}`);
      expect(projectDeploy).toHaveAttribute('href', `${projects[0].deploy}`);
    })
    it('Should display additional project information', () => {
      render (
        <ProjectCard
        project={projects[0]}
        />
      )
      const projectTools = screen.getByText(`Tools and Tech`);
      const projectChallenge = screen.getByText(`Styled Components`);
      const projectPurpose = screen.getByText(`Express`);
      const projectTeam = screen.getByTestId(`techWrap`);
      expect(projectTools).toBeInTheDocument();
      expect(projectChallenge).toBeInTheDocument();
      expect(projectPurpose).toBeInTheDocument();
      expect(projectTeam).toBeInTheDocument();
    })
  })
})
