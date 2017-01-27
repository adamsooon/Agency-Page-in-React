import React from 'react';
// import MediaQuery from 'react-responsive';
// import Breakpoint from '../breakpoints.json';

export default class HomepageDocument extends React.Component {
  componentDidMount() {
    console.log(this.props.location);
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

  activenext = () => {
    // if (!this.state.next) {
    //   this.setState({
    //   next: true
    // });
    // console.log('Adam');
    // }
    // else {
    //   this.setState({
    //   next: false
    // });
    // }
    this.setState({
      visible: true
    })
  }

  cookiesClose = (e) => {
    e.preventDefault();
    localStorage.setItem("cookies", "accepted");
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  handler = (e) => {
    this.setState({
      vl: e.target.value,
      visible: false
    });
    console.log(e.target.value);
  }

  render() {

    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}