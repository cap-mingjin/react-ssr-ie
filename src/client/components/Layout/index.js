import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './style.css';

class Layout extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="content">{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
