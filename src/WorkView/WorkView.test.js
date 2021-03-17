import { render, screen } from '@testing-library/react';
import projects from '../AppAssets/projectsData.js';
import WorkView from './WorkView';
window.scrollTo = jest.fn();


describe('WorkView', () => {
  describe('Unit Tests', () => {
    it('Should render the WorkView', () => {
      render (
        <WorkView />
      )
      const workWrap = screen.getByTestId('workWrap');
      expect(workWrap).toBeInTheDocument();
    })
    it('Should display an intro message', () => {
      render (
        <WorkView />
      )
      const workIntro = screen.getByTestId('workIntro');
      expect(workIntro).toBeInTheDocument();
    })
    it('Should prompt the user to scroll down', () => {
      render (
        <WorkView />
      )
      const prompt = screen.getByText('WORK SAMPLES');
      expect(prompt).toBeInTheDocument();
    })
  })
  describe('Integration Tests', () => {
    it('Should render ProjectCards', () => {
      render (
        <WorkView />
      )
      const project1 = screen.getByText(`${projects[0].name}`);
      const project2 = screen.getByText(`${projects[1].name}`);
      const project3 = screen.getByText(`${projects[2].name}`);
      const project4 = screen.getByText(`${projects[3].name}`);
      expect(project1).toBeInTheDocument();
      expect(project2).toBeInTheDocument();
      expect(project3).toBeInTheDocument();
      expect(project4).toBeInTheDocument();
    })
  })
})
