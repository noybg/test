import React, { Component } from 'react';
import "@fortawesome/fontawesome-free/css/all.css";


import './LoginForm.css';

const panelStyle = {
  backgroundColor: '#ffffffb8',
  border: 0,
  padding: 40,
  width: 400,
  height: 300,
  borderRadius:'20px'
};

class LoginForm extends Component {

  handleFormSubmit(e) {
    e.preventDefault();

    console.log("Work!");

  }

  render() {
    return (
      <div className='divStyle'>
        <div style={panelStyle}>
          <div className='panel-body'>
          <i className='fas fa-user'></i>
          <form id="loginForm" className='LoginForm form-horizontal'>
            <div className='group'>
            <i className='far fa-envelope'></i>
              <input type="email" placeholder="Email Address" id="formEmail" className='form-input'/>
            </div>
            <div className='group'>
              <input type="password" placeholder="Password" id="formPassword" className='form-input'/>
            </div>   
            <div>
              <button type="submit" className='buttonStyle' onClick={this.handleFormSubmit}>Login</button>
            </div>
          </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm;

