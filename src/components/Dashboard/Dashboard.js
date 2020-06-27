import React, { Component } from 'react';
import Profile from '../Dashboard/composition/Profile';
import Navbar from '../Dashboard/composition/Navbar';
import Carousel from '../Dashboard/composition/Carousel';
import Card from '../Dashboard/composition/Card';

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
      <div style={{overflow:'hidden'}}>
          <Profile />
          <Navbar />
          <div className='main' 
          style={
            {position:'relative', 
            left:'7.5%', 
            width: '85%', 
            marginTop: '2%'}}>
            <Carousel />
            <Card />
          </div>
      </div>
    )
  }
}

export default Dashboard;
