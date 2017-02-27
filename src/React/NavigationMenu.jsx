import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import routeMap from '../routeMap.json';
import { TweenLite } from 'gsap';

export default class NavigationMenu extends React.Component {

  static propTypes = {
    location: React.PropTypes.object.isRequired,
  };

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
            className={classnames(
            'main-menu-link', {
              'is-active': this.props.location.pathname === routeMap.home,
            })}
          >
            <span>Home</span>
          </Link>
        </li>
        <li className="main-menu-item">
          <Link
            to={routeMap.about}
            className={classnames(
            'main-menu-link', {
              'is-active': this.props.location.pathname === routeMap.about,
            })}
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
          >
            <span>Blog</span>
          </Link>
        </li>
        <li className="main-menu-item">
          <Link
            to=""
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