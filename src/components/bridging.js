import React, { Component } from 'react';
import {HashLink as Link}  from 'react-router-hash-link';
import '../assets/scss/bridging.scss';
import Button from './button';


class Bridging extends Component {
  render () {
    let visibleClass = "max-container";
    if(this.props.show) {
      visibleClass += " visibility";
    };

    const [,,,,,,,header] = this.props.header;
    const {rel, targBlank, bridge} = this.props.button;

    return (
      <section id="bridge" className="container">
        <div className={visibleClass}>
          <div id="frame-bridge" role="grid">
            <div className="col-1 devider hidden">
              <hr/>
              <div className="label">
              <h3>{header.bridging}</h3>
              </div>
            </div>
            <div className="col-2 img"></div>
            <div className="col-2 text">
            <ul>
              <li className="title">
                <h1>{header.bridging}</h1>
              </li>
              <li>
                <p>
                <Link to="/uniform" className="link"><b>** Brownies must be in full uniform.</b></Link>
                Bridging is the special ceremony in which Girl Scouts officially go from one level to the next. Troop 62080 has gone from Daisies to Brownies. This year, 2019, we will celebrate going from Brownies to Juniors.<br/>
                </p>
              </li>
              <li className="list-title">
                <h4>Wings?</h4>
              </li>
              <li>
                <p>When it came time for girls to leave Brownies, Brown Owl would give them one of her feathers so they could "fly" into the next level. Brownie Wings were first used as a symbol of bridging in 1927 and continue to the present day.</p>
              </li>
              <li className="button">
              <a className={bridge.nameClass}
                 rel={rel}
                 href={bridge.href}
                 target={targBlank}
                 title={bridge.title}
                 alt={bridge.alt}>
              <Button text="Bridging Ceremonies" />
              </a>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Bridging;
