import React, { Component } from 'react';
import Authentication_Login from '../components/RegisterAndLogin/Login/composition/LoginForm';

class Login extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
        <>
          <Authentication_Login/>
        </>
    )
  }
}

export default Login;