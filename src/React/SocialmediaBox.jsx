import React from 'react';

export default class SocialmediaBox extends React.Component {
  // static propTypes = {
  //   vl: React.PropTypes.string.isRequired,
  //   change: React.PropTypes.func.isRequired,
  // };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ul className="social-links">
        <li className="social-link">
          <a className="icon-facebook" href="#" />
        </li>
        <li className="social-link">
          <a className="icon-twitter" href="#" />
        </li>
        <li className="social-link">
          <a className="icon-youtube-play" href="#" />
        </li>
        <li className="social-link">
          <a className="icon-linkedin" href="#" />
        </li>
        <li className="social-link">
          <a className="icon-pinterest" href="#" />
        </li>
        <li className="social-link">
          <a className="icon-instagram" href="#" />
        </li>
      </ul>
    );
  }
}