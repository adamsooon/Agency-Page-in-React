import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';

export default class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <div className="navigation-component">
      <div
        className={classnames(
        'burger-container', {
          'is-active': this.props.burgerExpanded
        })}
        onClick={this.props.toggleMenu}
      >
        <span className="burger-line"></span>
        <span className="burger-line"></span>
        <span className="burger-line"></span>
      </div>

      {this.props.burgerExpanded && (

        <nav className="navigation">
        <ul className="main-menu">
          <li className="main-menu-item">
            <Link
              to="/"
              className="main-menu-link"
              activeClassName="is-active"
            >
              <span>Home</span>
            </Link>
          </li>
          <li className="main-menu-item">
            <Link
              to="/"
              className="main-menu-link"
              activeClassName="is-active"
            >
              <span>About us</span>
            </Link>
          </li>
          <li className="main-menu-item">
            <Link
              to="/"
              className="main-menu-link"
              activeClassName="is-active"
            >
              <span>Services</span>
            </Link>
          </li>
          <li className="main-menu-item">
            <Link
              to="/"
              className="main-menu-link"
              activeClassName="is-active"
            >
              <span>Portfolio</span>
            </Link>
          </li>
          <li className="main-menu-item">
            <Link
              to="/"
              className="main-menu-link"
              activeClassName="is-active"
            >
              <span>Blog</span>
            </Link>
          </li>
          <li className="main-menu-item">
            <Link
              to="/"
              className="main-menu-link"
              activeClassName="is-active"
            >
              <span>Contact us</span>
            </Link>
          </li>
        </ul>
      </nav>
     )}
    </div>
    );
  }
}