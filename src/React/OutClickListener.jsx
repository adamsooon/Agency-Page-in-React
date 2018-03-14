import React from 'react';
import ReactDOM from 'react-dom';

const myElement = document.getElementById('app');

export default class OutClickListener extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static propTypes = {
    children: React.PropTypes.node.isRequired,
    onClickOutside: React.PropTypes.func.isRequired
  };

  componentDidMount () {
    myElement.addEventListener('click', this.handleDocumentClick);
  }

  componentWillUnmount () {
    myElement.removeEventListener('click', this.handleDocumentClick);
  }

  /* using fat arrow to bind to instance */
  handleDocumentClick = (evt) => {
    const area = ReactDOM.findDOMNode(this.refs.area);

    if (!area.contains(evt.target)) {
      this.props.onClickOutside(evt)
    }
  }

  render () {
    return (
    <div ref='area'>
      {this.props.children}
    </div>
    )
  }
}