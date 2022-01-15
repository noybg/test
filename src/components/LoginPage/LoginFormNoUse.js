import React, { Component } from 'react';
import { Panel, Form, FormGroup, FormControl, Button } from 'react-bootstrap';


const divStyle = {
  display: 'flex',
  alignItems: 'center',
  marginTop: -100
};

const panelStyle = {
  backgroundColor: 'rgba(255,255,255,0.5)',
  border: 0,
  paddingLeft: 20,
  paddingRight: 20,
  width: 300,
};

const buttonStyle = {
  marginBottom: 0
};

class LoginForm extends Component {

  handleFormSubmit(e) {
    e.preventDefault();

    console.log("tom and noy!");

  }

  render() {
    return (
      // <div style={divStyle}>
      //   <Panel style={panelStyle}>
      //     <Form horizontal className="LoginForm" id="loginForm">
      //       <FormGroup controlId="formEmail">
      //         <FormControl type="email" placeholder="Email Address" />
      //       </FormGroup>
      //       <FormGroup controlId="formPassword">
      //         <FormControl type="password" placeholder="Password" />
      //       </FormGroup>
      //       <FormGroup style={buttonStyle} controlId="formSubmit">
      //         <Button bsStyle="primary" type="submit" onClick={this.handleFormSubmit}>
      //           Login
      //         </Button>
      //       </FormGroup>
      //     </Form>
      //   </Panel>
      // </div>

      <div style={divStyle}>
        <Panel style={panelStyle}>
          <form id="loginForm" className='LoginForm form-horizontal'>
            <div className='form-group'>
              <input type="email" placeholder="Email Address" id="formEmail" className='form-control'/>
            </div>
            <div className='form-group'>
              <input type="password" placeholder="Password" id="formPassword" className='form-control'/>
            </div>   
            <div>
              <button type="submit" className='btn btn-primary' onClick={this.handleFormSubmit}>Login</button>
            </div>
          </form>
        </Panel>
      </div>

          
    // <div class="LoginPage">
    //   <div style="display: flex; align-items: center; margin-top: -100px;">`
    //     <div class="panel panel-default" style="background-color: rgba(255, 255, 255, 0.5); border: 0px; padding-left: 20px; padding-right: 20px; width: 300px;">
    //       <div class="panel-body">
    //         <form id="loginForm" class="LoginForm form-horizontal">
    //           <div class="form-group">
    //             <label></label>
    //             <input type="email" placeholder="Email Address" id="formEmail" class="form-control"/>
    //           </div>
    //           <div class="form-group">
    //             <input type="password" placeholder="Password" id="formPassword" class="form-control"/>
    //           </div>
    //           <div class="form-group" style="margin-bottom: 0px;">
    //             <button type="submit" class="btn btn-primary"  onClick={this.handleFormSubmit}>Login</button>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div> 
    // </div>
    )
  }
}

export default LoginForm;
