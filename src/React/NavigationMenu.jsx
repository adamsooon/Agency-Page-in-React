import React from 'react';
import { Link } from 'react-router';
import routeMap from '../routeMap.json';
import { TweenLite } from 'gsap';

export default class NavigationMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    TweenLite.from(this.refs.menu, 1, { opacity: 0, width: 0 });
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
            to={routeMap.home}
            className="main-menu-link"
          >
            <span>Home</span>
          </Link>
        </li>
        <li className="main-menu-item">
          <Link
            to={routeMap.about}
            className="main-menu-link"
          >
            <span>About us</span>
          </Link>
        </li>
        <li className="main-menu-item">
          <Link
            to="/"
            className="main-menu-link"
          >
            <span>Services</span>
          </Link>
        </li>
        <li className="main-menu-item">
          <Link
            to="/"
            className="main-menu-link"
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
          >
            <span>Contact us</span>
          </Link>
        </li>
      </ul>
    </nav>
    );
  }
}