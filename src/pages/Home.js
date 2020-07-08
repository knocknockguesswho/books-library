import React, { Component } from 'react';
import Dashboard from '../components/Dashboard/Dashboard';
import axios from 'axios'
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { getBooks } from '../redux/actions/GetBooks'
import { Logout } from '../redux/actions/Auth'

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      books: []
    }
  }

  getBooks = ()=>{
    const token = this.props.Auth.data.token
    this.props.getBooks(token);
  }

  async componentDidMount() {
    await this.getBooks();
  }
  
  render(){
    if(this.props.Auth.isLogin==false){
      this.props.history.push('/')
    }
    return(
      <>
        <Dashboard {...this.props} />
      </>
    )
  }
}

const mapStateToProps = state => ({
  Auth: state.Auth,
  Books: state.Books
});

const mapDispatchToProps = { getBooks, Logout };

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Home)