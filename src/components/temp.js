import React, { Component } from 'react';
import '../assets/scss/temp.scss';
import Button from './button';


class Temp extends Component {
  render () {
    let visibleClass = "max-container";
    if(this.props.show) {
      visibleClass += " visibility";
    };

    const [header] = this.props.header;
    const {rel, targBlank, temp} = this.props.button;

    return (
      <section id="temp" className="container">
        <div className={visibleClass}>
          <div id="frame-temp" role="grid">
            <div className="col-1 devider hidden">
              <hr/>
              <div className="label">
              <h3>{header.temp}</h3>
              </div>
            </div>
            <div className="col-2 text">
            <ul>
              <li className="title">
                <h1>{header.uniform}</h1>
              </li>
              <li className="list-title">
                <h3>Temp:</h3>
              </li>
              <li><p></p></li>
              <li className="button">
              <a className={temp.nameClass}
                 rel={rel}
                 href={temp.href}
                 target={targBlank}
                 title={temp.title}
                 alt={temp.alt}>
              <Button text="" />
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

export default Temp;
