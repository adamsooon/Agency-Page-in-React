import React from 'react';
import MediaQuery from 'react-responsive';
import Breakpoint from '../breakpoints.json';

export default class HomepageDocument extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      date: new Date(),
    };
  }

  tick() {
    this.setState({
      date: new Date()
    });
  };

  componentDidMount() {
    this.timerID = setInterval(
    () => this.tick(),
    1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {

    return (
      <div className="content">
        <header className="homepage-header">
          <div className="container">
            <div className="hero">
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
            </div>
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
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}