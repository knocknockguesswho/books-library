import React, { Component } from 'react'
import '../assets/styles/Navbar.css';
import logo from '../assets/images/bookshelf.png'
import { Search, FilterInput } from '../../../redux/actions/Filter';
import { connect } from 'react-redux'

class Navbar extends Component{
  constructor(props){
    super(props);
    this.state ={
      collapsed_a: false,
      collapsed_b: false,
      searchInput: '',
      filterInput: ''
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

  searchInput = (event)=> {
    const SearchResult = event
    this.props.Search(SearchResult)
  }

  filterInput = (filter) => ()=>{
    this.props.FilterInput(filter)
    this.menuDropdown_A();
  }


  render(){
    return(
      <div className='navbar-container'>

        <div className='menu-container'>
          <div className='menu-a'>
            <span onClick={this.menuDropdown_A}>{this.props.Filter.isFiltering ? this.props.Filter.filterResult : 'All Categories'} &#9662;</span>
              <div className={this.state.collapsed_a==true?'submenu-a' : 'submenu-a inactive'}>
              <ul>
                <li onClick={this.filterInput('Romance')} href='#display'>Romance</li>
                <li onClick={this.filterInput('Technology')}>Technology</li>
                <li onClick={this.filterInput('Politic')}>Politic</li>
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
            <input type='text' name='search' placeholder='Search book' value={this.props.Search.input} aria-label='Search' autoComplete='off' onChange={(event)=>this.searchInput(event.target.value)}></input>
        </div>
        {/* <div className='logo-book'>
          <img src={logo}></img>
        </div> */}
      </div>
    )
  }
}

const mapStateToProps = (state)=>({
  Auth: state.Auth,
  Books: state.Books,
  Filter: state.Filter
});

const mapDispatchToProps = { Search, FilterInput }

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Navbar)