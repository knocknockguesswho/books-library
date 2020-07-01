import React, { Component } from 'react';
import Profile from '../Dashboard/composition/Profile';
import Navbar from '../Dashboard/composition/Navbar';
import Carousel from '../Dashboard/composition/Carousel';
import Cards from './composition/Cards';


class Dashboard extends Component{
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <div style={{overflow:'hidden'}}>
          <Profile {...this.props} />
          <Navbar />
          <div className='main' 
            style={
              {position:'relative', 
              left:'7.5%', 
              width: '85%', 
              marginTop: '2%'}
            }
          >
            <Carousel {...this.props}/>
            <Cards books={this.props.location.state.books} {...this.props}/>
          </div>
      </div>
    )
  }
}

export default Dashboard;
