import React, { Component } from 'react';
import '../assets/scss/pins.scss';
import Button from './button';
import awardsImage from '../images/awardPins.jpg';
import pinsImage from '../images/pins.jpg';

const data = {
  mainText: "Girl Scout pins & awards are earned for their accomplishments in skill-building activities; or any set of requirements met.",
  awardsTitle: "Awards:",
  pinsTitle: "Pins:"
};
const award = {
  summit: {
    bold: "Summit Pin - ",
    text: "Girls earn this award by completing all three Journeys at the Brownie level."
  },
  safety: {
    bold: "Safety Pin - ",
    text: "This is earned when Girl Scouts learn to stay safe during their Brownie adventures. "
  }
};
const pin = {
  membership: {
    bold: "Membership Pin - ",
    text: "This pin shows that you are a Girl Scout Brownie. Each leaf stands for one part of the Girl Scout Promise. In the middle of the pin is a Brownie elf."
  },
  star: {
    bold: "Membership Stars - ",
    text: "Each star represents one year as a Girl Scout. The number of stars shows how many years you’ve been a member at each level."
  },
  cookie: {
    bold: "Cookie Pin - ",
    text: "The annual Cookie Activity pin acknowledges participation in the Girl Scout Cookie Program."
  }
};

class Pins extends Component {
  render () {
    let visibleClass = "max-container";
    if(this.props.show) {
      visibleClass += " visibility";
    };

    const [,,,,,,header] = this.props.header;
    const {rel, targBlank, pins} = this.props.button;

    return (
      <section id="pins" className="container">
        <div className={visibleClass}>
          <div id="frame-2" role="grid">
            <div className="col-1 devider hidden">
              <hr/>
              <div className="label">
              <h3>{header.pins}</h3>
              </div>
            </div>
            <div className="col-2 text">
            <ul>
            <li className="title"><h1>{header.pins}</h1></li>
            <li><p>{data.mainText}</p></li>
            <li id="awards">
              <li className="list-title"><h3>{data.awardsTitle}</h3></li>
              <li className="pins-img"><img src={awardsImage} alt="Brownie Award Pins"/></li>
              <li><p><b>{award.summit.bold}</b>{award.summit.text}</p></li>
              <li><p><b>{award.safety.bold}</b>{award.safety.text}</p></li>
            </li>
            <li className="button">
            <a className={pins.nameClass}
               rel={rel}
               href={pins.href}
               target={targBlank}
               title={pins.title}
               alt={pins.alt}>
            <Button text="Award Pins" />
            </a>
            </li>
            <li id="pins">
              <li className="list-title"><h3>{data.pinsTitle}</h3></li>
              <li className="pins-img"><img src={pinsImage} alt="Brownie Pins"/></li>
              <li><p><b>{pin.membership.bold}</b>{pin.membership.text}</p></li>
              <li><p><b>{pin.star.bold}</b>{pin.star.text}</p></li>
              <li><p><b>{pin.cookie.bold}</b>{pin.cookie.text}</p></li>
            </li>
            <li className="button">
            <a className={pins.nameClass}
               rel={rel}
               href="https://www.girlscoutshop.com/GIRLS/OFFICIAL-BADGES-PINS/BROWNIE3?order=onlinecustomerprice:asc"
               target={targBlank}
               title="Brownie Pins"
               alt="Brownie Pins">
            <Button text="Brownie Pins" />
            </a>
            </li>
            </ul>
            </div>
            <div className="col-2 img"></div>
          </div>
        </div>
      </section>
    );
  }
}

export default Pins;
