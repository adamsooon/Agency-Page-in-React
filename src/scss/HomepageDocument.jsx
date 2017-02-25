import React from 'react';
// import MediaQuery from 'react-responsive';
// import Breakpoint from '../breakpoints.json';

export default class HomepageDocument extends React.Component {
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  constructor(props) {

    super(props);

    this.state = {
      next: false,
      date: new Date(),
      vl: '',
      visible: false
    };
  }

  cookiesClose = (e) => {
    e.preventDefault();
    localStorage.setItem("cookies", "accepted");
  };

  tick() {
    this.setState({
      date: new Date()
    });
  };

  render() {

    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}