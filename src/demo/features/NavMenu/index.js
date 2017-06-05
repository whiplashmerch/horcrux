import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './NavMenu.css';


export default class NavMenu extends Component {
  static propTypes = {
    active: PropTypes.bool,
    closeNav: PropTypes.func
  }

  static defaultProps = {
    active: false,
    closeNav: () => null
  }

  constructor() {
    super();
    this.alt = this._notIndex();
    this.list = [
      { id: 0, text: 'installation', url: '/install' },
      { id: 1, text: 'components',   url: '/components' },
      { id: 2, text: 'github',       url: 'https://github.com/whiplashmerch/horcrux' },
      { id: 0, text: 'whiplash',     url: 'https://www.getwhiplash.com/' }
    ];
  }

  componentWillReceiveProps() {
    this.alt = this._notIndex();
  }

  // PRIVATE

  _notIndex = () => {
    const path = window.location.pathname;
    if (path !== '/') {
      return true;
    }

    return false;
  }


  render() {
    const { active, closeNav } = this.props;
    const mainClass = classnames(
      'NavMenu',
      'animated',
      'fadeIn',
      { alt: this.alt }
    );

    if (!active) {
      return null;
    }

    return(
      <div className={ mainClass }>
        <ul className="NavMenu-ul">
          {
            this.list.map((item, index) => (
              <li
                className="NavMenu-li"
                key={ `${ item.id }-${ index }` }
              >
                <a
                  className="NavMenu-link"
                  href={ item.url }
                >
                  { item.text }
                </a>
              </li>
            ))
          }
        </ul>

        <span
          className="NavMenu-close-btn"
          onClick={ closeNav }
        >
          close
        </span>
      </div>
    );
  }
}
