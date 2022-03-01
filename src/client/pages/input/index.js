import React from 'react';
import ReactDOM from 'react-dom';

class HInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.defaultValue || ''
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    console.log('onChange', e.target.value);
    this.setState({
      value: e.target.value
    });

    this.props.onChange && this.props.onChange(e);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <input value={this.state.value} onChange={this.onChange} class="h-input" />
        <p>{this.state.value}</p>
      </div>
    );
  }
}

module.exports = HInput;

if (typeof window !== 'undefined') {
  var container = document.getElementById('app');
  ReactDOM.render(<HInput />, container);
}
