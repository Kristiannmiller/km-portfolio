import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import projects from '../AppAssets/projectsData.js';
import ProjectCard from './ProjectCard';


describe('PhotoView', () => {
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
    it('Should display a project status', () => {
      render (
        <ProjectCard
        project={projects[0]}
        />
      )
      const projectStatus = screen.getByText(`(${projects[0].status})`);
      expect(projectStatus).toBeInTheDocument();
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
    it('Should display a project description', () => {
      render (
        <ProjectCard
        project={projects[0]}
        />
      )
      const projectDetails = screen.getByText(`${projects[0].long_des}`);
      expect(projectDetails).toBeInTheDocument();
    })
    it('Should display additional project information', () => {
      render (
        <ProjectCard
        project={projects[0]}
        />
      )
      const projectTools = screen.getByText(`Tools :: ${projects[0].tools}`);
      const projectChallenge = screen.getByText(`Challenge :: ${projects[0].challenge}`);
      const projectPurpose = screen.getByText(`Purpose :: ${projects[0].purpose}`);
      const projectTeam = screen.getByText(`Team :: ${projects[0].developers}`);
      expect(projectTools).toBeInTheDocument();
      expect(projectChallenge).toBeInTheDocument();
      expect(projectPurpose).toBeInTheDocument();
      expect(projectTeam).toBeInTheDocument();
    })

  })
})
