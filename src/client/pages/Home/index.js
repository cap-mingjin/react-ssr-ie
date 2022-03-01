import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../../components/Layout';

class Home extends React.Component {
  constructor(params) {
    super(params);
    this.state = {
      ssr: '',
      str: ''
    };
  }
  componentDidMount() {
    this.setState({
      ssr: window.__state__.ssr
    });
    // console.log('window.__state__', window.__state__);
  }

  onClick() {
    this.setState({
      str: 'you click me'
    });
  }

  render() {
    console.log('---------', this);
    let { ssr, str } = this.state;
    console.log(ssr);
    // if (!ssr) {
    //   return '';
    // }
    return (
      <Layout>
        <h2>
          Welcome Home page
          <div>{ssr}</div>
          {/* <img src="/assets/images/tongxin.png" onClick={this.onClick.bind(this)} />
          {str} */}
        </h2>
      </Layout>
    );
  }
}

module.exports = Home;
console.log('------');
if (typeof window !== 'undefined') {
  var container = document.getElementById('app');
  ReactDOM.render(<Home />, container);
}
