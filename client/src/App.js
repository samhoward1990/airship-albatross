import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { Navbar, Nav, Image } from 'react-bootstrap';
import './App.css';

import airshipAlbatrossFlag from './images/airship-albatross-flag.jpg';

import Homepage from './pages/homepage/homepage';
import Photos from './pages/photos/photos';
import Contact from './pages/contact/contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar expand="lg">
          <Link to="/"><Navbar.Brand><Image src={airshipAlbatrossFlag} width="200px" height="auto" /></Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="absic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/"><button className="mr-2">Home</button></Link>
              <Link to="/crew"><button className="mr-2">Crew</button></Link>
              <Link to="/photos"><button className="mr-2">Photos</button></Link>
              <Link to="/contact"><button>Contact</button></Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/photos">
            <Photos />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;