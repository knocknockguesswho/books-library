import React, { Component } from 'react';
import Dashboard from '../components/Dashboard/Dashboard';

class Home extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <>
        <Dashboard {...this.props}/>
      </>
    )
  }
}

export default Home;