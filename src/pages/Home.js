import React, { Component } from 'react';
import Books from '../components/Books';
import Dashboard from '../components/Dashboard/Dashboard';

class Home extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <>
        <Dashboard />
      </>
    )
  }
}

export default Home;