import React from 'react';

export default class SocialMediaBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ul className="social-links">
        <li className="social-link">
          <a className="icon-facebook icon-social" href="#" />
        </li>
        <li className="social-link">
          <a className="icon-twitter icon-social" href="#" />
        </li>
        <li className="social-link">
          <a className="icon-youtube-play icon-social" href="#" />
        </li>
        <li className="social-link">
          <a className="icon-linkedin icon-social" href="#" />
        </li>
        <li className="social-link">
          <a className="icon-pinterest icon-social" href="#" />
        </li>
        <li className="social-link icon-social">
          <a className="icon-instagram icon-social" href="#" />
        </li>
      </ul>
    );
  }
}