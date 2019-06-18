import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/scss/main.scss';
import Errow from '../images/errow.svg';

const boxes = {
  firstBox: {
      date: "June 12, 2019",
      time: "4:30 - 5:30",
      location: "NHS Cafe",
      boldInfo: "JOURNEY 3 - Presentations.",
      info: "Tell your written story, you being the main character, who has done good for the community within your assigned country.",
      link: "Badges Earned",
      href: "/badges",
      snack: "Troop"
    },
  secondBox: {
    date: "June 14, 2019",
    time: "6-7 pm",
    info: "Bridging Ceremony",
    location: "The VFW",
    description: "Bridging is an important transition in a Girl Scout's life. It's a defining moment when they become aware of their achievements. Our girls will celebrate bridging from Brownie to Junior. They will also receive the highest award a Brownie Girl Scout can earn.",
    link: "Summit Pin",
    href: "/pins",
  }
};
const attrs = {
  rel: "noopener noreferrer",
  targBlank: "_blank",
  targSelf: "_self"
};
const icons = {
  locationIcon: {
    href: "https://www.google.com/maps/place/Nantucket+High+School/@41.2733531,-70.0985073,15z/data=!4m2!3m1!1s0x0:0xde8aa007d5edf9cb?sa=X&ved=2ahUKEwjkssiVsJ3hAhUIrlkKHdZpCEYQ_BIwCnoECA8QCA",
    title: "NHS location",
    alt: "NHS Location",
  },
  questionIcon: {
    href: "https://www.google.com/maps/dir//vfw+nantucket/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89fae7f8ce9ad5eb:0xb0049d7ace27b4da?sa=X&ved=2ahUKEwj91-m-1sHhAhVNdt8KHbEiCBcQ9RcwC3oECA8QDg",
    title: "VFW Location",
    alt: "FAQ",
  }
};
const buttons = {
  firstBox: {
    href: "/schedule",
    title: "View Schedule",
    alt: "View Schedule"
  },
  secondBox: {
    href: "/bridging",
    title: "Bridging Info",
    alt: "Bridging Info"
  }
}

class Main extends Component {
  render () {
    let visibleClass = "max-container";
    if(this.props.show){
      visibleClass += " visibility";
    }

    return (
      <main role="main">
        <div id="home" className={visibleClass}>
          <div className="hidden-img"></div>
          <div className="hidden-col">
            <h1>Brownies of Nantucket</h1>
            <p>Girl Scout Troop 62080</p>
          </div>
          <div id="frame-1" role="grid">
            <div className="col-1 top-col">
              <ul className="box-1">
                <li className="date">
                  <h2>{boxes.firstBox.date}</h2>
                  <a className="locationIcon"
                     rel={attrs.rel}
                     href={icons.locationIcon.href}
                     target={attrs.targBlank}
                     title={icons.locationIcon.title}
                     alt={icons.locationIcon.alt}>
                    <svg className="location-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#4d3219"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
                  </a>
                </li>
                <li className="time">
                  <h4>{boxes.firstBox.time}</h4>
                  <p> @ {boxes.firstBox.location}</p>
                </li>
                <li className="info">
                  <p><b>{boxes.firstBox.boldInfo}</b> {boxes.firstBox.info}</p>
                </li>
                <li className="info-link">
                <Link to={boxes.firstBox.href}
                      className="link"
                      title={boxes.firstBox.link}
                      alt={boxes.firstBox.link}>
                {boxes.firstBox.link}
                </Link>
                </li>
                <li className="snk-duty">
                  <h4>Snack Duty: </h4>
                  <p>{boxes.firstBox.snack}</p>
                </li>
                <li className="button">
                  <Link to={buttons.firstBox.href}
                        className="sched-btn"
                        title={buttons.firstBox.title}
                        alt={buttons.firstBox.alt}>
                  View Schedule
                  <img src={Errow} className="errow" alt="Errow"/>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-1 bottom-col">
              <ul className="box-2">
                <li className="date">
                  <h2>{boxes.secondBox.date}</h2>
                  <a className="questionIcon"
                     rel={attrs.rel}
                     href={icons.questionIcon.href}
                     target={attrs.targBlank}
                     title={icons.questionIcon.title}
                     alt={icons.questionIcon.alt}>
                     <svg xmlns="http://www.w3.org/2000/svg" className="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="#4d3219"><path d="M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.738 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 9.236 2.247 15.968-3.405 15.968-9.457 0-5.812-5.701-10.007-12-10.007zm0 15c-.565 0-1.024-.459-1.024-1.025 0-.565.459-1.024 1.024-1.024.566 0 1.024.459 1.024 1.024 0 .566-.458 1.025-1.024 1.025zm1.606-4.858c-.74.799-.775 1.241-.766 1.785h-1.643c-.006-1.208.016-1.742 1.173-2.842.469-.446.84-.799.788-1.493-.047-.66-.599-1.004-1.117-1.004-.581 0-1.261.432-1.261 1.649h-1.646c0-1.966 1.155-3.237 2.941-3.237.849 0 1.592.278 2.09.783.468.473.709 1.125.7 1.883-.013 1.134-.704 1.878-1.259 2.476z"/></svg>
                  </a>
                </li>
                <li className="time">
                  <p>{boxes.secondBox.time} @ {boxes.secondBox.location}</p>
                </li>
                <li className="info">
                  <h4>{boxes.secondBox.info}</h4><br/>
                </li>
                <li className="description">
                  <p>{boxes.secondBox.description}<br/></p>
                </li>
                <li className="info-link">
                  <Link to={boxes.secondBox.href}
                        className="link"
                        title={boxes.secondBox.link}
                        alt={boxes.secondBox.link}>
                  {boxes.secondBox.link}
                  </Link>
                </li>
                <li className="button">
                  <Link to={buttons.secondBox.href}
                        className="cookie-btn"
                        title={buttons.secondBox.title}
                        alt={buttons.secondBox.alt} >
                  Bridging Info
                  <img src={Errow} className="errow" alt="Errow"/>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
