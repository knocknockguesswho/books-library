import React, { Component } from 'react';
import '../assets/styles/LoginForm.css';
import Bookshelf from '../assets/images/bookshelf.png';
import { Link, Redirect } from 'react-router-dom';
import FailPopup from '../../../Dashboard/composition/topping/FailPopup';
import axios from 'axios';

import { connect } from 'react-redux';
import { Login } from '../../../../redux/actions/Auth';

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
      isLoggedin: false,
      username: '',
      password: '',
      role: '',
      avatar: '',
      status: false
    }
    console.log(this.props)
  }

  
  handleLogin = (event) => {
    event.preventDefault();
    const data = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.Login(data).then(()=>{
      this.props.history.push('/', {isLoggedin: this.props.Auth.isLogin, username: this.props.Auth.username, role: this.props.Auth.role, avatar: this.props.Auth.avatar, token: this.props.Auth.token});
      console.log(this.props)
    }).catch((err)=>{
      this.setState({status: true})
    })
  }
  
  handlePopUp = () =>{
    this.setState({status: false})
  }

  componentDidMount() {}
  
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
              <div className='bookshelf'><img src={Bookshelf}></img></div>
              <div className='login-title'>
                <h1 style={{fontWeight: '700', color: '#424242', fontSize: "50px"}}>Login</h1>
                <span style={{fontWeight: '600'}}>Welcome Back, Please Login to your account</span>
              </div>
              <div className='form-input'>
                <Form onSubmit={this.handleLogin}>
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
                  <FormGroup>
                  </FormGroup>
                  <div className='submit-button-container'>
                    <input type='submit' className='submit-button' value='Login'></input>
                    <Link className='link-button' style={{color:'#000'}} to='/register'>Sign up</Link>
                  </div>
                </Form>
                  </div>
              <div className='terms-condition'>
                <p>By signing up, you agree to Book’s <a href="">Terms and Conditions</a> & <a href="">Privacy Policy</a></p>
              </div>
            </div>
          </Col>
        </Row>
        <FailPopup message={'Username or Password Wrong!'} status={this.state.status} handlePopUp={this.handlePopUp}/>
      </Container>
    )
  }
}

// export default LoginForm;

const mapStateToProps = (state) =>({
  Auth: state.Auth
})

const mapDispatchToProps = { Login }

export default connect(
  mapStateToProps, 
  mapDispatchToProps)
  (LoginForm);