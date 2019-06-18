import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../assets/scss/footer.scss';

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
  text: "Who We Are",
  alt: "About Who We Are"
  },
  {
  name: "schedule",
  to: "/schedule",
  title: "Schedule",
  text: "Our Schedule",
  alt: "Our Schedule"
  },
  {
  name: "uniforms",
  to: "/uniform",
  title: "Uniforms",
  text: "What We Wear",
  alt: "Uniform We Wear"
  },
  {
  name: "badges",
  to: "/badges",
  title: "Badges",
  text: "What We Earn",
  alt: "Badges We Earn"
  },
  {
  name: "awards",
  to: "/pins",
  title: "Pins",
  text: "Our Awards",
  alt: "Our Awards and Pins"
  }];

class Footer extends Component {
  render() {

    const {rel, targBlank} = this.props.button;
    const navFooter = links.map((link) =>
      <div id={link.name} className="col-5">
        <ul>
          <Link to={link.to} onClick={this.props.close} alt={link.alt} title={link.alt}>
            <li key={link.name} className="header"><h4>{link.title}</h4></li>
            <li key={link.text}><p>{link.text}</p></li>
          </Link>
        </ul>
      </div>
    );
    const postFooter = extLinks.map((link) =>
      <ul>
        <li key={link.nameClass}>
        <a className={link.nameClass}
           rel={rel}
           href={link.href}
           target={targBlank}
           title={link.title}
           alt={link.alt}>
           {link.text}
        </a>
        </li>
      </ul>
    );

    return (
      <footer>
        <div className="max-container">
          <div id="frame-5" role="grid" className="nav-footer">{navFooter}</div>
          <div id="frame-1" role="grid" className="post-footer">
            <div className="col-1"  role="menu">
              <div className="logo-container">
                <a className="brownie-logo"
                   href="/"
                   alt="Brownies"
                   title="Home Page">
                </a>
            </div>
          </div>
          <div className="col-1"  role="link">{postFooter}</div>
            <div className="col-1 line">
              <hr/>
            </div>
            <div className="col-1 copywrite">
              <p className="copy">© 2019 Girl Scout Troop 62080</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
