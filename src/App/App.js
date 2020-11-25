import logo from '../AppAssets/namelogo.png'
import github from '../AppAssets/github.png'
import linkedin from '../AppAssets/linkedin.png'
import turing from '../AppAssets/turing.png'
import smLogo from '../AppAssets/initials.png'
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import './App.css';
import React from 'react';
import WorkView from '../WorkView/WorkView.js'
import CareerView from '../CareerView/CareerView.js'
import PhotoView from '../PhotoView/PhotoView.js'
import LandingPage from '../LandingPage/LandingPage.js'
import ContactView from '../ContactView/ContactView.js'



function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <Route>
          <NavLink id="homeNav" className="homeNav" to="/">
            <img title="Navigate to landing page" alt ="Kristi Miller Logo" src={logo} className="logo"/>
            <img title="Navigate to landing page" alt ="Kristi Miller Initials" src={smLogo} className="smLogo"/>
          </NavLink>
        </Route>
        <section className="navigationWrap">
          <Route>
            <NavLink title="Navigate to Projects page" id="workNav" className="nav" activeClassName="activeNav" to="/projects">
              Projects
            </NavLink>
          </Route>
          <Route>
            <NavLink title="Navigate to Career page" id="careerNav" className="nav" activeClassName="activeNav" to="/CV">
              Career
            </NavLink>
          </Route>
          <Route>
            <NavLink title="Navigate to Photography page" id="photoNav" className="nav" activeClassName="activeNav" to="/Photo">
              Photography
            </NavLink>
          </Route>
          <Route>
            <NavLink title="Navigate to Contact page" id="contactNav" className="nav" activeClassName="activeNav" to="/Contact">
              Contact
            </NavLink>
          </Route>
        </section>
        <section className="socialWrap">
          <a href="https://github.com/Kristiannmiller">
            <img title="Find Kristi on Github" className="socialLogo" src={github} alt="Click to visit my GitHub page"/>
          </a>
          <a href="https://www.linkedin.com/in/kristiannmiller/">
            <img title="Find Kristi on LinkedIn" className="socialLogo" src={linkedin} alt="Click to visit my LinkedIn page"/>
          </a>
          <a href="https://alumni.turing.io/alumni/kristi-miller">
            <img title="View Kristi's Turing profile" className="socialLogo" src={turing} alt="Click to visit my Turing portfolio"/>
          </a>
        </section>
      </header>
      <main>
        <Switch>
          <Route path='/CV'>
            <CareerView />
          </Route>
          <Route path='/Photo'>
            <PhotoView />
          </Route>
          <Route exact path='/projects'>
            <WorkView />
          </Route>
          <Route exact path='/contact'>
            <ContactView />
          </Route>
          <Route exact path='/'>
            <LandingPage />
          </Route>
        </Switch>
      </main>
      <footer className="footer">
        <section className="footerWrap">
          <a href="https://github.com/Kristiannmiller">
            <img title="Find Kristi on Github" className="socialLogo" src={github} alt="Kristi on Github"/>
          </a>
          <a href="https://www.linkedin.com/in/kristiannmiller/">
            <img title="Find Kristi on LinkedIn" className="socialLogo" src={linkedin} alt="Kristi on LinkedIn"/>
          </a>
          <a href="https://alumni.turing.io/alumni/kristi-miller">
            <img title="View Kristi's Turing profile" className="socialLogo" src={turing} alt="Kristi's Turing portfolio"/>
          </a>
        </section>
      </footer>
    </BrowserRouter>
  );
}

export default App;
