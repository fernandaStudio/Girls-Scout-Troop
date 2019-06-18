import React, { Component } from 'react';
import '../assets/scss/uniforms.scss';
import Button from './button';



class Uniform extends Component {
  render () {
    let visibleClass = "max-container";
    if(this.props.show){
      visibleClass += " visibility";
    }

    const [,,,,header] = this.props.header;
    const {rel, targBlank, uniform} = this.props.button;

    return (
      <section id="uniform" className="container">
        <div className={visibleClass}>
          <div id="frame-2" role="grid">
            <div className="col-2 devider hidden">
                <hr/>
                <div className="label">
                  <h3>{header.uniform}</h3>
                </div>
            </div>
            <div className="col-2 img"></div>
            <div className="col-2 text">
                <ul>
                  <li className="title">
                    <h1>{header.uniform}</h1>
                  </li>
                  <li className="text">
                    <p>Girl Scouts must be in <b>full uniform</b> for all Girl Scout ceremonies (e.g. bridging), special events, town events, and parades.</p>
                  </li>
                  <li className="list-hd">
                    <h4>Full Uniform:</h4>
                  </li>
                  <li><p>• Khaki Jumper or Skirt</p></li>
                  <li><p>• White Blouse or Polo Shirt or Shirt</p></li>
                  <li><p>• White Socks or Stockings</p></li>
                  <li><p>• Brownie Sash with Badges & Pins</p></li>
                  <li  className="button">
                    <div>
                      <a className={uniform.nameClass}
                         rel={rel}
                         href={uniform.href}
                         target={targBlank}
                         title={uniform.title}
                         alt={uniform.alt}>
                      <Button text="Purchase Uniform" />
                      </a>
                    </div>
                  </li>
                </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Uniform;
