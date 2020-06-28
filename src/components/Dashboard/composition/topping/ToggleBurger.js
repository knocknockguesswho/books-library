import React, { Component } from 'react';

class ToggleBurger extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <>
        <div className='hamburger'>
          <i className="fa fa-bars" aria-hidden="true" style={{cursor: 'pointer'}}></i>
        </div>
      </>
    )
  }
}

export default ToggleBurger;



