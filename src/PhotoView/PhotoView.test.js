import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PhotoView from './PhotoView';


describe('PhotoView', () => {
  describe('Unit Tests', () => {
    it('Should render the PhotoView', () => {
      render (
        <PhotoView />
      )
      const photoWrap = screen.getByTestId('photoWrap');
      expect(photoWrap).toBeInTheDocument();
    })
    it('Should display an introduction', () => {
      render (
        <PhotoView />
      )
      const photoWrap = screen.getByTestId('photoWrap');
      const photoIntro = screen.getByTestId('photoIntro');
      expect(photoWrap).toBeInTheDocument();
      expect(photoIntro).toBeInTheDocument();
    })
    it('Should prompt the user to scroll down', () => {
      render (
        <PhotoView />
      )
      const photoWrap = screen.getByTestId('photoWrap');
      const photoIntro = screen.getByTestId('photoIntro');
      const prompt = screen.getByText('SEE MORE ↓');
      expect(photoWrap).toBeInTheDocument();
      expect(photoIntro).toBeInTheDocument();
      expect(prompt).toBeInTheDocument();
    })
    it('Should display a People section', () => {
      render (
        <PhotoView />
      )
      const peopleHeader = screen.getByText('People');
      const peopleText = screen.getByTestId('peopleText');
      const peopleLink = screen.getByText('Visit KAMera Photojournalism');
      expect(peopleHeader).toBeInTheDocument();
      expect(peopleText).toBeInTheDocument();
      expect(peopleLink).toBeInTheDocument();
    })
    it('Should link to Kam-era.com', () => {
      render (
        <PhotoView />
      )
      const peopleLink = screen.getByText('Visit KAMera Photojournalism');
      expect(peopleLink).toBeInTheDocument();
      expect(peopleLink).toHaveAttribute('href', 'http://www.kam-era.com');
    })
    it('Should display a Products section', () => {
      render (
        <PhotoView />
      )
      const productsHeader = screen.getByText('Products');
      const productsText = screen.getByTestId('productsText');
      const productsLink = screen.getByText('Visit KAMera Product Stories');
      expect(productsHeader).toBeInTheDocument();
      expect(productsText).toBeInTheDocument();
      expect(productsLink).toBeInTheDocument();
    })
    it('Should link to Kameraproduct.com', () => {
      render (
        <PhotoView />
      )
      const productsLink = screen.getByText('Visit KAMera Product Stories');
      expect(productsLink).toBeInTheDocument();
      expect(productsLink).toHaveAttribute('href', 'http://www.kameraproduct.com');
    })
  })
})
