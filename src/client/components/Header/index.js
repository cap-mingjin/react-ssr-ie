import React from 'react';
import styles from './style.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/page1">Page1</a>
          </li>
          <li>
            <a href="/test">Test AJAX</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
