import './LandingPage.css';
import logo from '../AppAssets/namelogo.png'
import React from 'react';

const LandingPage = () => {
  return (
    <section data-testid="landingWrap" className="landingWrap">
      <img title="Kristi Miller Logo" alt ="Kristi Miller logo script writing with plenty of swirls and embellishment" src={logo} className="landingLogo"/>
      <article data-testid="introduction" className="introduction">
      This is a web development portfolio for Kristi Miller.
      </article>
      <h2 data-testid="instructions" className="instructions">
      If you're looking for Kristi's photography please click "Photography". Otherwise, please click "Projects" to see current work.
      </h2>
    </section>
  )
}
export default LandingPage
