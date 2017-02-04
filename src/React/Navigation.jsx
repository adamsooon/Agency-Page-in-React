import React from 'react';
import classnames from 'classnames';
import MediaQuery from 'react-responsive';
import Breakpoint from '../breakpoints.json';
import NavigationMenu from './NavigationMenu';
import OutClickListener from './OutClickListener';

export default class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isScrolling: false
    };
  }

  static propTypes = {
    burgerExpanded: React.PropTypes.bool.isRequired,
    onClickOutside: React.PropTypes.func.isRequired
  };

  onClickOutside = () => {
    if(this.props.burgerExpanded) {
      this.props.onClickOutside();
    }
  };

  componentDidMount() {
    const that = this;
    let didScroll = false;

    window.onscroll = function onScroll() {
      didScroll = true;
    };

    this.scrollInterval = setInterval(() => {
      if (didScroll) {
        didScroll = false;

        if (window.pageYOffset > 200) {
          that.setState({
            isScrolling: true,
          });
        } 
        else {
          that.setState({
            isScrolling: false,
          });
        }
      }
    }, 300);
  }

  componentWillUnmount() {
    clearInterval(this.scrollInterval);
  }

  render() {
    return (
    <OutClickListener
      onClickOutside={this.onClickOutside}
    >
      <div className="navigation-component">
        <div
          className={classnames(
          'burger-container', {
            'is-active': this.props.burgerExpanded,
            'is-scrolling': this.props.burgerExpanded && this.state.isScrolling
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
    </OutClickListener>
    );
  }
}