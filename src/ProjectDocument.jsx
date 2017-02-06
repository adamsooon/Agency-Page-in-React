import React from 'react';
import Navigation from './React/Navigation';
import Newsletter from './React/Newsletter';
import Footer from './React/footer';
/*import routeMap from 'json!absolvent/routeMap.json'; */

export default class ProjectDocument extends React.Component {
  static propTypes = {
    children: React.PropTypes.node.isRequired,
    location: React.PropTypes.object.isRequired,
  };

  static childContextTypes = {
    location: React.PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      burgerExpanded: false,
    };
  }

  getChildContext() {
    return {
      location: this.props.location,
    };
  }

  cookiesClose = (e) => {
    e.preventDefault();
    localStorage.setItem("cookies", "accepted");
  };

  toggleMenu = () => {
    document.body.classList.toggle('menu-open');
    if( !this.state.burgerExpanded ) {
      this.setState({
        burgerExpanded: true
      });
    } else {
      this.setState({
        burgerExpanded: false
      });
    }
  };

  onClickOutside = () => {
    document.body.classList.remove('menu-open');
    this.setState({
      burgerExpanded: false
    });
  };

  componentWillReceiveProps(props) {
    if (props.location.pathname !== this.props.location.pathname) {
      window.scrollTo(0, 0);
      this.setState({
        burgerExpanded: false,
      });
    }
  }

  /* eslint-disable max-len */
  render() {
    return (
      <div>
        <Navigation
          toggleMenu={this.toggleMenu}
          burgerExpanded={this.state.burgerExpanded}
          onClickOutside={this.onClickOutside}
        />

        {this.props.children}

        <Newsletter />

        <Footer />
      </div>
    );
  }
/* eslint-enable max-len */
}
