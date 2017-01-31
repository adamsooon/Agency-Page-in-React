import React from 'react';
import { Link } from 'react-router';
import { TweenLite } from 'gsap';

export default class NavigationMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    TweenLite.from(this.refs.menu, 1, {opacity:0, width:0});
  }

  render() {
    return (
    <nav className="navigation">
      <ul
        className="main-menu"
        ref="menu"
      >
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
    );
  }
}