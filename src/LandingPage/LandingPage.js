import './LandingPage.css';
import logo from '../AppAssets/namelogo.png'
import React from 'react';

const LandingPage = () => {
  return (
    <section data-testid="landingWrap" className="landingWrap">
      <img title="Kristi Miller Logo" alt ="Kristi Miller Logo" src={logo} className="landingLogo"/>
      <article className="introduction">
      This is a web development portfolio for Kristi Miller.
      </article>
      <h2 className="instructions">
      If you're looking for Kristi's photography please visit www.kam-era.com. Otherwise, please click "projects" to see current work.
      </h2>
    </section>
  )
}
export default LandingPage
