import axios from 'axios';

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

