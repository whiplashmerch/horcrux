import React, { Component } from 'react';
import Button from 'components/Button';

import Logo from './images/logo.svg';
import WhiplashLogo from './images/whiplash-logo.svg';
import './Home.css';


export default class Home extends Component {
  // PRIVATE

  _loadImage = () => {
    if (!!this.img) {
      this.img.classList.add('fadeIn');
    }
  }

  _loadWhipImg = () => {
    if (!!this.whipLashImg) {
      this.whipLashImg.classList.add('fadeIn');
    }
  }

  render() {
    return(
      <div className="Home animated fadeIn">
        <div className="Home-logo-wrapper">
          <img
            alt="logo"
            className="Home-logo animated"
            onLoad={ this._loadImage }
            ref={ el => this.img = el }
            src={ Logo }
          />
        </div>

        <div className="Home-feature">
          <h3 className="Home-title">
            learn once,
            <span className="br-mobile" />
            write anywhere
          </h3>
          <span className="Home-bar" />
          <h5 className="Home-sub-title">
            UI Library built for React
          </h5>

          <div className="Home-btn-container">
            <Button
              buttonText="get started"
            />
            <Button
              buttonText="components"
            />
          </div>
        </div>

        <footer className="Home-footer">
          <p className="Home-footer-copy">
            spells cast & potions brewed by
          </p>

          <div className="Home-whiplash-wrapper">
            <img
              alt="logo"
              className="Home-whiplash animated"
              onLoad={ this._loadWhipImg }
              ref={ el => this.whipLashImg = el }
              src={ WhiplashLogo }
            />
          </div>
        </footer>
      </div>
    );
  }
}
