import React, { Component } from 'react';
import LoginForm from './LoginForm';
import LoginFormNoUse from './LoginFormNoUse';

import './LoginPage.css';

class LoginPage extends Component {
  render() {
    return (
      <div className="LoginPage">
        <LoginForm />
        {/* <LoginFormNoUse /> */}
      </div>
    );
  }
}

export default LoginPage;
