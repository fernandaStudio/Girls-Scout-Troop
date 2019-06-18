import React, { Component } from 'react';
import '../assets/scss/join.scss';

class Join extends Component {
  render () {
    return (
      <div className="mobile-btn">
        <div className="col-1 mobile">
          <a className="join-btn"
             rel="noopener noreferrer"
             href="https://gsmembers.force.com/members/login"
             target="_blank"
             alt="Rejoin GS"
             title="Rejoin GS">
             Join Now
             </a>
        </div>
      </div>
    );
  }
}

export default Join;
