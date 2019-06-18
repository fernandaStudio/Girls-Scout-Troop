import React, { Component } from 'react';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';

import About from './components/about';
import Badges from './components/badges';
import Bridging from './components/bridging';
import Footer from './components/footer';
import Header from './components/header';
import Join from './components/joinButton';
import Links from './components/links';
import Main from './components/main';
import Menu from './components/menu';
import Pins from './components/pins';
import Schedule from './components/schedule';
import ScrollToTop from './components/scrollToTop';
import Uniform from './components/uniform';

import './assets/scss/App.scss';

const pgHeaders = [
  {troopNum: 'Troop 62080'},
  {about: 'Brownies'},
  {links: 'Important Links'},
  {schedule: 'Schedule 2019'},
  {uniform: 'Brownie Uniform'},
  {badges: 'Brownie Badges'},
  {pins: 'Brownie Award Pins'},
  {bridging: 'Brownie to Junior'},
  {camping: 'Camping 2019'}
];

const buttonAttrs = {
  rel: "noopener noreferrer",
  targBlank: "_blank",
  targSelf: "_self",
  about:{
    nameClass: "vol-button",
    href: "https://girlscouts.secure.force.com/",
    alt: "Be a Volunteer",
    title: "Be a Volunteer"
  },
  uniform:{
    nameClass: "uniform-button",
    href: "https://www.amazon.com/s?k=girls+khaki+jumper&ref=nb_sb_noss_2",
    alt: "Purchase Uniform",
    title: "Purchase Uniform"
  },
  schedule:{
    nameClass: "vol-button",
    href: "https://girlscouts.secure.force.com/",
    alt: "Be a Volunteer",
    title: "Be a Volunteer"
  },
  badges:{
    nameClass: "badge-button",
    href: "https://www.girlscoutshop.com/BADGES-PROGRAM/BROWNIE2/BROWNIE-BADGES-JOURNEY-AWARDS?page=2",
    alt: "Search Badges",
    title: "Search Badges"
  },
  pins:{
    nameClass: "pin-button",
    href: "https://www.girlscoutshop.com/BADGES-PROGRAM/BROWNIE2/BROWNIE-BADGES-JOURNEY-AWARDS/custitem_journey_type/Award-Pin",
    alt: "Search Pin Awards",
    title: "Search Pin Awards"
  },
  bridge:{
    nameClass: "bridge-button",
    href: "https://www.girlscouts.org/en/about-girl-scouts/traditions/ceremonies.html",
    alt: "Bridging",
    title: "Bridging"
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  closeMenuClickHandler = () => {
    window.scrollTo(0,0);
    this.setState ({menuOpen: false});
  };
  menuToggleClickHandler = () => {
    window.scrollTo(0,0);
    this.setState ((prevState) => {
      return { menuOpen: !prevState.menuOpen };
    });
  };

  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <div className="App">
            <Header button={buttonAttrs} close={this.closeMenuClickHandler} toggle={this.menuToggleClickHandler} />
            <Join />
            <Menu button={buttonAttrs} show={this.state.menuOpen} toggle={this.menuToggleClickHandler} />
            <Route exact path="/"
            render={(props) => <Main show={this.state.menuOpen} isAuthed={true} />}
            />
            <Route exact path="/"
            render={(props) => <About button={buttonAttrs} header={pgHeaders} show={this.state.menuOpen} />}
            />
            <Route path="/schedule"
            render={(props) => <Schedule button={buttonAttrs} header={pgHeaders} show={this.state.menuOpen} isAuthed={true} />}
            />
            <Route path="/uniform"
            render={(props) => <Uniform button={buttonAttrs} header={pgHeaders} show={this.state.menuOpen} isAuthed={true} />}
            />
            <Route path="/badges"
            render={(props) => <Badges button={buttonAttrs} header={pgHeaders} show={this.state.menuOpen} isAuthed={true} />}
            />
            <Route path="/pins"
            render={(props) => <Pins button={buttonAttrs} header={pgHeaders} show={this.state.menuOpen} isAuthed={true} />}
            />
            <Route path="/bridging"
            render={(props) => <Bridging button={buttonAttrs} header={pgHeaders} show={this.state.menuOpen} isAuthed={true} />}
            />
            <Links header={pgHeaders} show={this.state.menuOpen} />
            <Footer button={buttonAttrs} close={this.closeMenuClickHandler}  />
          </div>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
