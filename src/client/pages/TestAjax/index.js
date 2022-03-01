import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../../components/Layout';
import UserCard from '../../components/UserCard';
import styles from './styles.css';

class TestAjax extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [], isShow: false };
    this.showUsers = this.showUsers.bind(this);
  }

  componentDidMount() {
    this.setState({
      users: window.__state__.users
    });
    // console.log('window.__state__', window.__state__);
  }

  showUsers() {
    this.setState({
      isShow: true
    });
  }

  render() {
    console.log('---------', this);
    const { users, isShow } = this.state;
    return (
      <Layout>
        <button onClick={this.showUsers}>Show users</button>
        <div className="userCardList">{isShow && users.map((u) => <UserCard user={u} />)}</div>
      </Layout>
    );
  }
}

module.exports = TestAjax;

if (typeof window !== 'undefined') {
  var container = document.getElementById('app');
  ReactDOM.render(<TestAjax />, container);
}
