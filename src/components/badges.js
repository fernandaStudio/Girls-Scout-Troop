import React, { Component } from 'react';
import '../assets/scss/badges.scss';
import Button from './button';
import badge from '../images/journey3.jpg';

const data = {
  title: "Journey 3:",
  bold: "A World of Girls - ",
  text: "Brownies discover different cultures around the world and see how storytelling can inspire us to help others. Girls tell their own stories through theater, crafts, painting, or even by developing their own advertising."
};

class Badges extends Component {
  render () {
    let visibleClass = "max-container";
    if(this.props.show) {
      visibleClass += " visibility";
    };

    const [,,,,,header] = this.props.header;
    const {rel, targBlank, badges} = this.props.button;

    return (
      <section id="badges" className="container">
        <div className={visibleClass}>
          <div id="frame-2" role="grid">
            <div className="col-1 devider hidden">
              <hr/>
              <div className="label">
              <h3>{header.badges}</h3>
              </div>
            </div>
            <div className="col-2 text">
            <ul>
              <li className="title"><h1>{header.badges}</h1></li>
              <li className="badge-img"><img src={badge} alt="Brownie Badges Earned" /></li>
              <li className="list-title"><h3>{data.title}</h3></li>
              <li><p><b>{data.bold}</b>{data.text}</p></li>
              <li className="button">
              <a className={badges.nameClass}
                 rel={rel}
                 href={badges.href}
                 target={targBlank}
                 title={badges.title}
                 alt={badges.alt}>
              <Button text="Brownie Badges" />
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

export default Badges;
