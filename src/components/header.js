import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../assets/scss/header.scss';
import Logo from '../images/logo.svg';
import Phone from '../images/phone.svg';
import Email from '../images/email.svg';
import Menu from '../images/menu.svg';

const Header = (props) => {
  const leftLinks = [{
    id: "home",
    nameClass: "logo",
    to: "/",
    title: "View Home Page",
    alt: "Home Page",
    text: <img src={Logo}  className="logo-clip" alt="Girl Scout Logo"/>
  },
  {
    id: "schedule",
    nameClass: "hidden",
    to: "/schedule",
    title: "View Schedule",
    alt: "Schedule",
    text: "Schedule"
  },
  {
    id: "bridging",
    nameClass: "hidden",
    to: "/bridging",
    title: "View Bridging",
    alt: "Bridging",
    text: "Bridging"
  }];
  const rightLinks = [{
    name: "call",
    nameClass: "call-btn",
    href: "tel:1-508-680-2284",
    rel: "noopener noreferrer",
    title: "Call 508-680-2284",
    alt: "Call",
    text: <img src={Phone} className="call-clip" alt="508-801-0932"/>
  },
  {
    name: "email",
    nameClass: "email-btn",
    href: "mailto:fernanda.davidchaseinc@yahoo.com",
    rel: "noopener noreferrer",
    title: "fernanda.davidchaseinc@yahoo.com",
    alt: "Email",
    text: <img src={Email} className="email-clip" alt="fernanda.davidchaseinc@yahoo.com"/>
  },
  {
    name: "button",
    nameClass: "join-btn",
    href: "https://gsmembers.force.com/members/login",
    rel: "noopener noreferrer",
    title: "Join Girl Scouts",
    alt: "Join GS",
    text: "Join Now"
  }];

  const leftRender = leftLinks.map(link => {
    return (
      <li key={link.id} className={link.nameClass}>
        <Link to={link.to} onClick={props.close} title={link.title} alt={link.alt}>
        {link.text}
        </Link>
      </li>
    )
  });
  const rightRender = rightLinks.map(link => {
    return (
      <li key={link.name} className={link.name}>
        <a rel={link.rel} href={link.href} className={link.nameClass} title={link.title} alt={link.alt}>
        {link.text}
        </a>
      </li>
    )
  });

  return (
    <header role="navigation">
    <nav className="max-container">
      <div id="frame-2" role="grid">
        <ul className="col-2 left">
          {leftRender}
        </ul>
        <ul className="col-2 right">
          {rightRender}
          <li className="menu">
          <button onClick={props.toggle} title="Menu Button">
            <img src={Menu} alt="Menu" />
          </button>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)}

export default Header;
