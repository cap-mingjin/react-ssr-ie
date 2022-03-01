import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../../components/Layout';

class Page1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isYes: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(e) {
    console.log('toggle', e.target.value);
    this.setState({
      isYes: !this.state.isYes
    });
  }

  render() {
    return (
      <Layout>
        <div>Toggle Yes/No: {this.state.isYes ? 'Yes' : 'No'}</div>
        <button onClick={this.toggle}>Toggle</button>
      </Layout>
    );
  }
}

module.exports = Page1;

if (typeof window !== 'undefined') {
  var container = document.getElementById('app');
  ReactDOM.render(<Page1 />, container);
}
