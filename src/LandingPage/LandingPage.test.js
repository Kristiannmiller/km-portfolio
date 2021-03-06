import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LandingPage from './LandingPage';


describe('LandingPage', () => {
  describe('Unit Tests', () => {
    it('Should render a LandingPage', () => {
      render (
        <LandingPage />
      )
      const landingWrap = screen.getByTestId('landingWrap')
      expect(landingWrap).toBeInTheDocument();
    })
    it('Should display a logo', () => {
      render (
        <LandingPage />
      )
      const landingWrap = screen.getByTestId('landingWrap')
      const logo = screen.getByAltText('Kristi Miller logo script writing with plenty of swirls and embellishment')
      expect(landingWrap).toBeInTheDocument();
      expect(logo).toBeInTheDocument();
    })
    it('Should display an animation', () => {
      render (
        <LandingPage />
      )
      const landingWrap = screen.getByTestId('landingWrap')
      const logo = screen.getByAltText('Kristi Miller logo script writing with plenty of swirls and embellishment')
      const introduction = screen.getByTestId('landingAnimation')
      expect(landingWrap).toBeInTheDocument();
      expect(logo).toBeInTheDocument();
      expect(introduction).toBeInTheDocument();
    })

  })
})
