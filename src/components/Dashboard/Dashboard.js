import React, { Component } from 'react';
import Profile from '../Dashboard/composition/Profile';
import Navbar from '../Dashboard/composition/Navbar';
import Carousel from './composition/Carousel';
import Cards from './composition/Cards';
// import axios from 'axios'
// import { connect } from 'react-redux';
// import { getBooks } from '../../redux/actions/GetBooks'
// import { Logout } from '../../redux/actions/Auth'


class Dashboard extends Component{
  constructor(props){
    super(props);
    this.state = {
      books: props
    }
  }
  
  render(){
    return(
      <div style={{overflow:'hidden'}}>
          <Profile {...this.props} />
          <Navbar />
          <div className='main' 
            style={
              {position:'relative', 
              left:'10%', 
              width: '85%', 
              marginTop: '10%'}
            }
          >
            {this.props.Books.isLoading ? 'Loading...' : <Carousel data={this.props.Books.data} {...this.props} />}
            <Cards books={this.props.Books.data} {...this.props}/>
          </div>
      </div>
    )
  }
}

export default Dashboard;
