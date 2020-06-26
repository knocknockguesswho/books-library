import React, { Component } from 'react'
import '../assets/styles/Navbar.css';
import logo from '../assets/images/bookshelf.png'

class Navbar extends Component{
  constructor(props){
    super(props);
    this.state ={
      collapsed_a: false,
      collapsed_b: false
    }
  }
  menuDropdown_A=()=>{
    this.setState({
      collapsed_a: !this.state.collapsed_a
    })
  }
  
  menuDropdown_B=()=>{
    this.setState({
      collapsed_b: !this.state.collapsed_b
    })
  }

  render(){
    return(
      <div className='navbar-container'>
        <div className='menu-container'>
          <div className='menu-a'>
            <span onClick={this.menuDropdown_A}>All Categories &#9662;</span>
              <div className={this.state.collapsed_a==true?'submenu-a' : 'submenu-a inactive'}>
              <ul>
                <li>Romance</li>
                <li>Sci-Fi</li>
                <li>Politic</li>
              </ul>
              </div>
          </div>
          <div className='menu-b'>
            <span onClick={this.menuDropdown_B}>All Time &#9662;</span>
              <div className={this.state.collapsed_b==true?'submenu-b' : 'submenu-b inactive'}>
              <ul>
                <li>Today</li>
                <li>This Week</li>
                <li>This Month</li>
                <li>This Year</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='search-input'>
            {/* <i class="fa fa-search" style={{opacity: '.3'}}></i> */}
            <input type='text' name='search' placeholder='Search book' aria-label='Search' autoComplete='off'></input>
        </div>
        {/* <div className='logo-book'>
          <img src={logo}></img>
        </div> */}
      </div>
    )
  }
}

export default Navbar;