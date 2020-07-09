import axios from 'axios';

export const Register = data =>{
  return{
    type: 'REGISTER',
    payload: axios(
      {
      method: 'POST',
      url: 'http://localhost:3000/auth/register',
      data: {
        fullname: data.fullname,
        username: data.username,
        password: data.password,
        email: data.email,
        role: data.role
      }
    })
  }
}


export const Login = data =>{
  return {
    type: 'LOGIN',
    payload: axios(
      {
      method: 'POST',
      url: 'http://localhost:3000/auth/login',
      data: {
        username: data.username,
        password: data.password
      }
    })  
  };
};

export const Logout = () =>{
  return {
    type: 'LOGOUT_FULFILLED'
  };
};


