import React from 'react';
import classnames from 'classnames';
import MediaQuery from 'react-responsive';
import Breakpoint from '../breakpoints.json';
import NavigationMenu from './NavigationMenu';

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
        <MediaQuery query={Breakpoint.tablet}>
          {!this.props.burgerExpanded &&(
           <span className="burger-label">Menu</span>
          )}
        </MediaQuery>
        <span className="burger-line"></span>
        <span className="burger-line"></span>
        <span className="burger-line"></span>
      </div>

      {this.props.burgerExpanded && (
        <NavigationMenu />
     )}
    </div>
    );
  }
}