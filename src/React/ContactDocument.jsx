import React from 'react';
// import MediaQuery from 'react-responsive';
// import Breakpoint from '../breakpoints.json';
import Select from 'react-select';
// import 'react-select/dist/react-select.css';

const options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' }
];

export default class ContactDocument extends React.Component {
  componentDidMount() {
    console.log(this.props.location.pathname);
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

  logChange(val) {
    console.log("Selected: " + val);
  }

  render() {

    return (
      <section className="contact">
        <div className="container contact-details">
          <form className="contact-form">
            <div className="contact-form-box">
              <input 
                type="text"
                className="contact-input"
                placeholder="YOUR NAME" 
              />
              <input 
                type="email"
                className="contact-input"
                placeholder="YOUR EMAIL" 
              />
            </div>
            <Select
              name="form-field-name"
              value="one"
              options={options}
              multi={true}
            />
            <textarea 
              className="contact-input contact-message"
              placeholder="YOUR MESSAGE" 
            />
          </form>
        </div>
      </section>
    );
  }
}