import './LandingPage.css';
import logo from '../AppAssets/namelogo.png';
import React, {useEffect} from 'react';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import { landingAnimation } from './LandingPageAnimation.js';


const LandingPage = ({isActive}) => {
  useEffect(()=>{
    landingAnimation()
  })
  return (
    <section data-testid="landingWrap" className="landingWrap">
      <img title="Kristi Miller Logo" alt ="Kristi Miller logo script writing with plenty of swirls and embellishment" src={logo} className="landingLogo"/>
        <section className="introWrap">
          <article data-testid="introduction" id="testAn1" className="introduction">
            Unique Character
          </article>
          <article data-testid="introduction" id="testAn2" className="introduction">
            Organized Team Leader
          </article>
          <article data-testid="introduction" id="testAn3" className="introduction">
            Innovative Thinker
          </article>
          <article data-testid="introduction" id="testAn4" className="introduction">
            Empathetic CoWorker
          </article>
          <article data-testid="introduction" id="testAn5" className="introduction">
            Determined Learner
          </article>
          <article data-testid="introduction" id="testAn6" className="introduction">
            Creative Entrepreneur
          </article>
          <article data-testid="introduction" id="testAn7" className="introduction">
            Intuitive Designer
          </article>
          <article data-testid="introduction" id="testAn8" className="introduction">
            Business Owner
          </article>
          <article data-testid="introduction" id="testAn9" className="introduction">
            Photographer
          </article>
          <article data-testid="introduction" id="testAn10" className="testAn10">
            Front-End Web Developer
          </article>
        </section>
        <section className="buttonWrap">
          <Route>
            <NavLink title="Navigate to Home page" id="workNav" className="nav" activeClassName="activeNav" to="/projects">
              <button className="enter" onClick={() => isActive(false)}>enter</button>
            </NavLink>
          </Route>
        </section>
    </section>
  )
}
export default LandingPage
