import React from 'react';
import Medias from './SocialMediaBox';

export default class footer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <footer className="footer">
        <div className="container footer-box">
          <ul className="footer-menu">
            <li className="footer-menu-item">
              <a href="#" className="footer-menu-link">
                <span>Home</span>
              </a>
            </li>
            <li className="footer-menu-item">
              <a href="#" className="footer-menu-link">
                <span>About us</span>
              </a>
            </li>
            <li className="footer-menu-item">
              <a href="#" className="footer-menu-link">
                <span>Services</span>
              </a>
            </li>
            <li className="footer-menu-item">
              <a href="#" className="footer-menu-link">
                <span>Portfolio</span>
              </a>
            </li>
            <li className="footer-menu-item">
              <a href="#" className="footer-menu-link">
                <span>Blog</span>
              </a>
            </li>
            <li className="footer-menu-item">
              <a href="#" className="footer-menu-link">
                <span>Contact us</span>
              </a>
            </li>
          </ul>
          <div className="footer-info">
            <span className="rights">
              Created by akhouad 2016. All Rights Reserved
            </span>
            <Medias />
          </div>
        </div>
      </footer>
    );
  }
}