import React, { Component } from 'react';
import '../assets/scss/links.scss';


const attrs = {
  rel: "noopener noreferrer",
  targBlank: "_blank",
  targSelf: "_self",
  linkOne: {
    href: "https://www.gsema.org/",
    alt: "Go To Girl Scouts of Eastern Mass Website",
    title: "Girl Scouts of Eastern Mass"
  },
  linkTwo: {
    href: "https://www.girlscoutshop.com",
    alt: "Go To Girl Scouts Online Shopping Website",
    title: "Girl Scouts Online Shop"
  },
  linkThree: {
    href: "https://www.gsema.org/en/cookies/about-girl-scout-cookies.html",
    alt: "Go To Girl Scout Cookies Information",
    title: "Girl Scout Cookies Info"
  }
};

class Links extends Component {
  render () {
    let visibleClass = "max-container";
    if(this.props.show){
      visibleClass += " visibility";
    }

    const [,,title] = this.props.header;

    return (
      <section role="link" id="impt-links">
        <div className={visibleClass}>
          <div id="frame-3" role="grid">
            <div className="col-1 devider">
              <hr/>
              <div className="label">
                <h3>{title.links}</h3>
              </div>
            </div>
            <div className="col-3 gsema">
              <a className="gsema-logo" rel={attrs.rel} href={attrs.linkOne.href} target={attrs.targBlank} title={attrs.linkOne.title} alt={attrs.linkOne.alt}></a>
            </div>
            <div className="col-3">
              <a className="shop-logo" rel={attrs.rel} href={attrs.linkTwo.href}  target={attrs.targBlank} title={attrs.linkTwo.title} alt={attrs.linkTwo.alt}></a>
            </div>
            <div className="col-3">
              <a className="cookies-logo" rel={attrs.rel} href={attrs.linkThree.href} target={attrs.targBlank} title={attrs.linkThree.title} alt={attrs.linkThree.alt}></a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Links;
