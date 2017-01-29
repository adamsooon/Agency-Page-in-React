import React from 'react';
import Footer from './React/footer';
import Newsletter from './React/Newsletter';
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
    };
  }

  getChildContext() {
    return {
      location: this.props.location,
    };
  }

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

        {this.props.children}

        <Newsletter />
        <Footer />
      </div>
    );
  }
/* eslint-enable max-len */
}
