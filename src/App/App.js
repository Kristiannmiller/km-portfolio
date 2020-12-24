import logo from '../AppAssets/namelogo.png'
import github from '../AppAssets/github.png'
import linkedin from '../AppAssets/linkedin.png'
import turing from '../AppAssets/turing.png'
import smLogo from '../AppAssets/initials.png'
import {withRouter, BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import './App.css';
import {Component} from 'react';
import WorkView from '../WorkView/WorkView.js'
import CareerView from '../CareerView/CareerView.js'
import PhotoView from '../PhotoView/PhotoView.js'
import LandingPage from '../LandingPage/LandingPage.js'
import ContactView from '../ContactView/ContactView.js'



class App extends Component {
  constructor(props) {
    super(props)
    this.state= {
    }
  }
  handleLandingPageChange = () => {
    window.location.pathname = '/projects';
  }
  render() {
    return (
    <BrowserRouter>
      {this.props.location.pathname !== '/' &&
        <header className="header">
          <Route>
            <NavLink id="homeNav" className="homeNav" to="/projects">
              <img title="Navigate to home page" alt ="Kristi Miller Logo" src={logo} className="logo"/>
              <img title="Navigate to home page" alt ="Kristi Miller Initials" src={smLogo} className="smLogo"/>
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
        </header>
      }
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
            <LandingPage isActive={this.handleLandingPageChange} />
          </Route>
        </Switch>
      </main>
      {this.props.location.pathname !== '/' &&
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
      }
    </BrowserRouter>
  )};
}

export default withRouter(App);
