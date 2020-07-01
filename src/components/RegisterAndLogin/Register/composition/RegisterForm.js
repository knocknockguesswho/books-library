import React, { Component } from 'react';
import '../assets/styles/RegisterForm.css';
import Bookshelf from '../assets/images/bookshelf.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import parse from 'html-react-parser';
import FailPopup from '../../../Dashboard/composition/topping/FailPopup';
import SuccessPopup from '../../../Dashboard/composition/topping/SuccessPopup';
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
        this.state = {
          fullname: '',
          username: '',
          password: '',
          email: '',
          role: '',
          message: '',
          isExist: false,
          successPopUpStatus: false,
          failPopUpStatus: false,
          popUpModal: null,
          isSuccess: ''
        }
    }

    registerAuth =(event)=>{
      event.preventDefault();
      axios({
        method: 'POST',
        url: 'http://localhost:3000/auth/register',
        data: {
          fullname: this.state.fullname,
          username: this.state.username,
          password: this.state.password,
          email: this.state.email,
          role: this.handleRole(this.state.role)
        }
      })
      .then((res)=>{
        this.setState({
          message: parse(`Thank you <b>${this.state.fullname}</b> for register on our services.`),
          successPopUpStatus: true
        })
        console.log(res);
      })
      .catch((err)=>{
        this.setState({
          message: parse(`Sorry <b>${this.state.fullname}</b> something bad happened.`),
          failPopUpStatus: true
        })
        console.log(err.response);
      })
    }

    handleSuccessPopUp = () =>{
      this.setState({successPopUpStatus: false})
    }
    handleFailPopUp = () =>{
      this.setState({failPopUpStatus: false})
    }

    handleRole = (param) =>{
      switch (param) {
        case 'admin':
          return 1;
        case 'member':
          return 2;
        case 'user':
          return 3;
      }
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
                    <Form onSubmit={this.registerAuth}>
                      <FormGroup>
                        <Label for="exampleUsername">Username</Label>
                        <Input type="username" name="username" id="exampleUsername" placeholder="Username" autoComplete='off' value={this.state.username} onChange={(e)=>this.setState({username: e.target.value})} />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleFullname">Fullname</Label>
                        <Input type="fullname" name="fullname" id="exampleFullname" placeholder="Fullname" autoComplete='off' value={this.state.fullname} onChange={(e)=>this.setState({fullname: e.target.value})} />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Email" autoComplete='off' value={this.state.email} onChange={(e)=>this.setState({email: e.target.value})} />
                      </FormGroup>
                      <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="Password" value={this.state.password} onChange={(e)=>this.setState({password: e.target.value})} />
                      </FormGroup>
                      <FormGroup>
                        <Label for="examplePassword">Role</Label>
                        <Input type="text" name="role" id="exampleRole" placeholder="Role" value={this.state.role} onChange={(e)=>this.setState({role: e.target.value})} />
                      </FormGroup>
                      <div className='submit-button-container'>
                        <input type='submit' className='submit-button' value='Sign up'></input>
                        <Link className='link-button' style={{color:'#000'}} to='/login'>Login</Link>
                      </div>
                    </Form>
                  </div>
                  <div className='terms-condition'>
                    <p>By signing up, you agree to Book’s <a href="">Terms and Conditions</a> & <a href="">Privacy Policy</a></p>
                  </div>
                </div>
              </Col>
            </Row>
            <SuccessPopup message={this.state.message} status={this.state.successPopUpStatus} handlePopUp={this.handleSuccessPopUp} />
            <FailPopup message={this.state.message} status={this.state.failPopUpStatus} handlePopUp={this.handleFailPopUp}/>
          </Container>
        )
    }
}

export default RegisterForm;