import React, { Component } from 'react';
import Profile from '../Dashboard/composition/Profile';
import Navbar from '../Dashboard/composition/Navbar';
import Carousel from '../Dashboard/composition/Carousel';
import Cards from './composition/Cards';


class Dashboard extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLoggedin: true
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
              marginTop: '2%'}
            }
          >
            <Carousel />
            <Cards books={this.props.data} {...this.props}/>
          </div>
      </div>
    )
  }
}

export default Dashboard;
