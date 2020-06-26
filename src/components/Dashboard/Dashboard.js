import React, { Component } from 'react';
import Profile from '../Dashboard/composition/Profile';
import Navbar from '../Dashboard/composition/Navbar'

class Dashboard extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLoggedin: true
    }
  }
  
  render(){
    return(
      <div>
          <Profile />
          <Navbar />
      </div>
    )
  }
}

export default Dashboard;
