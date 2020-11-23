import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';


describe('App', () => {
  describe('Unit Tests', () => {
    it('Should render a header', () => {
      render (
        <App />
      )
      const logo = screen.getByAltText('Kristi Miller Logo')
      const projectsNav = screen.getByText('Projects')
      const careerNav = screen.getByText('Career')
      const photoNav = screen.getByText('Photography')
      const github = screen.getByAltText('Click to visit my GitHub page')
      const linkedin = screen.getByAltText('Click to visit my LinkedIn page')
      const turing = screen.getByAltText('Click to visit my Turing portfolio')
      expect(logo).toBeInTheDocument();
      expect(projectsNav).toBeInTheDocument();
      expect(careerNav).toBeInTheDocument();
      expect(photoNav).toBeInTheDocument();
      expect(github).toBeInTheDocument();
      expect(linkedin).toBeInTheDocument();
      expect(turing).toBeInTheDocument();
    })
  })
  describe('Integration Tests', () => {
    it('Should render CareerView', () => {
      render (
        <App />
      )
      const careerNav = screen.getByText('Career')
      expect(careerNav).toBeInTheDocument();
      userEvent.click(careerNav)
      const careerWrap = screen.getByTestId('careerWrap');
      expect(careerWrap).toBeInTheDocument();
    })
    it('Should render PhotoView', () => {
      render (
        <App />
      )
      const photoNav = screen.getByText('Photography')
      expect(photoNav).toBeInTheDocument();
      userEvent.click(photoNav)
      const photoWrap = screen.getByTestId('photoWrap');
      expect(photoWrap).toBeInTheDocument();
    })
    it('Should render WorkView', () => {
      render (
        <App />
      )
      const projectsNav = screen.getByText('Projects')
      const careerNav = screen.getByText('Career')
      expect(projectsNav).toBeInTheDocument();
      userEvent.click(projectsNav)
      const workWrap = screen.getByTestId('workWrap')
      expect(workWrap).toBeInTheDocument();
    })
    it('Should return to LandingView', () => {
      render (
        <App />
      )
      const logo = screen.getByAltText('Kristi Miller Logo')
      const photoNav = screen.getByText('Photography')
      expect(logo).toBeInTheDocument();
      expect(photoNav).toBeInTheDocument();
      userEvent.click(photoNav)
      const photoWrap = screen.getByTestId('photoWrap');
      expect(photoWrap).toBeInTheDocument();
      userEvent.click(logo)
      const landingWrap = screen.getByTestId('landingWrap')
      expect(landingWrap).toBeInTheDocument();
    })
    it('Should lead to social media links', () => {
      render (
        <App />
      )
      const github = screen.getByAltText('Click to visit my GitHub page')
      const linkedin = screen.getByAltText('Click to visit my LinkedIn page')
      const turing = screen.getByAltText('Click to visit my Turing portfolio')
      expect(github.closest('a')).toHaveAttribute('href', 'https://github.com/Kristiannmiller');
      expect(linkedin.closest('a')).toHaveAttribute('href', 'https://www.linkedin.com/in/kristiannmiller/');
      expect(turing.closest('a')).toHaveAttribute('href', 'https://alumni.turing.io/alumni/kristi-miller');
    })
  })
})
