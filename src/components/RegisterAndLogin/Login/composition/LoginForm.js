import React, { Component } from 'react';
import '../assets/styles/LoginForm.css';
import Bookshelf from '../assets/images/bookshelf.png';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { 
  Form, 
  FormGroup, 
  Label, 
  Input,
  Container,
  Row,
  Col
} from 'reactstrap';

class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state = {
          username: '',
          password: ''
        }
    }

    
    loginAuth = (event) => {
      event.preventDefault();
      axios({
        method: 'POST',
        url: 'http://localhost:3000/auth/login',
        data: {
          username: this.state.username,
          password: this.state.password
        },
      })
      .then((res)=>{
        console.log(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
      // console.log(this.state.username)
    }
    
    // isLoggedin = (event) =>{
    //   event.preventDefault();
    //   const data = this.state.username

    // }

    // componentDidMount(){
      
    // }

    render(){
        return(
          <Container className="themed-container" fluid={true}>
            <Row>
              <Col md='7'>
                <div>
                  <div className='background'></div>
                  <div className='filter'><p>Book is a window to the world</p></div>
                </div>
              </Col>
              <Col md='5' className='main-container'>
                <div className='form-container'>
                  <p>[LOG]Username: {this.state.username} </p>
                  <div className='bookshelf'><Link to='/'><img src={Bookshelf}></img></Link></div>
                  <div className='login-title'>
                    <h1 style={{fontWeight: '700', color: '#424242', fontSize: "50px"}}>Login</h1>
                    <span style={{fontWeight: '600'}}>Welcome Back, Please Login to your account</span>
                  </div>
                  <div className='form-input'>
                    <Form onSubmit={this.loginAuth}>
                      <FormGroup>
                        <Label for="exampleUsername">Username</Label>
                        <Input type="text" name="username" id="exampleUsername" placeholder="Username" value={this.state.username} onChange={(e)=>this.setState({username: e.target.value})} autoComplete='off' />
                      </FormGroup>
                      <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="Password" value={this.state.password} onChange={(e)=>this.setState({password: e.target.value})} autoComplete='off' />
                      <div className='remember-me'>
                        <FormGroup row>
                            <Col sm={{ size: 6 }}>
                            <FormGroup check>
                                <Label check>
                                <Input type="checkbox" id="checkbox2" />{' '}
                                Remember me
                                </Label>
                            </FormGroup>
                            </Col>
                            <Col sm={{ size: 6 }}>
                            <FormGroup check style={{textAlign: 'right', fontWeight: '500'}}>
                                <a href="">Forgot Password?</a>
                            </FormGroup>
                            </Col>
                        </FormGroup>
                      </div>
                      </FormGroup>
                      <div className='login-button-container'>
                        <button type='submit' className='login-button'>Login</button>
                        <button className='register-button'>Sign up</button>
                      </div>
                    </Form>
                      </div>
                  <div className='terms-condition'>
                    <p>By signing up, you agree to Book’s <a href="">Terms and Conditions</a> & <a href="">Privacy Policy</a></p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        )
    }
}

export default LoginForm;