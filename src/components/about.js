import React, { Component } from 'react';
import Button from './button';
import '../assets/scss/about.scss';

class About extends Component {
  render () {
    let visibleClass = "max-container";
    if(this.props.show){
      visibleClass += " visibility";
    }

    const [title, header] = this.props.header;
    const {rel, targBlank, about} = this.props.button;

    return (
      <section id="about">
        <div className={visibleClass}>
          <div id="frame-2" role="grid">
            <div className="col-1 devider">
              <hr/>
              <div className="label">
                <h3>{title.troopNum}</h3>
              </div>
              <div className="about-bg"></div>
            </div>
            <div className="col-2 text">
              <ul>
                <li className="title">
                  <h1>{header.about}</h1>
                </li>
                <li className="par-1">
                  <p>Troop 62080 was organized during the fall of September 2015. It all began with fourteen kindergarden <a rel="noopener noreferrer" href="https://www.girlscouts.org/en/our-program/grade-levels.html" target="_blank" className="link" title="GS Daisies">Daisies</a>.
                  Now in our fourth year of Girl Scouts, twelve third grade girls lead as <a rel="noopener noreferrer" href="https://www.girlscouts.org/en/our-program/grade-levels.html" target="_blank" className="link" title="GS Brownies">Brownies</a>. The troop program focuses on the many different badges and pins girls have available to them through the Girl Scout program.
                  </p>
                </li>
                <li className="par-2">
                  <p><b>Brownie Troop 62080</b> resides on Nantucket, MA and belongs to the <a rel="noopener noreferrer" href="https://www.gsema.org/" className="link" target="_blank" title="Girl Scouts of Eastern Mass">Girl Scouts of Eastern Mass.</a> (GSEMA) council.
                  </p>
                </li>
                <li className="leaders">
                  <h3>Troop Leaders:</h3>
                </li>
                <li className="email-1">
                  <h4>Fernanda Cox: </h4>
                  <p>Leader</p><br/>
                  <a href="mailto:fernanda.davidchaseinc@yahoo.com" className="e-link" title="fernanda.davidchaseinc@yahoo.com">cox@fernanda-studio.com</a>
                </li>
                <li className="email-2">
                  <h4>Katie Bedell: </h4>
                  <p>Asst-Leader</p><br/>
                  <a href="mailto:kdventura@hotmail.com" className="e-link" title="kdventura@hotmail.com">kdventura@hotmail.com</a>
                </li>
                <li className="email-3">
                  <h4>Gussie Libby: </h4>
                  <p>Co-Leader</p><br/>
                  <a href="mailto:augustlibby@yahoo.com" className="e-link" title="augustlibby@yahoo.com">augustlibby@yahoo.com</a>
                </li>
                <li className="button">
                  <div>
                  <a className={about.nameClass}
                     rel={rel} href={about.href}
                     target={targBlank}
                     title={about.title}
                     alt={about.alt}>
                    <Button text="Be a Volunteer" />
                  </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-2 hidden">
              <div className="crest">
                <div className="crest-float">
                  <a rel={rel} href="https://thinmint.sdgirlscouts.org/files/perm/PG-0941W%20Choosing%20a%20Troop%20Crest.pdf" target={targBlank} alt="Link to Crest Info" title="Link to Crest Info">
                  <h4>Troop Crest:</h4><br/>
                  <p>Unicorn stands for courage & beauty.</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
