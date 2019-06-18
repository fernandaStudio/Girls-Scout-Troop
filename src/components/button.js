import React, {Component} from 'react';
import '../assets/scss/button.scss';
import Errow from '../images/errow.svg';

class Button extends Component {

  render () {
    return (
      <React.Fragment>
      <span className="volunteer-button">
      {this.props.text}
        <img src={Errow} className="errow" alt="Errow" />
      </span>
      </React.Fragment>
    );
  }
}

export default Button;
