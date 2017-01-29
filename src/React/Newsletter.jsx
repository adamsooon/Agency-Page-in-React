import React from 'react';
import classnames from 'classnames';

export default class Newsletter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      label: false
    };
  }

  handlerBlur = () => {
    if(this.refs.email.value.length > 0) {
      this.setState({
        label: true
      });
    }
    else {
      this.setState({
        label: false
      });
    }
  }

  render() {
    return (
      <section className="small green">
        <div className="container newsletter">
          <div className="newsletter-introduce">
            <h2 className="newsletter-header">
              YOU THINK WE'RE COOL ? LET'S WORK TOGETHER
            </h2>
            <a href="#" className="btn white">
              <span>get in touch</span>
            </a>
          </div>
          <form className="newsletter-form">
            <h3 className="newsletter-form-title">
              STAY INFORMED WITH OUR NEWSLETTER
            </h3>
            <p className="newsletter-form-subtitle">
              Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.
            </p>
            <div className="newsletter-form-box">
              <input
                type="text"
                id="newsletter-email"
                className="newsletter-email"
                ref="email"
                onBlur={this.handlerBlur}
                required
              />
              <label
                htmlFor="newsletter-email"
                className={classnames(
                'newsletter-label', {
                  'is-active': this.state.label
                })}
              >
                Your email
              </label>
              <button type="submit" className="btn small green">
                <span>Send</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}