import React, { Component } from 'react';
// import NavLink from 'components/NavLink';
import './Install.css';


export default class Install extends Component {
  render() {
    return(
      <div className="Install">
        <header className="Install-header">
          <h3 className="Install-title">
            Installation
          </h3>
          <p className="Install-copy">
            Horcrux is available as an
            <a
              className="Install-text-link"
              href="#"
            >
              npm package
            </a>
            .
          </p>
          <div className="Install-pill-wrapper">
            <img
              alt="Travic-ci"
              className="Install-pill"
              src="https://travis-ci.org/whiplashmerch/horcrux.svg?branch=master"
            />
            <img
              alt="Codecov"
              className="Install-pill"
              src="https://codecov.io/gh/whiplashmerch/horcrux/branch/master/graph/badge.svg"
            />
            <img
              alt="Snyk"
              className="Install-pill"
              src="https://snyk.io/test/github/whiplashmerch/horcrux/badge.svg"
            />
          </div>
        </header>

        <div className="Install-feature">
          <h3 className="Install-title">
            Basic Usage
          </h3>
          <p className="Install-copy">
            Built for esModules, just import whatever Component you desire and
            follow the directions in our
            <a
              className="Install-text-link"
              to="/components"
            >
              Component Docs
            </a>
            and you are good to go!
          </p>
        </div>
      </div>
    );
  }
}
