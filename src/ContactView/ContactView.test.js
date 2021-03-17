import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactView from './ContactView';
window.scrollTo = jest.fn();


describe('ContactView', () => {
  describe('Unit Tests', () => {
    it('Should render a ContactView', () => {
      render (
        <ContactView />
      )
      const contactWrap = screen.getByTestId('contactWrap')
      expect(contactWrap).toBeInTheDocument();
    })
    it('Should display a heading', () => {
      render (
        <ContactView />
      )
      const contactWrap = screen.getByTestId('contactWrap')
      const heading = screen.getByText("Let's Chat!")
      expect(contactWrap).toBeInTheDocument();
      expect(heading).toBeInTheDocument();
    })
    it('Should display my email address', () => {
      render (
        <ContactView />
      )
      const contactWrap = screen.getByTestId('contactWrap')
      const email = screen.getByText("kristi.ann.miller@gmail.com")
      expect(contactWrap).toBeInTheDocument();
      expect(email).toBeInTheDocument();
    })
  })
})
