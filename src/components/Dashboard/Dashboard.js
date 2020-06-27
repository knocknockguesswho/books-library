import React, { Component } from 'react';
import Profile from '../Dashboard/composition/Profile';
import Navbar from '../Dashboard/composition/Navbar'
import Carousel from '../Dashboard/composition/Carousel'

class Dashboard extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLoggedin: true,
      books: []
    }
  }
  
  render(){
    return(
      <div>
          <Profile />
          <Navbar />
          <div className='main' 
          style={
            {position:'relative', 
            left:'5%', 
            width: '90%', 
            marginTop: '2%'}}>
            <Carousel />
          </div>
      </div>
    )
  }
}

export default Dashboard;
