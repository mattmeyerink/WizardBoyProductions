import './App.css';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import DVYAppInfo from './components/DVY/DVYAppInfo';
import DVYSupport from "./components/DVY/DVYSupport";
import DVYPrivacyPolicy from './components/DVY/DVYPrivacyPolicy';
import RunningPartnerAppInfo from './components/RunningPartner/RunningPartnerAppInfo';
import RunningPartnerSupport from './components/RunningPartner/RunningPartnerSupport';
import WizardBoyProductions from './images/WizardBoyProductions.png'

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img src={WizardBoyProductions} alt="WBP Logo" className="navigationLogo" />
            Wizard Boy Productions
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="DVY" id="dvyDropdown">
                <NavDropdown.Item href="/DVYAppInfo">App Info</NavDropdown.Item>
                <NavDropdown.Item href="/DVYSupport">Support</NavDropdown.Item>
                <NavDropdown.Item href="DVYPrivacyPolicy">Privacy Policy</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Running Partner" id="runningPartnerDropdown">
                <NavDropdown.Item href="/RunningPartnerAppInfo">App Info</NavDropdown.Item>
                <NavDropdown.Item href="/RunningPartnerSupport">Support</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={Home()} />

        <Route path="/DVYAppInfo" element={DVYAppInfo()} /> 
        <Route path="/DVYPrivacyPolicy" element={DVYPrivacyPolicy()} />
        <Route path="/DVYSupport" element={DVYSupport()} />

        <Route path="/RunningPartnerAppInfo" element={RunningPartnerAppInfo()} />
        <Route path="/RunningPartnerSupport" element={RunningPartnerSupport()} />
      </Routes>
    </div>
  );
}

export default App;
