import React, { Component } from 'react';
import '../assets/styles/RegisterForm.css';
import Bookshelf from '../assets/images/bookshelf.png';
import { Link } from 'react-router-dom';
import { 
  Form, 
  FormGroup, 
  Label, 
  Input,
  Container,
  Row,
  Col
} from 'reactstrap';

class RegisterForm extends Component{
    constructor(props){
        super(props);
    }
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
                  <div className='bookshelf'><Link to='/'><img src={Bookshelf}></img></Link></div>
                  <div className='register-title'>
                    <h1 style={{fontWeight: '700', color: '#424242', fontSize: "50px"}}>Register</h1>
                    <span style={{fontWeight: '600'}}>Welcome Back, Please Register to create account</span>
                  </div>
                  <div className='form-input'>
                    <Form>
                      <FormGroup>
                        <Label for="exampleUsername">Username</Label>
                        <Input type="username" name="username" id="exampleUsername" placeholder="Username" autoComplete='off' />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleFullname">Fullname</Label>
                        <Input type="fullname" name="fullname" id="exampleFullname" placeholder="Fullname" autoComplete='off' />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Email" autoComplete='off' />
                      </FormGroup>
                      <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                      </FormGroup>
                      <div className='register-button-container'>
                        <button type='submit' className='register-button'>Sign up</button>
                        <button className='login-button'>Login</button>
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

export default RegisterForm;