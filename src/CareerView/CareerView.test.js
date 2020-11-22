import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CareerView from './CareerView';


describe('CareerView', () => {
  describe('Unit Tests', () => {
    it('Should render the CareerView', () => {
      render (
        <CareerView />
      )
      const careerWrap = screen.getByTestId('careerWrap');
      expect(careerWrap).toBeInTheDocument();
    })
    it('Should display an introduction', () => {
      render (
        <CareerView />
      )
      const careerWrap = screen.getByTestId('careerWrap');
      const intro = screen.getByTestId('workIntro');
      expect(careerWrap).toBeInTheDocument();
      expect(intro).toBeInTheDocument();
    })
    it('Should prompt the user to scroll down', () => {
      render (
        <CareerView />
      )
      const careerWrap = screen.getByTestId('careerWrap');
      const intro = screen.getByTestId('workIntro');
      const prompt = screen.getByText('FIND OUT MORE ↓');
      expect(careerWrap).toBeInTheDocument();
      expect(intro).toBeInTheDocument();
      expect(prompt).toBeInTheDocument();
    })
    it('Should display a Career Vision', () => {
      render (
        <CareerView />
      )
      const vision = screen.getByText('My Career Vision');
      const visionText = screen.getByTestId('visionText');
      expect(vision).toBeInTheDocument();
      expect(visionText).toBeInTheDocument();
    })
    it('Should display Work History', () => {
      render (
        <CareerView />
      )
      const history = screen.getByText('Work History');
      const historyText = screen.getByTestId('jobWrap');
      expect(history).toBeInTheDocument();
      expect(historyText).toBeInTheDocument();
    })
    it('Should display the Why? statement', () => {
      render (
        <CareerView />
      )
      const theWhy = screen.getByText('Why Web Development?');
      const whyText = screen.getByTestId('whyText');
      expect(theWhy).toBeInTheDocument();
      expect(whyText).toBeInTheDocument();
    })
  })
})
