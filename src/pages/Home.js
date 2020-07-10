import React, { Component } from 'react';
import Dashboard from '../components/Dashboard/Dashboard';
import axios from 'axios'
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { getBooks, GetAllGenre, GetAllAuthor } from '../redux/actions/GetBooks'
import { Logout } from '../redux/actions/Auth'

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      books: []
    }
  }

  getAllAuthor = ()=>{
    const token = this.props.Auth.data.token;
    this.props.GetAllAuthor(token)
  }

  getAllGenre = ()=>{
    const token = this.props.Auth.data.token;
    this.props.GetAllGenre(token)
  }

  getBooks = ()=>{
    const token = this.props.Auth.data.token
    this.props.getBooks(token);
  }

  async componentDidMount() {
    await this.getBooks();
    await this.getAllGenre();
    await this.getAllAuthor();
  }
  
  render(){
    if(this.props.Auth.isLogin==false){
      this.props.history.push('/login')
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

const mapDispatchToProps = { getBooks, Logout, GetAllGenre, GetAllAuthor };

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Home)