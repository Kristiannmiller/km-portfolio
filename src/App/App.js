import logo from '../AppAssets/namelogo.png'
import github from '../AppAssets/github.png'
import linkedin from '../AppAssets/linkedin.png'
import turing from '../AppAssets/turing.png'
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import './App.css';
import React from 'react';
import WorkView from '../WorkView/WorkView.js'
import CareerView from '../CareerView/CareerView.js'
import PhotoView from '../PhotoView/PhotoView.js'

function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <Route>
          <NavLink id="homeNav" className="homeNav" to="/">
            <img title="Kristi Miller Logo" alt ="Kristi Miller Logo" src={logo} className="logo"/>
          </NavLink>
        </Route>
        <section className="navigationWrap">
          <Route>
            <NavLink id="workNav" className="nav" activeClassName="activeNav" to="/">
              Projects
            </NavLink>
          </Route>
          <Route>
            <NavLink id="careerNav" className="nav" activeClassName="activeNav" to="/CV">
              Career
            </NavLink>
          </Route>
          <Route>
            <NavLink id="photoNav" className="nav" activeClassName="activeNav" to="/Photo">
              Photography
            </NavLink>
          </Route>
        </section>
        <section className="socialWrap">
          <a href="https://github.com/Kristiannmiller">
            <img className="socialLogo" src={github}/>
          </a>
          <a href="https://www.linkedin.com/in/kristiannmiller/">
            <img className="socialLogo" src={linkedin}/>
          </a>
          <a href="https://alumni.turing.io/alumni/kristi-miller">
            <img className="socialLogo" src={turing}/>
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
          <Route exactPath='/'>
            <WorkView />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
