import React, { Component } from 'react';
import {HashLink as Link}  from 'react-router-hash-link';

import '../assets/scss/menu.scss';
import Close from '../images/close.svg';

const extLinks = [{
  nameClass: 'gsema',
  href: "https://www.gsema.org/",
  title: "Girl Scouts of Eastern Mass",
  alt:  "Go To Girl Scouts of Eastern Mass Website",
  text: "GSEMA"
  },
  {
  nameClass: 'shop',
  href: "https://www.girlscoutshop.com",
  title: "Girl Scouts Online Shop",
  alt:  "Go To Girl Scouts Online Shop Website",
  text: "SHOP"
  },
  {
  nameClass: 'cookies',
  href: "https://www.gsema.org/en/cookies/about-girl-scout-cookies.html",
  title: "Girl Scouts Cookies Info",
  alt:  "Go To Girl Scouts Cookies Info Website",
  text: "COOKIES"
  }];
const links = [{
  name: "about",
  to: "/#about",
  title: "About",
  text: "Who We Are"
  },
  {
  name: "schedule",
  to: "/schedule",
  title: "Schedule",
  text: "Our Schedule"
  },
  {
  name: "bridging",
  to: "/bridging",
  title: "Bridging",
  text: "Brownie to Junior"
  },
  {
  name: "uniforms",
  to: "/uniform",
  title: "Uniforms",
  text: "What We Wear"
  },
  {
  name: "badges",
  to: "/badges",
  title: "Badges",
  text: "What We Earn"
  },
  {
  name: "awards",
  to: "/pins",
  title: "Pins",
  text: "Our Awards"
  }];

class Menu extends Component {
  render () {
    let menuClass = "dd-container ";
    if (this.props.show) {
      menuClass += "open";
      window.scrollTo(0,0);
    }

    const {rel, targBlank} = this.props.button;

    const listOne = extLinks.map( (link) =>
      <li className={link.nameClass} key={link.text}>
      <a className={link.nameClass}
         rel={rel}
         href={link.href}
         target={targBlank}
         title={link.title}
         alt={link.alt}>{link.text}</a>
      </li>
    );
    const listTwo = links.map( (link) =>
      <li className="dd-list-item" key={link.name}>
      <Link to={link.to} onClick={this.props.toggle}>
      <h3>{link.title}</h3><p className="link">{link.text}</p>
      </Link>
      </li>
    );

    return (
      <div className="menu">
        <div className={menuClass}>
          <div id="dd-menu">
            <div className="close-btn">
              <button className="close" onClick={this.props.toggle}>
              <img src={Close} alt="Close Button" />
              </button>
            </div>
            <ul className="dd-list">
              {listOne}
              <li className="line-top"></li>
              {listTwo}
              <li className="line-bottom"></li>
              <li className="copy"><p>© 2019 Girl Scout Troop 62080</p></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
