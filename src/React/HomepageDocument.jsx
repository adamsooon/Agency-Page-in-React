import React from 'react';
import MediaQuery from 'react-responsive';
import Breakpoint from '../breakpoints.json';
import Slider from 'react-slick';

export default class HomepageDocument extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      date: new Date(),
    };
  }

  render() {
    const heroSlider = {
      dots: false,
      arrows: false,
      fade: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 1000,
      slidesToShow: 1,
    };

    return (
      <div className="content">
        <header className="homepage-header">
          <div className="container">
            <ul className="hero">
              <Slider {...heroSlider}>
                <li className="hero-item">
                  <div className="hero-top">
                    <span>We're</span>
                  </div>
                  <div className="hero-title">
                    <h1>Creative Agency</h1>
                  </div>
                  <span className="text-content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </span>
                </li>
                <li className="hero-item">
                  <div className="hero-top">
                    <span>We're</span>
                  </div>
                  <div className="hero-title">
                    <h1>Digital Agency</h1>
                  </div>
                  <span className="text-content">
                    Let's work together
                  </span>
                </li>
              </Slider>
            </ul>
            <MediaQuery query={Breakpoint.medium}>
              <div className="homepage-history">
                <figure className="history-photo">
                  <img
                    src="../img/home/exhibition.jpg"
                    alt="exhibition"
                  />
                </figure>
                <div className="history-description">
                  <h2 className="section-title">
                    History of agency
                  </h2>
                  <span className="text-content">
                    Porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
                    adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore 
                    et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis 
                    nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid 
                    ex ea commodi modi tempora incidunt ut labore.
                  </span>
                </div>
              </div>
            </MediaQuery>
          </div>
        </header>
      </div>
    );
  }
}