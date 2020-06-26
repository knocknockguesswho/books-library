import React, { Component } from 'react';
import Authentication_Register from '../components/RegisterAndLogin/Register/composition/RegisterForm';

class Register extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
        <>
          <Authentication_Register/>
        </>
    )
  }
}

export default Register;