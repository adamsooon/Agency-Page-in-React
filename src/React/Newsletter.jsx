import React from 'react';
import classnames from 'classnames';
import isEmailFormatValid from '../isEmailFormatValid';

export default class Newsletter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      label: '',
      isNewsletterSubmitted: false,
    };
  }

  newsletterSubmit = (e) => {
    e.preventDefault();

    this.setState({
      isNewsletterSubmitted: true,
    });
  };

  newsletterChange = (evt) => {
    this.setState({
      label: evt.target.value,
    });
  };

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
          <form
            className="newsletter-form"
            onSubmit={this.newsletterSubmit}
          >
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
                className={classnames(
                'newsletter-email', {
                  'invalid': !isEmailFormatValid(this.state.label) && this.state.isNewsletterSubmitted
                })}
                onChange={this.newsletterChange}
              />
              <label
                htmlFor="newsletter-email"
                className={classnames(
                'newsletter-label', {
                  'is-active': this.state.label.length > 0
                })}
              >
                Your email
              </label>
              <button
                type="submit"
                className="btn small green"
              >
                <span>Send</span>
              </button>
            </div>
            {!isEmailFormatValid(this.state.label) && this.state.isNewsletterSubmitted  && (
              <div className="newsletter-error">
                <span>
                  Niepoprawny format adresu e-mail <br />
                  Przykład: krzysztofkowalski@gmail.com
                </span>
              </div>
            )}
          </form>
        </div>
      </section>
    );
  }
}